"use client";

import { Plus } from "lucide-react";
import { Column } from "./column";
import { Column as ColumnType } from "../types";

const MOCK_DATA: ColumnType[] = [
    {
        id: '1',
        title: 'To Do',
        tasks: [
            { id: 't1', content: 'Design System Update', priority: 'high', tags: ['design', 'ui'], assignees: ['u1'] },
            { id: 't2', content: 'Competitor Analysis', priority: 'medium', tags: ['research', 'product'] },
        ]
    },
    {
        id: '2',
        title: 'In Progress',
        tasks: [
            { id: 't3', content: 'Auth Integration', priority: 'high', tags: ['dev', 'backend'], assignees: ['u1', 'u2'] },
        ]
    },
    {
        id: '3',
        title: 'Review',
        tasks: [
            { id: 't4', content: 'Landing Page Copy', priority: 'low', tags: ['content', 'marketing'] },
        ]
    },
    {
        id: '4',
        title: 'Done',
        tasks: []
    }
];

export function KanbanBoard() {
    return (
        <div className="flex h-full flex-1 gap-6 overflow-x-auto pb-4 pt-2">
            {MOCK_DATA.map((col) => (
                <Column key={col.id} {...col} />
            ))}

            {/* Add Column Button */}
            <div className="w-[350px] min-w-[350px]">
                <button className="flex h-[100px] w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/20 text-muted-foreground transition-all hover:bg-muted/40 hover:border-primary/30 hover:text-primary">
                    <Plus className="h-6 w-6" />
                    <span className="font-medium">Add New Column</span>
                </button>
            </div>
        </div>
    );
}
