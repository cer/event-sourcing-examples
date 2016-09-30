const mainCommands = {
  createAccount({ title, amount, description }, waitToHide) {
    this
      .waitForElementVisible('@modalCreateAccountHook')
      .click('@modalCreateAccountHook');

    this.api.pause(500);
    this.waitForElementVisible('@modalCreateAccountModal')
      .waitForElementVisible('@modalCreateAccountForm')
      .setValue('@modalCreateAccountTitle', title)
      .setValue('@modalCreateAccountAmount', amount)
      .setValue('@modalCreateAccountDescription', description)
      .click('@modalCreateAccountSubmit');

    if (waitToHide) {
      this.waitForElementNotPresent('@modalCreateAccountModal');
      this.api.pause(1500);
    }
    return this;
  },

  createRef({ userQuery, accountQuery, title, description }, waitToHide) {
    this
      .waitForElementVisible('@modalCreateRefHook')
      .click('@modalCreateRefHook');

    this.api.pause(500);
    this.waitForElementVisible('@modalCreateRefModal')
      .waitForElementVisible('@modalCreateRefForm')
      .waitForElementVisible('@modalCreateRefCustomerField')
      .click('@modalCreateRefCustomerField')
      .waitForElementVisible('@modealCreateRefCustomerOpen')
      .waitForElementVisible('@modalCreateRefCustomerInput')
      .setValue('@modalCreateRefCustomerInput', userQuery)
      .waitForElementVisible('@modealCreateRefDDOption')
      .click('@modealCreateRefDDOption')
      .setValue('@modalCreateRefAccount', accountQuery)
      .setValue('@modalCreateRefTitle', title)
      .setValue('@modalCreateRefDescription', description)
      .click('@modalCreateRefSubmit');

    if (waitToHide) {
      this.waitForElementNotPresent('@modalCreateRefModal');
      this.api.pause(1500);
    }

    return this;
  },

  signOut() {
    this
      .waitForElementVisible('@signOutLink')
      .click('@signOutLink');
    return this.waitForElementNotPresent('@signOutLink');
  }
};

export default {
  url: 'http://localhost:8080/#/',
  commands: [ mainCommands ],
  elements: {
    signOutLink: {
      selector: '//li/a[text()=\'Sign Out\']',
      locateStrategy: 'xpath'
    },
    modalCreateAccountHook: {
      selector: '//div/button[1][text()=\'Create Account\']',
      locateStrategy: 'xpath'
    },
    modalCreateAccountModal: {
      selector: '.modal-dialog'
    },
    modalCreateAccountForm: {
      selector: 'form.account-create-form'
    },
    modalCreateAccountTitle: {
      selector: 'form.account-create-form input[name=title]'
    },
    modalCreateAccountAmount: {
      selector: 'form.account-create-form input[name=balance]'
    },
    modalCreateAccountDescription: {
      selector: 'form.account-create-form textarea[name=description]'
    },
    modalCreateAccountSubmit: {
      selector: '.modal-dialog button[type=submit]'
    },
    modalCreateAccountErrors: {
      selector: 'form.account-create-form .inline-error-item'
    },
    modalCreateRefHook: {
      selector: '//div/button[2][text()=\'Add 3rd Party Recipients\']',
      locateStrategy: 'xpath'
    },
    modalCreateRefModal: {
      selector: '.modal-dialog'
    },
    modalCreateRefForm: {
      selector: 'form.account-create-ref'
    },
    modalCreateRefCustomerField: {
      selector: 'form.account-create-ref .Select.is-searchable div.Select-input'
    },
    modalCreateRefCustomerInput: {
      selector: 'form.account-create-ref .Select.is-searchable div.Select-input > input'
    },
    modealCreateRefCustomerOpen: {
      selector: 'form.account-create-ref .Select.is-searchable.is-open.is-focused div.Select-menu-outer > div.Select-menu' //has-value
    },
    modealCreateRefDDOption: {
      selector: 'form.account-create-ref .Select.is-searchable.is-open.is-focused div.Select-menu-outer > div.Select-menu > div.Select-option' //has-value
    },
    modalCreateRefAccount: {
      selector: 'form.account-create-ref .Select:not(.is-searchable) div.Select-input'
    },
    modalCreateRefTitle: {
      selector: 'form.account-create-ref input[name=title]'
    },
    modalCreateRefDescription: {
      selector: 'form.account-create-ref textarea[name=description]'
    },
    modalCreateRefSubmit: {
      selector: '.modal-dialog button[type=submit]'
    },
    modalCreateRefErrors: {
      selector: 'form.account-create-ref .inline-error-item'
    },
    accountLink: {
      selector: 'a[href^=\'#/account/\']'
    },
    firstAccountLink: {
      selector: '(//a[starts-with(@href, "#/account/")])[1]',
      locateStrategy: 'xpath'
    },
    secondAccountLink: {
      selector: '(//a[starts-with(@href, "#/account/")])[2]',
      locateStrategy: 'xpath'
    },
  }
};