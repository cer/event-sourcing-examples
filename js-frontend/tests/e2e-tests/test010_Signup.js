import globals from '../e2e-globals/globals';

export default {
  '@tags': ['register', 'sanity'],

  'User signs up': (client) => {
    const signupPage = client.page.signupPage();
    const loginPage = client.page.loginPage();

    const [ fName, lName, email, pass, passConf, ssn ] = '|||||'.split('|');
    signupPage
      .navigate()
      .signup({
        fName, lName, email, pass, passConf, ssn
      }, false);

    signupPage.expect.element('@formError').to.be.visible;

    signupPage
      .navigate()
      .signup(globals.userData, true);

    loginPage.expect.element('@emailLoginPageInput').to.be.visible;

    client.end();
  }
};