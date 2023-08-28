

// Get todos from local storage
export function getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return new Promise((resolve) => {
        resolve([...todos]);
    });
}

// Add a new todo to local storage
export function postTodo(newTodo) {
    return new Promise((resolve) => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const createdTime = Date.now();
        const timeSpent = 0;
        const completed = false;
        const todo = { id: createdTime, ...newTodo, createdTime, timeSpent, completed };
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        resolve(todo);
    });
}

// Mark a todo as complete in local storage
export function completeTodo(todoId) {
    return new Promise((resolve, reject) => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const todoIndex = todos.findIndex((todo) => todo.id === todoId);
        if (todoIndex !== -1) {
            todos[todoIndex].completed = true;
            localStorage.setItem('todos', JSON.stringify(todos));
            resolve();
        } else {
            reject(new Error('Todo not found'));
        }
    });
}

// Delete a todo from local storage
export function deleteTodo(todoId) {
    return new Promise((resolve, reject) => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const todoIndex = todos.findIndex((todo) => todo.id === todoId);
        if (todoIndex !== -1) {
            todos.splice(todoIndex, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            resolve();
        } else {
            reject(new Error('Todo not found'));
        }
    });
}

// By Promises
/* const todos = [];


export function getTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...todos]);
    }, 500);
  });
}


export function postTodo(newTodo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const createdTime = Date.now();
      const timeSpent = 0;
      const completed = false;
      const todo = { id: createdTime, ...newTodo, createdTime, timeSpent, completed };
      todos.push(todo);
      resolve(todo);
    }, 500); 
  });
}

export function completeTodo(todoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todoIndex = todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        todos[todoIndex].completed = true;
        resolve();
      } else {
        reject(new Error('Todo not found'));
      }
    }, 500); 
  });
}


export function deleteTodo(todoId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todoIndex = todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        resolve();
      } else {
        reject(new Error('Todo not found'));
      }
    }, 500); 
  });
} */
