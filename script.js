toggleComponent = (className) => {
  var component = document.querySelector(className);
  component.classList.toggle("hide");
}

hideComponent = (className) => {
  var component = document.querySelector(className);
  !component.classList.contains("hide")? component.classList.add("hide") : "";
}
