const contact = document.getElementById("contact");
let contactData = [];

function fetchData() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => contactData.push(...json.users))
    .then(() => renderData(contactData));
  return;
}
fetchData();

function addContact() {
  let firstName = document.getElementById("formFirstName").value;
  let lastName = document.getElementById("formLastName").value;
  let email = document.getElementById("formEmail").value;
  let image = document.getElementById("formPhoto").value;

  if (firstName === "" || lastName === "" || email === "" || image === "") {
    alert("Please fill in all fields");
  } else {
    contactData.push({
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: image
    });
    renderData(contactData);
  }
}

function deleteContact(i) {
  document
    .getElementById("button" + i)
    .addEventListener(
      "click",
      (contactData[i] = null),
      renderData(contactData)
    );
}

function renderData(data) {
  let list = data
    .map((user, i) => {
      if (user !== null) {
        return `<div class="container_contact_list">
            <img src="${user.image}" alt="${user.firstName}" class="user-image"/>
            <div class="contact-detail">
                <p>${user.firstName} ${user.lastName}</p>
                <p>${user.email}</p>
            </div>
            <button id="button${i}" onclick="deleteContact(${i})" class="button2">x</button>
        </div>`;
      } else {
        return "";
      }
    })
    .join(" ");
  contact.innerHTML = list;
}
