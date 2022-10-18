export const TOKEN = "@user:token";

export function saveToken(_token) {
  localStorage.setItem(TOKEN, _token);
}

export function getToken() {
  return localStorage.getItem(TOKEN);
}


export function clearToken() {
  return localStorage.removeItem(TOKEN);
}
