const header = { color: "blue", fontSize: "140px" }; // Way 2

export default function InlineComponent() {
  return (
    <>
      {/* Way 1 */}
      {/* //inline Styling // outermoist brackets are for JS code and inner brackets are for defining an object with CSS properties // Properties are in camelCase and are in JSX */}
      <h1 style={{ color: "violet", fontSize: "140px" }}>Way 1</h1>
      {/* Way 2 */}
      <h1 style={header}>Way 2</h1>
    </>
  );
}
