import React from "react";

const InputTodo = () => {
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
