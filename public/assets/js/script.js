import { menuEntries } from "./modules/menuentries.js";
import { createEntry } from "./modules/menu.js";

console.dir(menuEntries);

const navMenu = document.querySelector("#navMenu");

createEntry(menuEntries, navMenu);

