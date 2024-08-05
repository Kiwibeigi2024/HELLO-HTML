
HelloWorld('hello_env');

//Creates a "Hello World!" heading and appends it to a div
function HelloWorld(id) {
  element = document.getElementById(id);
  greeting = document.createElement('h3');
  greeting.setAttribute('id', 'hello');
  greeting.style.visibility = "hidden";
  greeting.innerHTML = "Hello World!";

  element.appendChild(greeting);

  //sets the new header to appear
  appear('hello');
}

//Makes "Hello World!" visible
function appear(id) {
  console.log("Showing " + id);
  document.getElementById(id).style.visibility = "visible";
}

function disappear(id) {
  console.log("Hiding " + id);
  document.getElementById(id).style.visibility = "hidden";
}