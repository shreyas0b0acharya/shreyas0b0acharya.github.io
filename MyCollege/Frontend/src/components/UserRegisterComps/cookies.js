export const setCookie  = (data) =>{
    document.cookie = `email=${data}; expires=${new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
}

export const getCookie = (name)=> document.cookie
  .split('; ')
  .find(row => row.startsWith(name + '='))
  ?.split('=')[1];
