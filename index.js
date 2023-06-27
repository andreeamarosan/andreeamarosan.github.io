var activePage = "home";

// utilities functions

function hide(id) {
  console.info("hide %o element", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  var oldLink = document.querySelector(
    `#top-menu-bar a[data-page=${activePage}]`
  );
  oldLink.classList.remove("active");

  hide(activePage);

  var link = document.querySelector(`#top-menu-bar a[data-page=${id}]`);
  link.classList.add("active");

  var page = document.getElementById(id);
  console.info("show %o", id, page);
  page.style.display = "block";

  activePage = id;
}

// start our code

showPage(activePage);
document.getElementById("top-menu-bar").addEventListener("click", clickOnMenu);
