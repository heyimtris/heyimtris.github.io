const themes = document.querySelectorAll('input[name="theme-dropdown"]')

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


if (getCookie('theme')) {
  document.querySelector('html').setAttribute('data-theme', getCookie('theme'))
} else {
  setCookie('theme', 'sunset')
}


themes[0].setAttribute('aria-label', `Default (${getCookie('theme')})`)

themes.forEach(theme => {
  theme.onclick = function() {
    setCookie('theme', theme.value)
    document.querySelector('html').setAttribute('data-theme', getCookie('theme'));
  }
}) 
