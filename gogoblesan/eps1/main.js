const targetColor = document.querySelector("#targetObject");
const historyCall = document.querySelector("#historyCall");
const inputColor = document.getElementById("inputHexa");

const ubahLatar = () => {
  //   targetColor.classList.remove("bg-primary");
  //   targetColor.classList.add("bg-secondary");
  if (inputColor.value === "")
    alert("silahkan masukkan kode warna (HexaColor) atau nama warna");
  if (inputColor.value === "Fian") alert("itu nama saya");
  targetColor.style.backgroundColor = inputColor.value;
};
const historyNote = () => {
  const element = document.createElement("li");
  const content = document.createTextNode(inputColor.value);
  element.appendChild(content);
  historyCall.appendChild(element);
};

const inputType = (e) => {
  console.log(e.target.value);
  ubahLatar();
  historyNote();
};

inputColor.onchange = inputType;
