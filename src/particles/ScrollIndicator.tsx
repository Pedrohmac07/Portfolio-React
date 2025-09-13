export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center py-2 animate-opacity">
      <div className="relative w-6 h-10 border-2 border-white rounded-4xl overflow-hidden">
        <div className="absolute left-1/2 bottom-4 w-3 h-3 bg-white rounded-full animate-slide-y"></div>
      </div>
    </div>
  );
}
