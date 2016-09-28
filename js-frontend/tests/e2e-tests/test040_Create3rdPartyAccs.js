/**
 * Created by andrew on 9/28/16.
 */
import globals from '../e2e-globals/globals';

export default {
  '@tags': ['create 3rd party accounts', 'sanity'],

  'User Creates 3rd Party Accounts': (client) => {
    const loginPage = client.page.loginPage();
    const signupPage = client.page.signupPage();
    const instancesPage = client.page.instancesPage();

    // Step 1: Setup 3rd Party & Accounts

    signupPage
      .navigate();

    client.assert.urlContains('/#/register');

    signupPage
      .signup(globals.otherUserData, true);

    client.assert.urlContains('/#/signin');

    loginPage
      .navigate()
      .login(globals.otherUserData);

    client.end();
    return;

    //todo: solve select changing

    const [ userQuery, accountQuery, title, description ] = '|||'.split('|');

    instancesPage
      .navigate()
      .createRef({ userQuery, accountQuery, title, description }, false);

    instancesPage.expect.element('@modalCreateRefErrors').to.be.visible;
    instancesPage.expect.element('@modalCreateRefForm').to.be.visible;

    const [ refAccountTitle, refAccountDescription ] = 'Johns`s Initial Account|Johns`s Initial Account'.split('|');;
    instancesPage
      .createRef({
        userQuery: globals.userData.email,
        accountQuery: globals.accountOne.title,
        title: refAccountTitle,
        description: refAccountDescription
      }, true);

    instancesPage.expect.element('@modalCreateRefErrors').to.not.be.present;
    instancesPage.expect.element('@modalCreateRefForm').to.not.be.present;

    instancesPage.expect.element('@accountLink').to.be.visible;

    instancesPage.expect.element('@firstAccountLink').to.be.visible;
    instancesPage.expect.element('@secondAccountLink').to.not.be.present;

    instancesPage.expect.element('@firstAccountLink').text.to.contain(refAccountTitle);

    client.end();
  }
};