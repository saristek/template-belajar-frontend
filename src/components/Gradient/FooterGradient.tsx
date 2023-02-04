
export const FooterGradient = () => {
  return (
    <div className="mx-auto max-w-6xl motion-safe:animate-rotate-colors pointer-events-none z-[-1]">
      <div className="absolute inset-x-0 bg-gradient-to-r from-amber-500 via-indigo-500 to-emerald-500 rounded-t-full opacity-20 blur-3xl h-[200px]" />
    </div>
  );
}