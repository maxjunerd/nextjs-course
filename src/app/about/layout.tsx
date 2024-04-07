import "../about.css";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>This is the about header</header>
      {children}
    </>
  );
}
