import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text");
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  console.log(li);

  const p = document.createElement("p");
  p.className = "todo";
  p.innerText = inputText;

  const button = document.createElement("button");
  button.innerText = "戻す";

  div.appendChild(p);
  div.appendChild(button);
  li.appendChild(div);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
