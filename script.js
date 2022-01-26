//Module
const People = (function () {
  let arrayNames = [];
  let btnAdd;
  let parent;
  let delName;
  let index;

  function init() {
    cacheDom();
    bindEvent();
    render();
  }

  function cacheDom() {
    btnAdd = document.querySelector(".btn-add");
    newName = document.querySelector(".new-name");
    parent = document.querySelector(".parend");
  }

  function bindEvent() {
    btnAdd.addEventListener("click", addPersonName);
    parent.addEventListener("click", delPersonName);
  }

  function render() {
    parent.innerHTML = "";
    if (arrayNames == "") {
    } else {
      for (let r = 0; r < arrayNames.length; r++) {
        parent.insertAdjacentHTML(
          "beforeEnd",
          `<div class="name">${arrayNames[r]}<input type="button" value="×" class="btn-delete"></div>`
        );
      }
    }
  }

  function addPersonName() {
    if (event) {
      let newNam = newName.value;
      arrayNames.push(newNam);
      render(arrayNames);
      newName.value = "";
    }
  }

  function delPersonName() {
    if (event.target.classList.contains("btn-delete")) {
      delName = event.target.parentNode.textContent;
      for (let s = 0; s < arrayNames.length; s++) {
        if (arrayNames[s] == delName) {
          index = arrayNames.indexOf(arrayNames[s]);
          arrayNames.splice(index, 1);
          render(arrayNames);
        }
      }
    }
  }
  return {
    init: init,
    cacheDom: cacheDom,
    bindEvent: bindEvent,
    render: render,
  };
})();

People.init();
