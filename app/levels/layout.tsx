export default function LevelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-4 py-20">
      <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="space-y-2">
          <p className="font-semibold"></p>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  );
}
