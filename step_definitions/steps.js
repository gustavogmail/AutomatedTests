const { I, todo_applicationPage } = inject();
// Add in your custom step files

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
