export default function TreeArea({ children }) {
  return (
    <div className="relative h-125 border mt-6 bg-gray-900 rounded-lg overflow-hidden">
      {children}
    </div>
  );
}