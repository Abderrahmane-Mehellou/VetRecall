import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex flex-row items-start space-x-4">
      <div className="w-13 h-13 rounded-full overflow-hidden object-cover">
        <img src="/images/logo_green.png" alt="Logo" />
      </div>
      <div>
        <p className="font-extrabold text-xl">
          Vet<span className="text-blue-500">Recall</span>
        </p>
        <p className="font-light text-xs">Pawsworth Clinic</p>
      </div>
    </Link>
  );
}

export default Logo;
