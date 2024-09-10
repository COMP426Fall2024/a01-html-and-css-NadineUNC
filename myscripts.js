var button = document.getElementsByClassName("submit")[0];

function submitLoginForm(event) {
  event.preventDefault();

  s = event.target["selection"].value;
  let text = document.getElementsByClassName("thank")[0];

  if (event.target["selection"].value == " ") {
    text.innerText = "Please Choose An Option.";
  } else {
    text.innerText = "Thank You for choosing " + s + "!";
    var form = document.getElementById("form");
    form.style.display = "none";
  }
}
