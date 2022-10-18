export default function initFacebookSdk() {
  return new Promise(resolve => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "2377816492250459",
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v12.0',
      });

      // auto authenticate with the api if already logged in with facebook
      window.FB.getLoginStatus(({ authResponse }) => {
        if (authResponse) {
          window.FB.AppEvents.logPageView();
          resolve();
        } else {
          window.FB.AppEvents.logPageView();
          resolve();
        }
      });
    };

    // load facebook sdk script
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}