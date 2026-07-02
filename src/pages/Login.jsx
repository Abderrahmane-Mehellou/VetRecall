import LeftSide from "../components/form/LeftSide";
import RightSideLogin from "../components/form/RightSideLogin";

function Login() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <LeftSide />
      <RightSideLogin />
    </div>
  );
}

export default Login;
