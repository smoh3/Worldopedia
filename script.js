function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function showIndiaAlert() {
  var indiaAlert = "You've unlocked the India badge!";
  alert (indiaAlert);
}

function showUSAlert() {
  var usAlert = "You've unlocked the United States badge!";
  alert (usAlert);
}

function showYemenAlert() {
  var yemenAlert = "You've unlocked the Yemen badge!";
  alert (yemenAlert);
}