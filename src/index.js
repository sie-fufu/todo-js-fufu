import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "todo";
  p.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了リストに追加する要素
    const addTarget = div.parentNode;
    //divタグ以下を初期化
    addTarget.textContent = null;

    div.textContent = null;
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(addTarget);

    //pタグ作成
    const param = document.createElement("p");
    //TODO内容テキストを取得
    const text = p.textContent;
    param.innerText = text;

    createIncompleteList(text);

    //button（戻す）タブの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget = div.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const param = document.createElement("p");
      const text = p.textContent;
      param.innerText = text;
      createIncompleteList(param.innerText);
    });

    //divタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(backButton);

    addTarget.appendChild(div);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(div.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
