export default function LevelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 pt-20 pb-20">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
