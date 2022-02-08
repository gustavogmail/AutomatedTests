const { I } = inject();

module.exports = {

  locators: {
    newTodo: '#newTodo',
    todoItem: '.todo-item',
    checker: '.checker',
    todoItemInput: '.todoItemInput'
  },

  addTodo(todoText) {
    I.fillField(this.locators.newTodo, todoText)
    I.pressKey('Enter');
  }
}
