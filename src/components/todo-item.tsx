import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <button onClick={() => setChecked(!checked)}>
      <div
        className={`mt-1 size-5 rounded-full border border-fuchsia-700 ${
          checked ? "bg-fuchsia-700" : ""
        }`}
      />
    </button>
  );
};

const DeleteButton = ({ onDelete }: { onDelete: VoidFunction }) => {
  return (
    <button
      className="mt-1 transition-all md:opacity-0 md:hover:opacity-100"
      onClick={onDelete}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>
    </button>
  );
};

function TodoItem({
  content,
  onDelete,
}: {
  content: string;
  onDelete: VoidFunction;
}) {
  return (
    <div className="flex w-full items-start justify-start gap-2">
      <Checkbox />
      <span>{content}</span>
      <DeleteButton onDelete={onDelete} />
    </div>
  );
}

export default TodoItem;
