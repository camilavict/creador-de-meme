const $ = (selector) => document.querySelector(selector);

$(".btn-i").addEventListener("click", () => {
  const currentTheme = $("body").getAttribute("data-theme");
  if (currentTheme === "light-theme") {
    $(".fa-lightbulb").classList.remove("fa-solid");
    $(".fa-lightbulb").classList.add("fa-regular");
    $("body").removeAttribute("data-theme", "light-theme");
    $(".btn-i").innerHTML = $(".btn-i").innerHTML.replace("claro", "oscuro")
  } else {
    $(".fa-lightbulb").classList.remove("fa-regular");
    $(".fa-lightbulb").classList.add("fa-solid");
    $("body").setAttribute("data-theme", "light-theme");
    $(".btn-i").innerHTML = $(".btn-i").innerHTML.replace("oscuro", "claro")
  }
});

//url
$(".url-img"), addEventListener("input", () => {
  const urlImage = $(".url-img").value
  $("#img-meme").style.background = `url(${urlImage})`
})

$(".color"), addEventListener("input", () => {
  $("#img-meme").style.backgroundColor = $(".color").value
})

//color fondo de img 

$("#tips-fondo").addEventListener("change", () => {
  $("#img-meme").style.backgroundBlendMode = $("#tips-fondo").value
})

//filtros

const setFilterValue = () => {
  const brightness = $("#brillo").value
  const opacity = $("#opacidad").value
  const contrast = $("#contraste").value
  const blurPx = $("#desenfoque").value
  const grayscale = $("#escala-de-grises").value
  const sepia = $("#sepia").value
  const hueRotateDeg = $("#hue").value
  const saturate = $("#saturado").value
  const invert = $("#negativo").value

  const filters = `brightness(${brightness}%) opacity(${opacity}%) contrast(${contrast}%) blur(${blurPx}px) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hueRotateDeg}deg) saturate(${saturate}%) invert(${invert}%)`

  $("#img-meme").style.filter = filters
}

$("[type=range]"), addEventListener("input", () => {
  setFilterValue()
})







//aside cambio de imagen a  texto

$("#btn-text").addEventListener("click", () => {
  $(".text").style.display = "block";
  $(".img-column").style.display = "none";
})

$("#btn-img").addEventListener("click", () => {
  $(".text").style.display = "none";
  $(".img-column").style.display = "block";
})

//modifica texto

$("#up-text").addEventListener("input", () => {

  $("#top-text").innerText = $("#up-text").value
})

$("#down-text").addEventListener("input", () => {

  $("#bottom-text").innerText = $("#down-text").value
})



// checked text

$("#no-text").addEventListener("change", () => {
  const isChecked = $("#no-text").checked
  console.log(isChecked)
  if (isChecked) {
    $("#top-text").style.display = "none";
  } else {
    $("#top-text").style.display = "block";
  }
})

$("#no-text-botoom").addEventListener("change", () => {
  const isChecked = $("#no-text-botoom").checked
  if (isChecked) {
    $("#bottom-text").style.display = "none";
  } else {
    $("#bottom-text").style.display = "block";
  }
})
// color de texto

$(".color-top-text"), addEventListener("input", () => {
  $("#top-text").style.color = $(".color-top-text").value
})

$(".color-top-text"), addEventListener("input", () => {
  $("#bottom-text").style.color = $(".color-top-text").value
})

//color de texto fondo

$(".background-color-text"), addEventListener("input", () => {
  $("#top-text").style.backgroundColor = $(".background-color-text").value
  $("#bottom-text").style.backgroundColor = $(".background-color-text").value
})

