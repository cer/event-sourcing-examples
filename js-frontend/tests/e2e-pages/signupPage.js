const signupCommands = {
  signup({fName, lName, email, pass, passConf, ssn}, waitForNext) {
    this
      .waitForElementVisible('@fNameInput')
      .setValue('@fNameInput', fName)
      .setValue('@lNameInput', lName)
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .setValue('@passConfirmInput', passConf)
      .setValue('@ssnInput', ssn);

    this.waitForElementVisible('@signupButton')
      .submitForm('@signupButton');

    if (waitForNext) {
      return this.waitForElementNotPresent('@signupButton');
    }

    return this;

  }
};

export default {
  url: 'http://localhost:8080/#/register',
  commands: [signupCommands],
  elements: {
    fNameInput: {
      selector: 'input[type=text][label="First name"]'
    },
    lNameInput: {
      selector: 'input[type=text][label="Last name"]'
    },
    emailInput: {
      selector: 'input[type=text][label=Email]'
    },
    passInput: {
      selector: 'input[name=password]'
    },
    passConfirmInput: {
      selector: 'input[name=password-confirm]'
    },
    ssnInput: {
      selector: 'input[type=text][label=SSN]'
    },
    signupButton: {
      // selector: 'button[type=submit]'
      selector: 'button[type=submit].email-sign-up-submit.btn.btn-default'
    },
    formError: {
      selector: '.control-label.inline-error-item'
    }
  }
};