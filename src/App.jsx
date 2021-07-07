import React, { useState, useEffect } from "react";
import "./styles.css";

// 52, 入力内容は可変＝Stateとして定義、いったん初期値をおく
// useStateで入力値を準備して、Map関数で処理する
//  key={todo} を忘れないように、どの処理をするか把握するための目印？
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
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          {completeTodos.map((todo) => {
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
