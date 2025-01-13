const events = [
  { id: 1, name: "Tech Conference 2025", date: "2025-01-20" },
  { id: 2, name: "Music Festival", date: "2025-04-15" },
  { id: 3, name: "Art Expo", date: "2025-05-20" },
];
function populateEvents() {
  const eventList = document.getElementById("event-list");
  const eventDropdown = document.getElementById("event");

  events.forEach(event => {
    
    const eventDiv = document.createElement("div");
    eventDiv.className = "event";
    eventDiv.textContent = `${event.name} - ${event.date}`;
    eventList.appendChild(eventDiv);

    const option = document.createElement("option");
    option.value = event.id;
    option.textContent = event.name;
    eventDropdown.appendChild(option);
  });
}

function handleReminderForm(event) {
  event.preventDefault();

  const selectedEventId = document.getElementById("event").value;
  const reminderDate = document.getElementById("reminder-date").value;

  if (!selectedEventId || !reminderDate) {
    alert("Please select an event and a reminder date.");
    return;
  }

  const selectedEvent = events.find(e => e.id === parseInt(selectedEventId, 10));
  alert(`Reminder set for "${selectedEvent.name}" on ${reminderDate}.`);
}

function init() {
  populateEvents();
  const reminderForm = document.getElementById("reminder-form");
  reminderForm.addEventListener("submit", handleReminderForm);
}

init();
