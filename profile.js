var submit = $('.submit');
var outputText = $('.outputText');
submit.on('click', addName);

function addName(event) {
  event.preventDefault();
  var name = $('.nameinput').val();
  outputText.text(`Hi, ${name}! Welcome to Worldopedia!`);
}

