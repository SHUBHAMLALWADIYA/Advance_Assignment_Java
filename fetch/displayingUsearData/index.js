

function fetchingUsears() {
  fetch(`https://reqres.in/api/users`)
    .then((respo) => respo.json())
    .then((data) => {
      let bag = "";
      data.data.forEach((element) => {
        bag += `
            <div id="user-card">
        <img src="${element.avatar}" alt="">
            <div class="user-details">
            <span class="name">${element.first_name+" "+element.last_name}</span>
            <span class="email">${element.email}</span>
        </div>
        </div>`;
      });
      document.getElementById("usersList").innerHTML = bag;
    });
}
