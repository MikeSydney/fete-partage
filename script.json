const list = document.getElementById("list");
const form = document.getElementById("foodForm");
const clearBtn = document.getElementById("clearBtn");

let contributions = JSON.parse(localStorage.getItem("contributions")) || [];

function renderList() {
  list.innerHTML = "";
  contributions.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.name}</strong> (${item.people} pers.)<br>
      🍴 ${item.food} / 🍹 ${item.drink}
      ${item.notes ? `<br><small>${item.notes}</small>` : ""}
    `;
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const entry = {
    name: form.name.value,
    people: form.people.value,
    food: form.food.value,
    drink: form.drink.value,
    notes: form.notes.value
  };

  contributions.push(entry);
  localStorage.setItem("contributions", JSON.stringify(contributions));
  renderList();
  form.reset();
});

clearBtn.addEventListener("click", () => {
  if (confirm("Effacer ta liste locale ?")) {
    localStorage.removeItem("contributions");
    contributions = [];
    renderList();
  }
});

// Display current list
renderList();
