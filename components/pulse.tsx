export default function Pulse() {
  return (
    <div className="relative">
      <div
        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
        style={{ animationDuration: '2s' }}
      ></div>
      <div
        className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"
        style={{ animationDuration: '2s' }}
      ></div>
    </div>
  );
}
