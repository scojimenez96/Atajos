import React from 'react';
import LoginYoutube from "../components/youtube/AuthYoutube";

export const initYoutubeSdk = () => {
  const { handleClientLoad } = LoginYoutube();
  const _onload = this.onload(() => handleClientLoad());
  const URI = "https://apis.google.com/js/api.js";
  const condition = this.readyState === 'complete' ? this.onload() : console.log("no funciono");

  return (
    <div>
      <script async defer src={URI} onload={_onload}
        onreadystatechange={condition}>
      </script>
    </div>
  )
}





