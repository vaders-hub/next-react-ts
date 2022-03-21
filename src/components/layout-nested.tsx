export default function NestedLayout({ children }: any) {
  return (
    <div>
      <p>nested</p>
      <div>{children}</div>
    </div>
  );
}
