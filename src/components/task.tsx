import { Draggable } from "@hello-pangea/dnd";

export interface Task {
  id: string;
  title: string;
}

export default function TaskComponent({
  title,
  id,
  index,
}: Task & { index: number }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="mb-2 rounded-md border border-gray-300 bg-white p-4 text-sm"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {title}
        </div>
      )}
    </Draggable>
  );
}
