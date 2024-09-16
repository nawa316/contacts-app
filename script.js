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

function deleteContact(i) {
  contactData[i] = null;
  renderData(contactData);
}

function updateContact(i) {
  document
    .getElementById("button" + i)
    .addEventListener("click", deleteContact(i));
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
            <button id="button${i}" onclick="updateContact(${i})" class="button2">x</button>
        </div>`;
      } else {
        return "";
      }
    })
    .join(" ");
  contact.innerHTML = list;
}
