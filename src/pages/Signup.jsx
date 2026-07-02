import LeftSide from "../components/form/LeftSide";
import RightSideSignin from "../components/form/RightSideSignin";

function Signup() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <LeftSide />
      <RightSideSignin />
    </div>
  );
}

export default Signup;
