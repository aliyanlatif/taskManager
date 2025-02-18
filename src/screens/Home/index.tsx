import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Task} from '../../types/Task';
import {styles} from './styles';
import {TaskItem} from './components/TaskItemCard';
import {CompletedIcon, MenuIcon, PlusIcon} from '../../assets/images';
import AppColors from '../../theme/appColor';
import api from '../../services/api';

const HomeScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadTasks();
    });

    return unsubscribe;
  }, [navigation]);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      const fetchedTasks = await api.getTasks();
      console.log(fetchedTasks);

      setTasks(fetchedTasks);
    } catch (error) {
      Alert.alert('Error', 'Failed to load tasks');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTask = async (newTask: Task) => {
    try {
      const addedTask = await api.addTask(newTask);
      setTasks(currentTasks => [addedTask, ...currentTasks]);
    } catch (error) {
      Alert.alert('Error', 'Failed to add task');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteTask(id);
      setTasks(currentTasks => currentTasks.filter(task => task.id !== id));
    } catch (error) {
      Alert.alert('Error', 'Failed to delete task');
    }
  };

  const handleToggleComplete = async (id: string) => {
    try {
      const taskToUpdate = tasks.find(task => task.id === id);
      if (!taskToUpdate) return;
      const updatedTask = await api.updateTask(id, {
        completed: !taskToUpdate.completed,
      });
      setTasks(currentTasks =>
        currentTasks.map(task => (task.id === id ? updatedTask : task)),
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to update task');
    }
  };

  const handleEdit = (task: Task) => {
    navigation.navigate('AddTaskScreen', {editTask: task});
  };

  const filteredtask = showCompleted
    ? tasks.filter(task => task.completed)
    : tasks;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TASK MANAGER</Text>
        <TouchableOpacity
          style={styles.calendarButton}
          onPress={() => navigation.navigate('AddTaskScreen')}>
          <PlusIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.taskList}
        contentContainerStyle={styles.taskListContent}>
        {filteredtask.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
            onEdit={handleEdit}
          />
        ))}
      </ScrollView>

      <View style={styles.bottomTabs}>
        <TouchableOpacity
          style={styles.tabItem}
          hitSlop={100}
          onPress={() => setShowCompleted(false)}>
          <MenuIcon color={showCompleted ? AppColors.black : AppColors.white} />
          <Text
            style={[styles.tabTextStyle, !showCompleted && styles.activeTab]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          hitSlop={100}
          onPress={() => setShowCompleted(true)}>
          <CompletedIcon
            width={23}
            height={23}
            color={!showCompleted ? AppColors.black : AppColors.white}
          />
          <Text
            style={[styles.tabTextStyle, showCompleted && styles.activeTab]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
