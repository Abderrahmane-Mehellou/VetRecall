function Spinner({size = "md", className = ""}) {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-7 h-7 border-2",
    lg: "w-10 h-10 border-[3px]",
  };

  return (
    <div
      className={`rounded-full border-blue-100 border-t-blue-600 animate-spin ${sizes[size]} ${className}`}
    />
  );
}

export default Spinner;
