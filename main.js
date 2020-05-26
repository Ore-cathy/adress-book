//selectors
const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const phoneInput = document.querySelector(".phone-input");
const saveButton = document.querySelector(".save-button");
const contactList = document.querySelector(".contact-list");
const filterOption = document.querySelector(".filter-contact");
const msgDiv = document.querySelector(".msgdiv");
const container = document.querySelector(".container");

const PromptName = prompt("enter your name");
const promptValue = document.querySelector("h1");
promptValue.innerHTML = `welcome ${PromptName}, start saving your contacts`;

//event listener

saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    nameInput.value === "" &&
    emailInput.value === "" &&
    phoneInput.value === ""
  ) {
    msgDiv.innerHTML = "Please Fill In the Form Above";

    msgDiv.classList.add("error");
    setTimeout(() => msgDiv.remove(), 5000);
  } else if (nameInput.value === "") {
    msgDiv.innerHTML = "please enter  a name";
    nameInput.style.borderColor = "red";
    msgDiv.classList.add("error");
    setTimeout(() => msgDiv.remove(), 5000);
    nameInput.addEventListener("click", () => {
      nameInput.style.borderColor = "";
    });
  } else if (emailInput.value === "") {
    msgDiv.textContent = "please enter  an email address";
    emailInput.style.borderColor = "red";
    msgDiv.classList.add("error");
    setTimeout(() => msgDiv.remove(), 5000);
    emailInput.addEventListener("click", () => {
      emailInput.style.borderColor = "";
    });
  } else if (phoneInput.value === "") {
    msgDiv.textContent = "please enter  a phone number";
    phoneInput.style.borderColor = "red";
    msgDiv.classList.add("error");
    setTimeout(() => msgDiv.remove(), 5000);
    phoneInput.addEventListener("click", () => {
      phoneInput.style.borderColor = "";
    });
  } else {
    document.querySelector("table").style.marginTop = "0px";

    let tr = document.createElement("tr");

    let td = document.createElement("td");
    td.appendChild(document.createTextNode(nameInput.value));
    container.appendChild(document.querySelector("table"));
    document
      .querySelector("table")
      .appendChild(document.querySelector("tbody"));
    document.querySelector("tbody").appendChild(tr);
    tr.appendChild(td);

    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(phoneInput.value));
    container.appendChild(document.querySelector("table"));
    document
      .querySelector("table")
      .appendChild(document.querySelector("tbody"));
    document.querySelector("tbody").appendChild(tr);
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.appendChild(document.createTextNode(emailInput.value));
    container.appendChild(document.querySelector("table"));
    document
      .querySelector("table")
      .appendChild(document.querySelector("tbody"));
    document.querySelector("tbody").appendChild(tr);
    tr.appendChild(td2);

    //adding the delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete_btn");
    deleteButton.classList.add("btn-danger");
    tr.appendChild(deleteButton);
  }
});
// removing contact
container.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("btn-danger")) {
    e.target.parentElement.remove();
  }
});
