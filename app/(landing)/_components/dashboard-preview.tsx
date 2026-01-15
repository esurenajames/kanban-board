import { Search, Plus, MoreHorizontal, MessageSquare, Paperclip, Calendar, CheckCircle2, Circle, Clock } from 'lucide-react'

export function DashboardPreview() {
    return (
        <div className="w-full aspect-[16/10] bg-white rounded-xl overflow-hidden shadow-2xl border border-zinc-200 flex text-left font-sans">
            {/* Sidebar */}
            <div className="w-16 md:w-64 border-r border-zinc-100 bg-zinc-50/50 flex flex-col">
                <div className="p-4 border-b border-zinc-100 h-16 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <div className="w-4 h-4 rounded bg-primary" />
                    </div>
                    <span className="ml-3 font-semibold text-zinc-900 hidden md:block">Acme Corp.</span>
                </div>

                <div className="p-4 flex flex-col gap-1">
                    <div className="text-xs font-semibold text-zinc-400 mb-2 px-2 hidden md:block">MENU</div>
                    <SidebarItem icon={<CheckCircle2 className="w-4 h-4" />} label="My Tasks" active />
                    <SidebarItem icon={<Calendar className="w-4 h-4" />} label="Calendar" />
                    <SidebarItem icon={<MessageSquare className="w-4 h-4" />} label="Messages" badge="4" />
                </div>

                <div className="mt-auto p-4 border-t border-zinc-100">
                    <div className="flex items-center gap-3 px-2 py-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400" />
                        <div className="hidden md:block">
                            <div className="text-sm font-medium text-zinc-900">Alex Designer</div>
                            <div className="text-xs text-zinc-500">Pro Plan</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-white">
                {/* Header */}
                <div className="h-16 border-b border-zinc-100 flex items-center px-6 justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-bold text-zinc-900">Website Redesign</h2>
                        <div className="h-6 w-px bg-zinc-200" />
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-600 z-[${i}]`}>
                                    U{i}
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-xs text-zinc-500 hover:bg-zinc-200 cursor-pointer">
                                +4
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 rounded-lg border border-zinc-200 text-zinc-500 text-sm">
                            <Search className="w-4 h-4" />
                            <span className="hidden sm:inline">Search...</span>
                        </div>
                        <button className="p-2 text-zinc-400 hover:text-zinc-600">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                        <button className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            <span className="hidden sm:inline">New Task</span>
                        </button>
                    </div>
                </div>

                {/* Board */}
                <div className="flex-1 p-6 overflow-hidden bg-zinc-50/30">
                    <div className="flex gap-6 h-full w-full">
                        {/* Column 1 */}
                        <div className="w-80 shrink-0 flex flex-col gap-4">
                            <div className="flex items-center justify-between px-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-zinc-400" />
                                    <span className="font-semibold text-zinc-700">To Do</span>
                                    <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-xs text-zinc-500 font-medium">3</span>
                                </div>
                                <Plus className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-zinc-600" />
                            </div>

                            <TaskCard
                                category="Design"
                                categoryColor="bg-purple-100 text-purple-700"
                                title="Homepage Hero Header"
                                description="Create new 3D assets for the main hero section."
                                users={[1, 2]}
                                comments={3}
                            />
                            <TaskCard
                                category="Research"
                                categoryColor="bg-blue-100 text-blue-700"
                                title="Competitor Analysis"
                                description="Review top 5 competitors in the market."
                                users={[3]}
                                comments={1}
                                urgent
                            />
                        </div>

                        {/* Column 2 */}
                        <div className="w-80 shrink-0 flex flex-col gap-4">
                            <div className="flex items-center justify-between px-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <span className="font-semibold text-zinc-700">In Progress</span>
                                    <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-xs text-zinc-500 font-medium">2</span>
                                </div>
                                <Plus className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-zinc-600" />
                            </div>

                            <TaskCard
                                category="Development"
                                categoryColor="bg-orange-100 text-orange-700"
                                title="Authentication Flow"
                                description="Implement OAuth2 login with Google and GitHub."
                                users={[2, 4]}
                                comments={8}
                                image="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=300&q=80"
                            />
                        </div>

                        {/* Column 3 */}
                        <div className="w-80 shrink-0 flex flex-col gap-4 hidden md:flex">
                            <div className="flex items-center justify-between px-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="font-semibold text-zinc-700">Done</span>
                                    <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-xs text-zinc-500 font-medium">5</span>
                                </div>
                                <Plus className="w-4 h-4 text-zinc-400 cursor-pointer hover:text-zinc-600" />
                            </div>

                            <TaskCard
                                category="Design"
                                categoryColor="bg-purple-100 text-purple-700"
                                title="Icon Set Update"
                                description="Refresh all system icons to Lucide v2."
                                users={[1]}
                                comments={0}
                                complete
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SidebarItem({ icon, label, active, badge }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string }) {
    return (
        <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group transition-colors ${active ? 'bg-primary/5 text-primary font-medium' : 'text-zinc-600 hover:bg-zinc-100'}`}>
            <div className="flex items-center gap-3">
                {icon}
                <span className="hidden md:block">{label}</span>
            </div>
            {badge && (
                <span className="bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full hidden md:block">
                    {badge}
                </span>
            )}
        </div>
    )
}

function TaskCard({
    category,
    categoryColor,
    title,
    description,
    users,
    comments,
    image,
    urgent,
    complete
}: {
    category: string,
    categoryColor: string,
    title: string,
    description: string,
    users: number[],
    comments: number,
    image?: string,
    urgent?: boolean,
    complete?: boolean
}) {
    return (
        <div className={`p-4 bg-white rounded-xl shadow-sm border border-zinc-100 group hover:shadow-md transition-all cursor-pointer ${complete ? 'opacity-60 grayscale' : ''}`}>
            <div className="flex items-start justify-between mb-3">
                <span className={`text-[10px] font-bold px-2 py-1 rounded text-primary-700 ${categoryColor}`}>
                    {category}
                </span>
                <button className="text-zinc-300 hover:text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>

            <h3 className="text-sm font-semibold text-zinc-900 mb-1 leading-snug">{title}</h3>
            <p className="text-xs text-zinc-500 mb-4 line-clamp-2 leading-relaxed">{description}</p>

            {image && (
                <div className="mb-4 rounded-lg overflow-hidden h-32 w-full relative">
                    <img src={image} alt="Task attachment" className="absolute inset-0 w-full h-full object-cover" />
                </div>
            )}

            <div className="flex items-center justify-between border-t border-zinc-50 pt-3">
                <div className="flex -space-x-2">
                    {users.map((u) => (
                        <div key={u} className="w-6 h-6 rounded-full border border-white bg-zinc-200" />
                    ))}
                </div>

                <div className="flex items-center gap-3 text-zinc-400">
                    {urgent && (
                        <Clock className="w-3.5 h-3.5 text-red-400" />
                    )}
                    <div className="flex items-center gap-1 text-xs">
                        <Paperclip className="w-3 h-3" />
                        <span>2</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                        <MessageSquare className="w-3 h-3" />
                        <span>{comments}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
