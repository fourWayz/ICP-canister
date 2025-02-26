# CANISTER ID : bd3sg-teaaa-aaaaa-qaaba-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai

# Task Management App on ICP

This is a task management application built on the Internet Computer (ICP). The app allows users to create, manage, and track tasks through a smart contract deployed on ICP.

## Features

The smart contract provides the following functionalities:

1. **Create a Task**: Add a new task with a title and description.
2. **Get All Tasks**: Retrieve a list of all tasks.
3. **Get Task by ID**: Fetch a specific task by its unique ID.
4. **Assign a Task**: Assign a task to a user (represented by a Principal).
5. **Complete a Task**: Mark a task as completed.
6. **Update a Task**: Modify the title and description of a task.
7. **Delete a Task**: Remove a task by its ID.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [DFX](https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html) (Internet Computer SDK)
- [Azle](https://github.com/demergent-labs/azle) (v0.27.0)

## Setup

   **Clone the Repository**:
   ```bash
   git clone https://github.com/fourWayz/ICP-canister.git
   cd taskit
   ```

   **Install Dependencies**:
   ```bash
   npm install
   ```

   **Deploy the Smart Contract**:
   Start a local Internet Computer replica and deploy the canister:
   ```bash
   dfx start --background
   dfx deploy
   ```


### Methods

| Method Name     | Parameters                          | Return Type | Description                              |
|-----------------|-------------------------------------|-------------|------------------------------------------|
| `createTask`    | `title: string, description: string` | `Nat`       | Creates a new task and returns its ID.   |
| `getAllTasks`   | None                                | `Vec(Task)` | Returns a list of all tasks.             |
| `getTaskById`   | `taskId: Nat`                       | `Opt(Task)` | Returns a task by its ID (if it exists). |
| `assignTask`    | `taskId: Nat, assignee: Principal`  | `Bool`      | Assigns a task to a user.                |
| `completeTask`  | `taskId: Nat`                       | `Bool`      | Marks a task as completed.               |
| `updateTask`    | `taskId: Nat, title: string, description: string` | `Bool` | Updates a task's title and description. |
| `deleteTask`    | `taskId: Nat`                       | `Bool`      | Deletes a task by its ID.                |


## Example Usage

### Create a Task
```bash
dfx canister call task_manager createTask '("Buy groceries", "Milk, eggs, and bread")'
```

### Get All Tasks
```bash
dfx canister call task_manager getAllTasks
```

### Assign a Task
```bash
dfx canister call task_manager assignTask '(0, principal "your-principal-here")'
```

### Complete a Task
```bash
dfx canister call task_manager completeTask '(0)'
```

### Update a Task
```bash
dfx canister call task_manager updateTask '(0, "Buy groceries", "Milk, eggs, bread, and butter")'
```

### Delete a Task
```bash
dfx canister call task_manager deleteTask '(0)'
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
