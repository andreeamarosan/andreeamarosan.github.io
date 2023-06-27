var activePage = "home";

// utilities functions

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  console.info("hide %o element", id);
  $(`#${id}`).style.display = "none";
}

function show(id) {
  var page = $("#" + id);
  console.info("show %o", id, page);
  page.style.display = "block";
}

function showPage(id) {
  var oldLink = $(`#top-menu-bar a[data-page=${activePage}]`);
  oldLink.classList.remove("active");

  hide(activePage);

  var link = $(`#top-menu-bar a[data-page=${id}]`);
  link.classList.add("active");

  show(id);

  activePage = id;
}

// start our code

showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
