import axios from 'axios';
import { getToken } from "../../helpers/storage"

function LoginInstagram() {
  const _useToken = getToken();

  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("@user:token")}`
  const scopes = 'public_profile,pages_show_list,instagram_basic';

  const statusChangeCallback = () => {
    window.FB.login(function (response) {
      if (response.authResponse) {
        console.log(response);

        window.FB.api('/me?fields=accounts', function (response) {
          const datafacebook = response.accounts.data[0].id
          console.log(response);
          console.log(datafacebook);

          window.FB.api(`/${datafacebook}?fields=instagram_business_account`, function (response) {
            const datainstagram = response.instagram_business_account.id
            console.log(JSON.stringify(response, null, 4))
            console.log(datainstagram)

            window.FB.api(`/${datainstagram}?fields=followers_count,follows_count,ig_id,media_count,name,username`, function (response) {
              console.log(JSON.stringify(response, null, 4))
            })
          })
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
        console.log(JSON.stringify(response, null, 4));
      }
    }, { scope: scopes });
  }



  const InstagramConnect = (e) => {
    e.preventDefault();
    window.FB.getLoginStatus(function (response) {
      statusChangeCallback(response, function () { });
    });
    // statusChangeCallback()
  }
  return { InstagramConnect };
}

export default LoginInstagram;