import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Task} from '../../types/Task';
import {styles} from './styles';
import {BackArrow} from '../../assets/images';
import api from '../../services/api';

const AddTaskScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const editTask = route.params?.editTask;
  const isEditMode = !!editTask;

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDetail(editTask.detail);
    }
  }, [editTask]);

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a title');
      return;
    }

    try {
      if (isEditMode) {
        await api.updateTask(editTask.id, {
          title: title.trim(),
          detail: detail.trim(),
        });
      } else {
        const newTask: Omit<Task, 'id'> = {
          title: title.trim(),
          detail: detail.trim(),
          completed: false,
        };
        await api.addTask(newTask);
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', `Failed to ${isEditMode ? 'update' : 'add'} task`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {isEditMode ? 'Edit Task' : 'Add Task'}
        </Text>
        <View style={{width: 24}} />
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#666"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.detailInput]}
          placeholder="Detail"
          placeholderTextColor="#666"
          multiline
          value={detail}
          onChangeText={setDetail}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleSave}>
          <Text style={styles.addButtonText}>
            {isEditMode ? 'UPDATE' : 'ADD'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTaskScreen;
