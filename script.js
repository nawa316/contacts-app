const contact = document.getElementById("contact");

function fetchData() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => renderData(json.users));
  return;
}
fetchData();

function renderData(data) {
  let list = data
    .map(
      (user) =>
        `<div class="container_contact_list">
            <img src="${user.image}" alt="${user.firstName}" class="user-image"/>
            <div class="contact-detail">
                <p>${user.firstName} ${user.lastName}</p>
                <p>${user.email}</p>
            </div>
            <button class="button2">x</button>
        </div>`
    )
    .join(" ");
  contact.innerHTML = list;
}
