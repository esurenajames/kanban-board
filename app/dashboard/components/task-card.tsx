import { MoreHorizontal } from "lucide-react";
import { Task } from "../types";

interface TaskCardProps {
    task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
    return (
        <div className="group relative flex flex-col items-start gap-3 rounded-lg border bg-card p-3 text-left text-sm shadow-sm transition-all hover:ring-2 hover:ring-primary/20">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${task.priority === 'high' ? 'bg-red-500/10 text-red-500' :
                            task.priority === 'medium' ? 'bg-amber-500/10 text-amber-500' :
                                'bg-blue-500/10 text-blue-500'
                        }`}>
                        {task.priority.toUpperCase()}
                    </span>
                </div>
                <button className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                </button>
            </div>

            <div className="w-full text-foreground/90 font-medium leading-relaxed">
                {task.content}
            </div>

            <div className="flex w-full items-center justify-between text-xs text-muted-foreground mt-1">
                <div className="flex items-center gap-2">
                    {task.tags.map(tag => (
                        <span key={tag} className="bg-primary/5 px-1.5 py-0.5 rounded text-[10px] text-primary/80">
                            #{tag}
                        </span>
                    ))}
                </div>
                {task.assignees && (
                    <div className="flex -space-x-1.5">
                        {task.assignees.map((a, i) => (
                            <div key={i} className="h-5 w-5 rounded-full ring-1 ring-background bg-gradient-to-br from-indigo-500 to-purple-500" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
