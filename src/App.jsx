import React from "react";
import "./styles.css";

// 50, HTMLでいう構造を作成する
export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のToDo</p>
        <div>
          <ul>
            <li>sample</li>
          </ul>
          <button>完了</button>
          <button>削除</button>
        </div>
      </div>
        <div>
          <p>完了のToDo</p>
          <div>
            <ul>
              <li>sample</li>
            </ul>
            <button>完了</button>
            <button>削除</button>
          </div>
        </div>
    </>
  );
};