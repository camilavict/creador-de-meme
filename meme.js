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

//cerrar aside 

$(".close-column").addEventListener("click", () => {
  $("aside").style.display = "none"

})


//url
$(".url-img").addEventListener("input", () => {
  const urlImage = $(".url-img").value;
  $("#img-meme").style.background = `url(${urlImage})`;
  $("#img-meme").style.backgroundSize = "cover";
})

$(".color").addEventListener("input", () => {
  $("#img-meme").style.backgroundColor = $(".color").value
})

//color fondo de img 

$("#tips-background").addEventListener("change", () => {
  $("#img-meme").style.backgroundBlendMode = $("#tips-background").value
})

//filtros

const setFilterValue = () => {
  const brightness = $("#brillo").value;
  const opacity = $("#opacidad").value;
  const contrast = $("#contraste").value;
  const blurPx = $("#desenfoque").value;
  const grayscale = $("#escala-de-grises").value;
  const sepia = $("#sepia").value;
  const hueRotateDeg = $("#hue").value;
  const saturate = $("#saturado").value;
  const invert = $("#negativo").value;

  const filters = `brightness(${brightness}%) opacity(${opacity}%) contrast(${contrast}%) blur(${blurPx}px) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hueRotateDeg}deg) saturate(${saturate}%) invert(${invert}%)`

  $("#img-meme").style.filter = filters
}

document.querySelectorAll("[type=range]").forEach((elem) => {
  elem.addEventListener("input", () => {
    setFilterValue();
  });
});

// reestablecer filtros

const defaultBrightness = 100
const defaultOpacity = 100
const defaultContrast = 100
const defaultFocus = 0
const defaultGrayscale = 0
const defaultSepia = 0
const defaultHue = 0
const defaultSaturate = 100
const defaultInvert = 0

const restablishFilter = () => {
  $("#brillo").value = defaultBrightness
  $("#opacidad").value = defaultOpacity
  $("#contraste").value = defaultContrast
  $("#desenfoque").value = defaultFocus
  $("#escala-de-grises").value = defaultGrayscale
  $("#sepia").value = defaultSepia
  $("#hue").value = defaultHue
  $("#saturado").value = defaultSaturate
  $("#negativo").value = defaultInvert

  const filters = `brightness(${defaultBrightness}%) opacity(${defaultOpacity}%) contrast(${defaultContrast}%) blur(${defaultFocus}px) grayscale(${defaultGrayscale}%) sepia(${defaultSepia}%) hue-rotate(${defaultHue}deg) saturate(${defaultSaturate}%) invert(${defaultInvert}%)`

  $("#img-meme").style.filter = filters

}

$("#rest").addEventListener("click", () => {

  restablishFilter();
})

$("#img-meme").style.filter = restablishFilter



//aside cambio de imagen a  texto

$("#btn-text").addEventListener("click", () => {
  $("aside").style.display = "flex";
  $(".text").style.display = "block";
  $(".img-column").style.display = "none";
})

$("#btn-img").addEventListener("click", () => {
  $("aside").style.display = "flex";
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

  if (isChecked) {
    $("#top-text").style.display = "none";
  } else {
    $("#top-text").style.display = "block";
  }
})

$("#no-text-bottom").addEventListener("change", () => {
  const isChecked = $("#no-text-bottom").checked
  if (isChecked) {
    $("#bottom-text").style.display = "none";
  } else {
    $("#bottom-text").style.display = "block";
  }
})

// color de texto

$(".color-top-text").addEventListener("input", () => {
  $("#top-text").style.color = $(".color-top-text").value
})

$(".color-top-text").addEventListener("input", () => {
  $("#bottom-text").style.color = $(".color-top-text").value
})

//color de texto fondo

$(".background-color-text").addEventListener("input", () => {
  $("#top-text").style.backgroundColor = $(".background-color-text").value
  $("#bottom-text").style.backgroundColor = $(".background-color-text").value
})

//fuente

$("#font-family").addEventListener("input", () => {
  $("#top-text").style.fontFamily = $("#font-family").value
  $("#bottom-text").style.fontFamily = $("#font-family").value
})

//tamaño de fuente

$("#number-for-p").addEventListener("input", () => {
  $("#top-text").style.fontSize = `${$("#number-for-p").valueAsNumber}px`
  $("#bottom-text").style.fontSize = `${$("#number-for-p").valueAsNumber}px`
})

//fondo transparente

$("#transparent-background").addEventListener("change", () => {
  const isChecked = $("#transparent-background").checked
  console.log(isChecked)
  if (isChecked) {
    $("#top-text").style.backgroundColor = "transparent";
    $("#bottom-text").style.backgroundColor = "transparent";
  } else {
    $("#top-text").style.backgroundColor = "block";
    $("#bottom-text").style.backgroundColor = "block";
  }
})

//espaciado

$("#spacing").addEventListener("input", () => {
  $("#top-text").style.padding = `${$("#spacing").valueAsNumber}px 40px`
  $("#bottom-text").style.padding = `${$("#spacing").valueAsNumber}px 40px`
})



//contorno

$("#none").addEventListener("click", () => {
  $("#top-text").style.textShadow = "none"
  $("#bottom-text").style.textShadow = "none"
})

$("#clear").addEventListener("click", () => {
  $("#top-text").style.textShadow = "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
  $("#bottom-text").style.textShadow = "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff"
})

$("#dark").addEventListener("click", () => {
  $("#top-text").style.textShadow = "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000"
  $("#bottom-text").style.textShadow = "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000"
})

// interlineado 

$("#leading").addEventListener("change", () => {

  $("#top-text").style.lineHeight = $("#leading").value
  $("#bottom-text").style.lineHeight = $("#leading").value
})


// boton descarga
$(".download").addEventListener('click', () => {
  domtoimage.toBlob($('#img-meme')).then(function (blob) {
    saveAs(blob, 'mi-meme.png')
  })
})