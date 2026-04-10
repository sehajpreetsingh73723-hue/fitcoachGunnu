import ChatInterface from "@/components/ChatInterface";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-700 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
            FC
          </div>
          <div>
            <h1 className="text-base font-semibold text-zinc-900 dark:text-white">
              FitCoach AI
            </h1>
            <p className="text-xs text-zinc-500">
              Your personal fitness coach
            </p>
          </div>
        </div>
      </header>

      {/* Chat */}
      <ChatInterface />
    </div>
  );
}
