var activePage = "home";

// utilities functions

function hide(id) {
  console.info("hide %o element", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  // hideAllPages();
  hide(activePage);
  var page = document.getElementById(id);
  console.info("show %o", page);
  page.style.display = "block";
  activePage = id;
}

// start our code

showPage(activePage);
