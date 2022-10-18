import axios from 'axios';
import { getToken } from "../helpers/storage"

function LoginFacebook() {
  const _useToken = getToken();

  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("@user:token")}`
  const scopes = 'pages_read_engagement,public_profile,email,email,pages_show_list,pages_read_user_content';

  const statusChangeCallback = () => {
    window.FB.login(function (response) {
      if (response.authResponse) {
        console.log(response);

        window.FB.api('/me?fields=id,name,accounts{access_token,name,id}', function (response) {

          const pages = [];

          response.accounts.data.forEach((page) => {
            pages.push(
              {
                facebookid: response.id,
                facebookname: response.name,
                accesstoken: page.access_token,
                appid: page.id,
                appname: page.name,
                subscriptionaccountid: 3,
                userid: "673052404"
              }
            )
          });

          console.log(pages)
          axios.post('https://stisocialmetrics04.azurewebsites.net/api/facebook', pages)
            .then(response => {
              console.log("response POST", response)
            })
            .catch(err => {
              console.error("error POST", err)
            });

          console.log(response)
          console.log(_useToken)
          console.log("axios.defaults", JSON.stringify(axios.defaults, null, 4));
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scope: scopes });
  }



  const FacebookConnect = async (e) => {
    e.preventDefault();
    window.FB.getLoginStatus(function (response) {
      statusChangeCallback(response, function () { });
    });
    // statusChangeCallback()
  }
  return { FacebookConnect };
}

export default LoginFacebook;
