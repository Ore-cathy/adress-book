//selectors
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const phoneInput = document.querySelector(".phone-input");
const saveButton = document.querySelector(".save-button");
const contactList = document.querySelector(".contact-list");
const filterOption = document.querySelector(".filter-contact");

//event listeners
saveButton.addEventListener("click", addContact);
// contactList.addEventListener("click", deleteCheck);
// filterOption.addEventListener("change", filterContact);

//functions
function addContact(event) {
  event.preventDefault();

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");

  let newdetails = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
  };

  const newContact = document.createElement("li");
  newContact.innerText = JSON.stringify(newdetails);
  newContact.classList.add("contact-item");
  contactDiv.appendChild(newContact);

  contactList.appendChild(contactDiv);
  newdetails.value = "";

  //   let str = JSON.stringify(newcontact);
  //   console.log(newcontact);
  //   contactList.innerText = str;

  //   const completedButton = document.createElement("button");
  //   completedButton.innerHTML = "<i class='fa fa-check'></i>";
  //   completedButton.classList.add("complete-btn");
  //   contactDiv.appendChild(completedButton);

  //   const trashButton = document.createElement("button");
  //   trashButton.innerHTML = "<i class='fa fa-trash'></i>";
  //   trashButton.classList.add("trash-btn");
  //   contactDiv.appendChild(trashButton);
}

// function deleteCheck(e) {
//   const item = e.target;
//   if (item.classList[0] === "tr  ash-btn") {
//     const contact = item.parentElement;
//     contact.classList.add("fall");
//     contact.addEventListener("transitionend", function () {
//       contact.remove();
//     });
//   }
//   if (item.classList[0] === "complete-btn") {
//     const contact = item.parentElement;
//     contact.classList.toggle("completed");
//   }
// }
// function filterContact(e) {
//   const contacts = contactList.childNodes;
//   contacts.forEach(function (contact) {
//     console.log(contact, e.target.value);
//     switch (e.target.value) {
//       case "all":
//         contact.style.display = "flex";
//         break;
//       case "completed":
//         if (contact.classList.contains("completed")) {
//           contact.style.display = "flex";
//         } else {
//           contact.style.display = "none";
//         }
//         break;

//       case "uncompleted":
//         if (!contact.classList.contains("completed")) {
//           contact.style.display = "flex";
//         } else {
//           contact.style.display = "none";
//         }
//         break;
//     }
//   });
// }
