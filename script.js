function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/2838_PP ESTREANTES - light.jpg")
  } else {
    // se tiver sem light mode, manter a imagem original
    img.setAttribute("src", "./assets/3794_PP ESTREANTES.jpg")
  }
}
