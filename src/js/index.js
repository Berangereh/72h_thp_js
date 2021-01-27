import '../sass/style.scss';
import {routes} from './routes';
import {PageList} from './PageList';

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

window.addEventListener("submit", () => {
  const searchInput = document.getElementById('search-input').value;
  PageList(searchInput);
});

window.addEventListener("onclick", () => {
  const btnshowmore = document.getElementById('btnshowmore');
  PageList("&page=2");
});
