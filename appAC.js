let ul = document.querySelector("ul");
let input = document.querySelector("input");
let submit = document.querySelector("button");
let delm = document.querySelectorAll(".delete");

submit.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;
  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");
  ul.appendChild(item);
  item.appendChild(delbtn);
  input.value = "";
  //   delbtn.addEventListener("click", function () {
  //     let par = this.parentElement;
  //     par.remove();
  //   });
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   });
// }
