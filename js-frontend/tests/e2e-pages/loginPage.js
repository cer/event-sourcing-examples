const loginCommands = {
  login({email, pass}) {
    this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passInput', pass);

    this.api.pause(500);
    return this.waitForElementVisible('@loginButton')
      .submitForm('@loginButton');

  }
};

export default {
  url: 'http://localhost:8080/#/signin',
  commands: [loginCommands],
  elements: {
    emailInput: {
      selector: 'input[type=text]'
    },
    emailLoginPageInput: {
      selector: 'input.email-sign-in-email.form-control'
    },
    passInput: {
      selector: 'input[name=password]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    }
  }
};