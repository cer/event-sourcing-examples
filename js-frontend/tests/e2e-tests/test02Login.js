export default {
  '@tags': ['login', 'sanity'],
  'User Logs in': (client) => {
    const loginPage = client.page.loginPage();
    const instancesPage = client.page.instancesPage();

    const [email, pass] = 'ar@gm.com|12345'.split('|');


    loginPage
      .navigate()
      .login({email, pass});

    instancesPage.expect.element('@instancesListDescription').to.be.visible;

    client.end();
  }
};