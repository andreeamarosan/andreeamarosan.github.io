let activePage = "home";

(function () {
  const hash = document.location.hash.substring(1);
  if (hash) {
    const link = $(`#top-menu-bar a[data-page=${hash}]`);
    if (link) {
      activePage = hash;
    }
  }
})();
// utilities functions

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  console.info("hide %o element", id);
  $(`#${id}`).style.display = "none";
}

function show(id) {
  const page = $("#" + id);
  console.info("show %o", id, page);
  page.style.display = "block";
}

function showPage(id) {
  var oldLink = $(`#top-menu-bar a[data-page=${activePage}]`);
  oldLink.classList.remove("active");

  hide(activePage);

  activePage = id;

  const link = $(`#top-menu-bar a[data-page=${activePage}]`);
  link.classList.add("active");

  show(activePage);
}
function clickOnMenu(e) {
  const link = e.target.closest("a");
  if (link) {
    const id = link.dataset.page;
    if (id) {
      showPage(id);
      document.location.hash = `#${id}`;
    }
  }
}
function sortByEndorcements(a, b) {
  return b.endorcements - a.endorcements;
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function showSkills(skills) {
  skills.sort(sortByEndorcements);
  const htmlSkills = skills.map((skill) => {
    const cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">
        ${skill.name} 
        <span>- ${skill.endorcements}</span>
      </li>`;
  });
  const ul = $("#skills ul");
  ul.innerHTML = htmlSkills.join("");
}
function loadSkills() {
  const response = fetch("skills.json");
  const loaded = response.then((r) => r.json());
  loaded.then(showSkills);
}
// start our code

showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
loadSkills();
