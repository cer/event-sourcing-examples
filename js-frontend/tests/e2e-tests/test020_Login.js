import globals from '../e2e-globals/globals';

export default {
  '@tags': ['login', 'sanity'],

  'User Logs in': (client) => {
    const loginPage = client.page.loginPage();
    const instancesPage = client.page.instancesPage();

    const [email, pass] = '|'.split('|');

    loginPage
      .navigate()
      .login({email, pass});

    loginPage.expect.element('@formError').to.be.visible;

    loginPage
      .navigate()
      .login(globals.userData);

    instancesPage.expect.element('@signOutLink').to.be.visible;

    instancesPage
      .navigate()
      .signOut();

    client.assert.urlContains('/#/signin');

    client.end();
  }
};