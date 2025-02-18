import axios from 'axios';
import { Task } from '../types/Task';

const API_URL = 'http://192.168.2.89:3000/api';

const api = {
  getTasks: async (): Promise<Task[]> => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  },

  addTask: async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
  },

  updateTask: async (id: string, updates: Partial<Task>): Promise<Task> => {
    const response = await axios.put(`${API_URL}/tasks/${id}`, updates);
    return response.data;
  },

  deleteTask: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/tasks/${id}`);
  },
};

export default api; 