function Spinner({size = "md", color = "blue"}) {
  size = size === "sm" ? "w-4 h-4" : size === "md" ? "w-6 h-6" : "w-8 h-8";
  return <div className={`animate-spin rounded-full border-2 ${size} border-${color}-500`}></div>;
}

export default Spinner;
