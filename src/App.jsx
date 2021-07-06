import React from "react";
import "./styles.css";

// 51, CSSはＪＳをコピペ、ただしclassnameを設定する
export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <div className="list-row">
          <ul>
            <li>sample</li>
          </ul>
          <button>完了</button>
          <button>削除</button>
        </div>
      </div>
        <div className="complete-area">
          <p className="title">完了のToDo</p>
          <div className="list-row">
            <ul>
              <li>sample2</li>
            </ul>
            <button>戻す</button>
          </div>
        </div>
    </>
  );
};