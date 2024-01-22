function toggleTheme() {
  const theme = document.querySelector('html').getAttribute('data-theme')
  
  if (theme == "light") {
    document.querySelector('html').setAttribute('data-theme', "dark")
    document.querySelector('#logo').src = "https://i.ibb.co/xYw4qxM/image.png"
  } else if (theme == "dark") {
     document.querySelector('html').setAttribute('data-theme', "sunset")
    document.querySelector('#logo').src = "https://i.ibb.co/xYw4qxM/image.png"
  } else if (theme == "sunset") {
     document.querySelector('html').setAttribute('data-theme', "light")
    document.querySelector('#logo').src = "https://i.ibb.co/MZWVZKF/image.png"
  }
}
