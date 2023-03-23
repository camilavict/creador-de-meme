const $ = (selector) => document.querySelector(selector);

$(".btn-i").addEventListener("click", () => {
  const currentTheme = $("body").getAttribute("data-theme");
  if (currentTheme === "light-theme") {
    console.log($(".fa-lightbulb"));
    $(".fa-lightbulb").classList.remove("fa-solid");
    $(".fa-lightbulb").classList.add("fa-regular");
    $("body").removeAttribute("data-theme", "light-theme");
  } else {
    $(".fa-lightbulb").classList.remove("fa-regular");
    $(".fa-lightbulb").classList.add("fa-solid");
    $("body").setAttribute("data-theme", "light-theme");
  }
});

//url
$(".url-img"),addEventListener("input",()=> {
  const urlImage = $(".url-img").value
  $("#img-meme").style.background = `url(${urlImage})`
})

$(".color"),addEventListener("input",() => {
  $("#img-meme").style.backgroundColor = $(".color").value
})

//filtros

/*const setFilterValue = (value) =>
 (${value}%);*/

/*
$("#brillo"),addEventListener("input",() => {
  const setFilterValue = $("#brillo").value
  $("#img-meme").style.filter = `brightness(${setFilterValue}%)`
})


$("#opacidad"),addEventListener("input",() => {
  const setFilterValue2 = $("#opacidad").value
  $("#img-meme").style.filter = `opacity(${setFilterValue2}%)`
})
*/

const setFilterValue= () => {
  const brightness = $(`brillo`).value
}
$("#img-meme").style.filter =`brightness(${brillo})`