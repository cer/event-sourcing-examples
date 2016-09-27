const signupCommands = {
  signup(email, pass, fName, lName, ssn) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .waitForElementVisible('@loginButton')
      .click('@loginButton')
  }
};

export default {
  url: 'http://localhost:8080/#/register',
  commands: [loginCommands],
  elements: {
    emailInput: {
      selector: 'input[type=text][label=Email]'
    },
    emailInput: {
      selector: 'input[type=text][label="Last name"]'
    },
    passInput: {
      selector: 'input[name=password]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    }
  }
};