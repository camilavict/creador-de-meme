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
