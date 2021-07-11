import React from "react";

/**
 * ５７，何をコンポーネント化するのか決める
 * １，コンポするコードを抜き出す、ここに貼り付け
 * ２，抜きだした先でこのコンポーネントがつかえるようにimportする
 * ３，抜き出したコード（以下）は変数がそのまま使えない、Propsを使う
 *
 *　５８，CSSinJS
 *　５７，のコンポーネント化に伴い
　　　対応した内容を書く
 * */

const style = {
  /* .css original
    background-color: #c1ffff;
    width: 400px;
    height: 30px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    */

  // JS表記にするので、ハイフンは使わない、つなぎ目は大文字　；でなく、
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  // 分割代入で取り出す
  const { todoText, onChange, onClick } = props;
  // 58, styleは上記から、.cssは詠み込まないのでClassnameも不要
  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
