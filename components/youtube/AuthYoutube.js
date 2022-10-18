const LoginYoutube = () => {
  const gapi = window.gapi
  // Enter an API key from the Google API Console:
  //   https://console.developers.google.com/apis/credentials
  var apiKey = 'AIzaSyCH1uKIiWSdIMi9aZ3vDXub-DN7ah9bm1I';

  // Enter the API Discovery Docs that describes the APIs you want to
  // access. In this example, we are accessing the People API, so we load
  // Discovery Doc found here: https://developers.google.com/people/api/rest/
  var discoveryDocs = ["https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

  // Enter a client ID for a web application from the Google API Console:
  //   https://console.developers.google.com/apis/credentials?project=_
  // In your API Console project, add a JavaScript origin that corresponds
  //   to the domain where you will be running the script.
  var clientId = '123779235428-u19jaqi3g8jumqcmjg4h3tq0qje36kb4.apps.googleusercontent.com';

  // Enter one or more authorization scopes. Refer to the documentation for
  // the API or https://developers.google.com/people/v1/how-tos/authorizing
  // for details.
  var scopes = "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtubepartner-channel-audit https://www.googleapis.com/auth/youtube.force-ssl";


  // function handleClientLoad() {
  //   // Load the API client and auth2 library
  //   gapi.load('client:auth2', initClient);
  // }

  // function initClient() {
  //   gapi.auth2.init({
  //     setApiKey: apiKey,
  //     discoveryDocs: discoveryDocs,
  //     client_id: clientId,
  //     scope: scopes
  //   }).then(function () {
  //     // Listen for sign-in state changes.
  //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

  //     // Handle the initial sign-in state.
  //     updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

  //   });
  // }

  // function updateSigninStatus(isSignedIn) {
  //   if (isSignedIn) {
  //     console.log(JSON.stringify(isSignedIn, null, 4))
  //     makeApiCall();
  //     gapi.auth2.getAuthInstance().signIn();
  //   } else {
  //     console.log(JSON.stringify(isSignedIn, null, 4))
  //     gapi.auth2.getAuthInstance().signIn();
  //   }
  // }


  // // Load the API and make an API call.  Display the results on the screen.
  // function makeApiCall(resp) {
  //   gapi.client.youtube.channels.list({
  //     "part": [
  //       "snippet,contentDetails,brandingSettings"
  //     ],
  //     "mine": true
  //   }).then(function (resp) {
  //     console.log(resp)
  //     console.log(JSON.stringify(resp, null, 4))
  //   }).then(function (err) { console.log(JSON.stringify("Execute error ", err, null, 4)) });
  // }

  function authenticate() {
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtubepartner-channel-audit https://www.googleapis.com/auth/youtube.force-ssl" })
      .then(function () { console.log("Sign-in successful"); },
        function (err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey(apiKey);
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function () { console.log("GAPI client loaded for API"); },
        function (err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    function channel() {
      return gapi.client.youtube.channels.list({
        "part": [
          "snippet,contentDetails,brandingSettings"
        ],
        "mine": true,
        // "mySubscribers": true
      }).then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
        function (err) { console.log("Execute error", JSON.stringify(err, null, 4)); });
    }


    function comment() {
      return gapi.client.youtube.commentThreads.list({
        "part": [
          "snippet"
        ],
        "allThreadsRelatedToChannelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw"
      })
        .then(function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
          function (err) { console.log("Execute error", JSON.stringify(err, null, 4)); });
    }


    function suscriptionlist() {
      return gapi.client.youtube.subscriptions.list({
        "part": [
          "snippet,contentDetails"
        ],
        "mySubscribers": true
      })
        .then(function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
          function (err) { console.log("Execute error", JSON.stringify(err, null, 4)); });
    }

    function videoslist() {
      return gapi.client.youtube.playlistItems.list({
        "part": [
          "snippet,contentDetails,status"
        ],
        "playlistId": "UU7K4fknPgxLqcvjftLb_bVg"
      })
        .then(function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
          function (err) { console.log("Execute error", JSON.stringify(err, null, 4)); });
    }

    function executeAll() {
      channel();
      comment();
      suscriptionlist();
      videoslist();
    } executeAll();
  }
  gapi.load("client:auth2", function () {
    gapi.auth2.init({ client_id: clientId });
  });



  function YoutubeConnect() {
    authenticate()
      .then(loadClient)
      .then(execute)
  }

  return { YoutubeConnect }


}

export default LoginYoutube;