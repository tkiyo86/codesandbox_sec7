import React, { useState } from "react";
import "./styles.css";
//57 コンポーネントに伴うimport
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

// 57 機能実装はできたので、コンポーネント化していく

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
    //alert(index + ":完了");
    // 2段目からリストをコピーしてくる
    const newIncompleteTodos = [...incompleteTodos];
    // 2段目から削除する
    newIncompleteTodos.splice(index, 1);
    // 3段目の現状リストに追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 更新する
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  //56 戻るボタン
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];

    setIncompleteTodos(newInCompleteTodos);
    setcompleteTodos(newCompleteTodos);
  };

  // 52　 Reactに対応したmock
  // input-area -> 57でコンポーネント化,Propsで値を渡す
  const [incompleteTodos, setIncompleteTodos] = useState(["incomplete task"]);
  const [completeTodos, setcompleteTodos] = useState(["complete task"]);
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
