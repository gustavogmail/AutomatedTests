Feature('creates_todo_item_test');

Scenario('Create a Todo Item', ({ I,todo_applicationPage }) => {
    I.amOnPage('/todo');
    todo_applicationPage.addTodo('Adding new task for today');
    I.waitForVisible('.todo-item');
});
