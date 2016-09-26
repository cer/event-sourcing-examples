export default {
  '@tags': ['register', 'sanity'],

  'User signs up': (client) => {
    const page = client.page.signupPage();
    const loginPage = client.page.loginPage();

    const [fName, lName, email, pass, passConf, ssn] = 'Andrew|Revinsky|ar@gm.com|12345|12345|12345'.split('|');
    page
      .navigate()
      .signup({
        fName, lName, email, pass, passConf, ssn
      });

    loginPage.expect.element('@emailLoginPageInput').to.be.visible;

    client.end();
  }
};