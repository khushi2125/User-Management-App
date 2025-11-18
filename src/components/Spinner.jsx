const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-transparent border-r-indigo-600 animate-spin animation-reverse"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
