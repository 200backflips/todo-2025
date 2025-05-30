const TodoInput = () => {
  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <input
        name="content"
        placeholder="Add item"
        type="text"
        className="w-full border-b"
      />
      <button type="submit">+</button>
    </div>
  );
};

export default TodoInput;
