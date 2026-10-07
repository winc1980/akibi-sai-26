export default function Background() {
  return (
    <div
      className="fixed top-0 -z-50 h-full w-full bg-cover"
      style={{
        backgroundImage: "url(/background.svg)",
      }}
    />
  );
}
