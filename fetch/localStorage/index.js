let name = document.getElementById("inp1");
    let age = document.getElementById("inp2");
    let tbody = document.getElementById("add");

    function goTolocal() {
      if (name.value !== "" && age.value !== "") {
        localStorage.setItem(name.value, age.value);

        let bag = "";

        Object.entries(localStorage).forEach((element, i) => {
          bag += `<tr>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                 </tr>`;
        });
        tbody.innerHTML = bag;
        name.value="";
        age.value="";
      } else {
        alert("Add some value");
      }
    }

    function empty(){

        localStorage.clear();
    }
