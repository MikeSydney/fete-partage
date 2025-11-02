const GITHUB_REPO = "MikeSydney/REPO"; // <-- your username/repo
const BRANCH = "main";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const entry = {
    name: form.name.value,
    people: form.people.value,
    food: form.food.value,
    drink: form.drink.value,
    notes: form.notes.value
  };

  await fetch("https://api.github.com/repos/" + GITHUB_REPO + "/dispatches", {
    method: "POST",
    headers: {
      "Accept": "application/vnd.github.everest-preview+json",
      "Authorization": "Bearer " + PERSONAL_ACCESS_TOKEN, // GitHub token is securely injected
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      event_type: "add_contribution",
      client_payload: entry
    })
  });

  form.reset();
  alert("Merci! Ta contribution a été envoyée.");
});
