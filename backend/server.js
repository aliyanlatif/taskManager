const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DB_PATH = path.join(__dirname, 'db.json');

// Read tasks from JSON file
async function readTasks() {
  const data = await fs.readFile(DB_PATH, 'utf8');
  return JSON.parse(data).tasks;
}

// Write tasks to JSON file
async function writeTasks(tasks) {
  await fs.writeFile(DB_PATH, JSON.stringify({ tasks }, null, 2));
}

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Add new task
app.post('/api/tasks', async (req, res) => {
  try {
    const tasks = await readTasks();
    const newTask = {
      ...req.body,
      id: Date.now().toString(),
    };
    tasks.unshift(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add task' });
  }
});

// Update task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const index = tasks.findIndex(task => task.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
    tasks[index] = { ...tasks[index], ...req.body };
    await writeTasks(tasks);
    res.json(tasks[index]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const filteredTasks = tasks.filter(task => task.id !== req.params.id);
    await writeTasks(filteredTasks);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 