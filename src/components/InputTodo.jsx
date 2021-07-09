import React from "react";

/**
 * 何をコンポーネント化するのか決める
 * １，コンポするコードを抜き出す、ここに貼り付け
 * ２，抜きだした先でこのコンポーネントがつかえるようにimportする
 * ３，抜き出したコード（以下）は変数がそのまま使えない、Propsを使う
 *
 *
 *
 * */

export const InputTodo = (props) => {
  // 分割代入で取り出す
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
