import { IDL, query, update } from 'azle';

// Define the Task structure using IDL
const Task = IDL.Record({
    id: IDL.Nat,
    title: IDL.Text,
    description: IDL.Text,
    assignedTo: IDL.Opt(IDL.Principal),
    isCompleted: IDL.Bool
});

// Define the Task type manually
type Task = {
    id: number;
    title: string;
    description: string;
    assignedTo: [] | [typeof IDL.Principal.name]; // Optional field represented as an array
    isCompleted: boolean;
};

export default class TaskManager {
    private tasks: Task[] = [];
    private nextTaskId: number = 0;

    // Create a new task
    @update([IDL.Text, IDL.Text], IDL.Nat)
    createTask(title: string, description: string): number {
        const taskId = this.nextTaskId++;
        const newTask: Task = {
            id: taskId,
            title,
            description,
            assignedTo: [], // Initially unassigned
            isCompleted: false
        };
        this.tasks.push(newTask);
        return taskId;
    }

    // Get all tasks
    @query([], IDL.Vec(Task))
    getAllTasks(): Task[] {
        return this.tasks;
    }

    // Get a task by its ID
    @query([IDL.Nat], IDL.Opt(Task))
    getTaskById(taskId: number): [] | [Task] {
        const task = this.tasks.find(t => t.id === taskId);
        return task ? [task] : []; // Return as an optional value
    }

    // Assign a task to a user
    @update([IDL.Nat, IDL.Principal], IDL.Bool)
    assignTask(taskId: number, assignee: typeof IDL.Principal.name): boolean {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.assignedTo = [assignee]; // Assign the task
            return true;
        }
        return false;
    }

    // Mark a task as completed
    @update([IDL.Nat], IDL.Bool)
    completeTask(taskId: number): boolean {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.isCompleted = true;
            return true;
        }
        return false;
    }

    // Update a task's title and description
    @update([IDL.Nat, IDL.Text, IDL.Text], IDL.Bool)
    updateTask(taskId: number, title: string, description: string): boolean {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.title = title;
            task.description = description;
            return true;
        }
        return false;
    }

    // Delete a task by its ID
    @update([IDL.Nat], IDL.Bool)
    deleteTask(taskId: number): boolean {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(t => t.id !== taskId);
        return this.tasks.length !== initialLength;
    }
}