// Load the repository event data from the local JSON file.
// This fetches the data when the page loads and parses it into a JavaScript array.
fetch("events.json")
  .then((response) => response.json())
  // Once the JSON is parsed, create a list item for each star event.
  .then((events) => {
    // Find the <ul> element in the page where the star entries should be displayed.
    const list = document.querySelector("#starred");

    // Loop through every event and append a new list item showing the name and date.
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  });
