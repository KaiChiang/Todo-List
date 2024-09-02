function addItem() {
  console.log("hi");
  const ul = document.getElementById("list");
  const input = document.getElementById("input");
  const text = input.value;
  if (text === "") {
    alert("Please  input the content.");
    return;
  }
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = text;
  newItem.onclick = checkItem;

  const deleteButton = document.createElement("span");
  deleteButton.classList.add("delete");
  deleteButton.onclick = deleteItem;

  newItem.appendChild(deleteButton);

  input.value = "";
  ul.appendChild(newItem);
}

function checkItem() {
  const item = this;
  item.classList.toggle("checked");
}

function deleteItem() {
  console.log("delete");
  const item = this.parentNode;
  const parent = item.parentNode;
  parent.removeChild(item);
}

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addItem);

const form = document.getElementById("input-wrapper");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
