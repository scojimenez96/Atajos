import { useState } from "react";
import { clearToken } from '../helpers/storage'

function useMenu() {
  const [clipMenu, setclipMenu] = useState(false);
  const handlebutton = () => {
    const button = document.getElementById('button-headers-login');
    if (!clipMenu) {
      setclipMenu(true)
      button.style.display = "inline-grid";
    }
    else {
      setclipMenu(false)
      button.style.display = "none";
    }
  }

  const buttonMenu = [
    {
      id: 6,
      detail: "Account",
      to: "/home/accont",
      handleclip: () => console.log("in Twitter")
    },
    {
      id: 7,
      detail: "Subscription",
      to: "/home/subscription",
      handleclip: () => console.log("in Twitter")
    },
    {
      id: 8,
      detail: "Add a Team Member",
      to: "/home/teammeber",
      handleclip: () => console.log("in Twitter")
    },
    {
      id: 9,
      detail: "Log out",
      to: "/",
      handleclip: () => clearToken()
    }]
  return { handlebutton, buttonMenu }
}

export default useMenu;