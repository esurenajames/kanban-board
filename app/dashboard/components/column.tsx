import { Plus, MoreHorizontal } from "lucide-react";
import { Column as ColumnType } from "../types";
import { TaskCard } from "./task-card";

interface ColumnProps extends ColumnType { }

export function Column({ title, tasks }: ColumnProps) {
    return (
        <div className="flex h-full w-[350px] min-w-[350px] flex-col rounded-xl bg-muted/50 p-4 border border-border/50">

            {/* Column Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm text-foreground">{title}</h3>
                    <span className="flex items-center justify-center h-5 min-w-5 px-1.5 text-[10px] font-medium rounded-full bg-background border text-muted-foreground">
                        {tasks.length}
                    </span>
                </div>

                <div className="flex gap-1">
                    <button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-background/80 text-muted-foreground hover:text-foreground transition-colors">
                        <Plus className="h-4 w-4" />
                    </button>
                    <button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-background/80 text-muted-foreground hover:text-foreground transition-colors">
                        <MoreHorizontal className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* Task List */}
            <div className="flex flex-1 flex-col gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent pr-1">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
                {tasks.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-32 text-center border-2 border-dashed border-muted-foreground/10 rounded-lg">
                        <p className="text-xs text-muted-foreground">No tasks yet</p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <button className="mt-4 flex items-center justify-center w-full gap-2 rounded-lg border border-transparent py-2 text-sm font-medium text-muted-foreground hover:bg-background hover:text-primary hover:shadow-sm hover:border-border transition-all">
                <Plus className="h-4 w-4" />
                <span>Add Task</span>
            </button>

        </div>
    );
}
