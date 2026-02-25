export default function LevelsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 pt-20 pb-20">
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
