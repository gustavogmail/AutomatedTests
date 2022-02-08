const { I } = inject();

module.exports = {

  locators: {
    username: '//*[@id="root"]/div/form/div[1]/input',
    password: '//*[@id="root"]/div/form/div[2]/input',
    buttonSend: '//*[@id="root"]/div/form/div[3]/button'
  },

  login(username, password) {
    I.fillField(this.locators.username, username)
    I.fillField(this.locators.password, password)
    I.click(this.locators.buttonSend)
  }
}
