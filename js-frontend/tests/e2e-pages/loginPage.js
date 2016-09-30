const loginCommands = {
  login({ email, pass }) {

    this
      .waitForElementVisible('@emailInput', 500);

    this
      .clearValue('@emailInput')
      .setValue('@emailInput', email)
      .clearValue('@passInput')
      .setValue('@passInput', pass);

    this.getValue('@emailInput', (result) => {
      this.assert.equal(result.value, email);
    });

    return this.waitForElementVisible('@loginButton')
      .click('@loginButton')
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
    },
    formError: {
      selector: '.control-label.inline-error-item'
    }
  }
};