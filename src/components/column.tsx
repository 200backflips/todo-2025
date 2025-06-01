import { Droppable } from "@hello-pangea/dnd";
import TaskComponent, { type Task } from "./task";
import clsx from "clsx";

export interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

export default function ColumnComponent({
  column,
  tasks,
}: {
  column: Column;
  tasks: Task[];
}) {
  return (
    <div className="flex-1">
      <h2 className="mb-2 text-lg font-bold">{column.title}</h2>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={clsx(
              "min-h-80 rounded-md border border-gray-300 p-4 transition",
              {
                "bg-blue-500/20": snapshot.isDraggingOver,
              },
            )}
          >
            {tasks.map((task, index) => (
              <TaskComponent key={task.id} {...task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
