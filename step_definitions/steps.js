const { 
  I, 
  todo_applicationPage, 
  login_form_applicationPage 
} = inject();

// =========== TODO APP Steps ===========
Given('I am on the login page', (table) => {
  I.amOnPage('/login-form');
});
When('I tried to log in with a valid user', (table) => {
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }
    // go by row cells
    const cells = table.rows[id].cells;
    // take values
    const username = cells[0].value;
    const password = cells[1].value;
    
    login_form_applicationPage.login(username, password);
  }
})
When('I tried to log in with a invalid user', (table) => {
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }
    // go by row cells
    const cells = table.rows[id].cells;
    // take values
    const username = cells[0].value;
    const password = cells[1].value;
    
    login_form_applicationPage.login(username, password);
  }
})
Then('I can see the success message', () => {
  I.seeInPopup('Successfully logged in!')
})
Then('I can see the error message', () => {
  I.seeInPopup('Invalid username or password!')
})
// =========== TODO APP Steps ===========
Given('I am on the main page', (table) => {
  I.amOnPage('/todo');
});
When('I add multiple tasks in the list', (table) => {
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }
    // go by row cells
    const cells = table.rows[id].cells;

    // take values
    const task = cells[0].value;
    const day = cells[1].value;
    
    todo_applicationPage.addTodo(task);
  }
});
Then('I can see the added tasks items', () => {
  I.waitForVisible('.todo-item');
});
