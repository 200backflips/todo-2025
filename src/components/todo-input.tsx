const TodoInput = () => {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <input
        name="content"
        placeholder="Add item"
        type="text"
        className="w-full border-b outline-none"
      />
      <button type="submit">+</button>
    </div>
  );
};

export default TodoInput;
