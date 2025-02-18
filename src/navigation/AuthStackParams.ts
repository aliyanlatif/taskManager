import { Task } from '../types/Task';

type AuthStackParams = {
    HomeScreen: undefined;
    AddTaskScreen: { editTask?: Task } | undefined;
}

export default AuthStackParams;