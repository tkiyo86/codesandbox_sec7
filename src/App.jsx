import React, { useState, useEffect } from "react";
import "./styles.css";

// 55 完了ボタンの実装
//

export const App = () => {
  // 53 ボタン機能実装
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    // 入力内容を受け取る配列、incompleteTodos　に　todoTextを追加した配列が完成
    const newTodos = [...incompleteTodos, todoText];
    // newTodosを引数に中段に表示＋ボタン配置
    setIncompleteTodos(newTodos);
    // 上段の入力内容を消す＝空文字入力
    setTodoText("");
  };
  //54 削除ボタンの機能実装、どの行を押したかわかるように
  // incompleteTodos.map((todo, index) でindexにループ番号が入る
  // () => onClickDelete(index)  関数に引数を渡したい時はアロー関数で書かないと勝手にアラート実行される
  const onClickDelete = (index) => {
    // alert(index + ":削除");
    // incompleteTodos を使ってコピー
    const newTodos = [...incompleteTodos];
    // spliceで　index行目から引数２の数だけ削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //55 完了ボタン
  const onClickComplete = (index) => {
    alert(index + ":完了");
    // 2段目から削除する
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    // 3段目の現状リストに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  // 52　 Reactに対応したmock
  const [incompleteTodos, setIncompleteTodos] = useState(["sample", "sample2"]);
  const [completeTodos, setcompleteTodos] = useState(["sample3"]);
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
