import {Text, View, TouchableOpacity} from 'react-native';
import {Task} from '../../../types/Task';
import {styles} from '../styles';
import {
  CompletedFilledIcon,
  CompletedIcon,
  DeleteIcon,
  EditIcon,
} from '../../../assets/images';

export const TaskItem = ({
  task,
  onDelete,
  onToggleComplete,
  onEdit,
}: {
  task: Task;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onEdit: (task: Task) => void;
}) => {
  return (
    <View style={styles.taskCard}>
      <View style={styles.taskContent}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskSubtitle}>{task.detail}</Text>
      </View>
      <View style={styles.taskActions}>
        <TouchableOpacity onPress={() => onEdit(task)}>
          <EditIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <DeleteIcon />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onToggleComplete(task.id)}>
          {task.completed ? <CompletedFilledIcon /> : <CompletedIcon />}
        </TouchableOpacity>
      </View>
    </View>
  );
};
