export default function TreeArea({ children }) {
  return (
    <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-150 lg:h-150 border mt-6 bg-gray-900 rounded-lg overflow-hidden">
      {children}
    </div>
  );
}