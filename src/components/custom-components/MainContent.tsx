export default function MainContent({ children }: React.PropsWithChildren) {
  return (
    <div className="px-8 py-6">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
