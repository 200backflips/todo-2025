import clsx from "clsx";
import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <button onClick={() => setChecked(!checked)} className="mt-1 self-start">
      <div
        className={clsx("size-5 rounded-full border border-fuchsia-700", {
          "bg-fuchsia-700": checked,
        })}
      />
    </button>
  );
};

const DeleteButton = ({ onDelete }: { onDelete: VoidFunction }) => {
  return (
    <button
      className="mb-1 self-end transition-all group-hover:opacity-100 hover:text-red-500 md:opacity-0"
      onClick={onDelete}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
    <div className="group flex w-full justify-start gap-2">
      <Checkbox />
      <span>{content}</span>
      <DeleteButton onDelete={onDelete} />
    </div>
  );
}

export default TodoItem;
