const select = document.querySelector("#selection");
const object1 = document.getElementById("targetObject1");
const object2 = document.getElementById("targetObject2");
const ex = document.getElementById("ex");
const inputType = document.getElementById("inputValue");

console.log("Siap Masbro!");
const update = () => {
  if (select.value == "bg") {
    object1.style.background = inputType.value;
  } else if (select.value == "tc") {
    object2.style.color = inputType.value;
  } else if (select.value == "bgImg") {
    object1.style.backgroundImage = `url("${inputType.value}")`;
  } else if (select.value == "ts") {
    object2.style.fontSize = inputType.value;
  } else if (select.value == "ff") {
    object2.style.fontFamily = inputType.value;
  } else if (select.value == "cw") {
    object1.style.width = inputType.value;
  } else if (select.value == "ch") {
    object1.style.height = inputType.value;
  } else if (inputType.value === "") {
    alert(
      "Silahkan Isi Value\nexample size: px, em/rem, %, vh, vw\nexample color: red, #b0f0f0, rgba(0,0,0)"
    );
  }
};

inputType.onchange = update;

function defaultStyle() {
  object1.style.background = null;
  object2.style.color = null;
  object2.style.fontSize = null;
  object2.style.fontFamily = null;
  object1.style.width = null;
  object1.style.height = null;
}
