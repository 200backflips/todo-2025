import { useState } from "react";
import ColumnComponent from "../../components/column";
import {
  DragDropContext,
  type DraggableLocation,
  type DropResult,
} from "@hello-pangea/dnd";
import { initialData } from "./utils";

export default function Home() {
  const [data, setData] = useState(initialData);

  const handleMoveBetweenColumns = (
    source: DraggableLocation<string>,
    destination: DraggableLocation<string>,
    draggableId: string,
  ) => {
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  const handleMoveWithinColumn = (
    source: DraggableLocation<string>,
    destination: DraggableLocation<string>,
    draggableId: string,
  ) => {
    const sourceColumn = data.columns[source.droppableId];

    const newTaskIds = Array.from(sourceColumn.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...sourceColumn,
      taskIds: newTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    });
  };

  const handleDragEnd = ({ source, destination, draggableId }: DropResult) => {
    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      return handleMoveWithinColumn(source, destination, draggableId);
    }
    return handleMoveBetweenColumns(source, destination, draggableId);
  };

  return (
    <DragDropContext
      onDragStart={() => {}}
      onDragUpdate={() => {}}
      onDragEnd={handleDragEnd}
    >
      <div className="mx-auto w-full p-6 md:max-w-[70vw]">
        <h2 className="mb-10 text-2xl font-bold">My daily duties</h2>
        <div className="flex flex-1 flex-col justify-center gap-4 overflow-x-auto md:flex-row md:gap-10">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <ColumnComponent key={columnId} column={column} tasks={tasks} />
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}
