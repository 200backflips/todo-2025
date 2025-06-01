import type { Column } from "../../components/column";
import type { Task } from "../../components/task";

interface KanbanData {
  tasks: Record<string, Task>;
  columns: Record<string, Column>;
  columnOrder: string[];
}

export const initialData: KanbanData = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "buy eggs 🥚",
    },
    "task-2": {
      id: "task-2",
      title: "get fries 🍟",
    },
    "task-3": {
      id: "task-3",
      title: "get fired up 🔥",
    },
    "task-4": {
      id: "task-4",
      title: "call the fire department 👩‍🚒",
    },
  },
  columns: {
    todo: {
      id: "todo",
      title: "Todo",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    inProgress: {
      id: "inProgress",
      title: "In Progress",
      taskIds: [],
    },
    done: {
      id: "done",
      title: "Done 🎉",
      taskIds: [],
    },
  },
  columnOrder: ["todo", "inProgress", "done"],
};
