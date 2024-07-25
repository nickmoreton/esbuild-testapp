import contacts from "./data";
import { each } from "underscore";
import template from "./contact-list.html";
import "./contact-list.scss";

const contactList = document.createElement("div");

contactList.className = "contact-list";

each(contacts, (entry) => {
  const element = document.createElement("div");
  element.className = "contact";

  element.innerHTML = template;
  element.querySelector(".name").innerHTML = entry.name;
  element.querySelector(".phone").innerHTML = entry.phone;

  contactList.appendChild(element);
});

document.body.appendChild(contactList);
