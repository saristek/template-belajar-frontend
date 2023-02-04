
export const HeaderGradient = () => {
  return (
    <div className="mx-auto max-w-6xl motion-safe:animate-rotate-colors pointer-events-none z-[-2]">
      <div className="absolute inset-x-0 bg-gradient-to-r from-indigo-300 to-purple-400 opacity-30 blur-3xl top-[-64px] h-[200px]" />
    </div>
  );
}