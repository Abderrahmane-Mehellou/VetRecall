function Logo() {
  return (
    <div className="flex flex-row items-start space-x-4">
      <div className="w-13 h-13 rounded-full overflow-hidden object-cover">
        <img src="/images/logo_green.png" alt="Logo" />
      </div>
      <div>
        <h1 className="font-bold text-xl">VetRecall</h1>
        <p className="font-light text-xs">Pawsworth Clinic</p>
      </div>
    </div>
  );
}

export default Logo;
