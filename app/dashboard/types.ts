export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  content: string;
  priority: Priority;
  tags: string[];
  assignees?: string[]; // URLs or initials
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
