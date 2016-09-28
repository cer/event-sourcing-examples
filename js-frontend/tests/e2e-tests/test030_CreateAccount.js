/**
 * Created by andrew on 9/28/16.
 */
import globals from '../e2e-globals/globals';

export default {
  '@tags': ['create accounts', 'sanity'],

  'User Creates Accounts': (client) => {
    const loginPage = client.page.loginPage();
    const instancesPage = client.page.instancesPage();

    const [ title, amount, description ] = '||'.split('|');

    loginPage
      .navigate()
      .login(globals.userData);

    instancesPage
      .navigate()
      .createAccount({ title, amount, description }, false);

    instancesPage.expect.element('@modalCreateAccountErrors').to.be.visible;

    instancesPage
      .createAccount(globals.accountOne, true);

    instancesPage.expect.element('@modalCreateAccountErrors').to.not.be.present;
    instancesPage.expect.element('@modalCreateAccountForm').to.not.be.present;

    instancesPage.expect.element('@accountLink').to.be.visible;

    instancesPage.expect.element('@firstAccountLink').to.be.visible;
    instancesPage.expect.element('@secondAccountLink').to.not.be.present;

    instancesPage.expect.element('@firstAccountLink').text.to.contain(globals.accountOne.title);

    instancesPage
      .createAccount(globals.accountTwo, true);

    instancesPage.expect.element('@firstAccountLink').to.be.visible;
    instancesPage.expect.element('@secondAccountLink').to.be.visible;

    instancesPage.expect.element('@firstAccountLink').text.to.contain(globals.accountOne.title);
    instancesPage.expect.element('@secondAccountLink').text.to.contain(globals.accountTwo.title);

    client.end();
  }
};