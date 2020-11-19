import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = " ";

  creatFromIncomplete(inputText);
};
// 未完了リストから削除
const deleteFromIncimpleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};
// 完了リストから未完了リストに追加
const creatFromIncomplete = (text) => {
  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  // liの生成
  const li = document.createElement("li");
  li.innerText = text;
  // buttonの生成
  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 削除お押すと親要素を取得
    deleteFromIncimpleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    // div
    const li = document.createElement("li");
    li.innerText = text;
    // ボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const backTarget = backButton.parentNode;
      const text = backTarget.firstElementChild.innerText;
      creatFromIncomplete(text);
    });
    //小要素を取得
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncimpleteList(deleteButton.parentNode);
  });
  // divタグの配下にliを生成
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
document.getElementById("add-text").addEventListener("click", () => {
  onClickAdd();
});
