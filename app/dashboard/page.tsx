import { KanbanBoard } from "./components/board";
import { Search, Bell, Settings, User } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="flex flex-col h-screen w-full bg-background">

            {/* Dashboard Header */}
            <header className="flex h-16 shrink-0 items-center justify-between border-b px-6 bg-card/50 backdrop-blur-sm z-10">
                <div className="flex items-center gap-4">
                    <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">K</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-semibold text-foreground">Product Design</h1>
                        <p className="text-xs text-muted-foreground">Team Apollo</p>
                    </div>
                    <div className="h-6 w-[1px] bg-border mx-2" />
                    <nav className="flex gap-4 text-sm font-medium text-muted-foreground">
                        <button className="text-foreground border-b-2 border-primary py-5">Board</button>
                        <button className="hover:text-foreground transition-colors py-5">List</button>
                        <button className="hover:text-foreground transition-colors py-5">Timeline</button>
                        <button className="hover:text-foreground transition-colors py-5">Calendar</button>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative hidden md:block group">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            className="h-9 w-64 rounded-full bg-muted/50 pl-9 pr-4 text-sm outline-none ring-1 ring-transparent focus:bg-background focus:ring-primary/20 transition-all placeholder:text-muted-foreground/70"
                        />
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-muted transition-all relative">
                            <Bell className="h-4 w-4" />
                            <span className="absolute top-2 right-2.5 h-2 w-2 bg-red-500 rounded-full border-2 border-background"></span>
                        </button>
                        <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-muted transition-all">
                            <Settings className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 ring-2 ring-background cursor-pointer" />
                </div>
            </header>

            {/* Main Board Area */}
            <main className="flex-1 overflow-hidden p-6 relative">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

                <div className="relative h-full flex flex-col gap-6">
                    <div className="flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold tracking-tight">Board</h2>
                            <div className="flex items-center -space-x-2">
                                <div className="h-8 w-8 rounded-full ring-2 ring-background bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-medium">JD</div>
                                <div className="h-8 w-8 rounded-full ring-2 ring-background bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-medium">AS</div>
                                <button className="h-8 w-8 rounded-full ring-2 ring-background bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium hover:bg-muted/80 transition-colors">
                                    +4
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">Last updated 12m ago</span>
                        </div>
                    </div>

                    <KanbanBoard />
                </div>
            </main>
        </div>
    );
}
