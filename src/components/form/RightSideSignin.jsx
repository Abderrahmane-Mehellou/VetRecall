import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiUser,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";
import {HiOutlineOfficeBuilding} from "react-icons/hi";
import PhoneCountryRow from "./PhoneCountryRow"
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { registerUser } from "../../service/auth.service";
import { useAuth } from "../../hooks/useAuth";
import { createClinic, getClinicById } from "../../service/clinic.service";
import { auth } from "../../firebase/firebase";
import { createUser, getUserById } from "../../service/user.service";

function RightSideSignin() {
  return (
    <div className="flex justify-between flex-col items-center bg-gray-100 flex-6 w-150">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default RightSideSignin;

function Header() {
  return (
    <div className="flex flex-col items-center pt-10 h-1/4 mb-5">
      <h1 className="text-3xl font-bold text-slate-900">
        Create your Vet<span className="text-blue-600">Recall</span> Account
      </h1>
      <p className="text-gray-500 mt-2">
        Start managing your veterinary clinic in minutes.
      </p>
    </div>
  );
}

function Form() {
  const navigation = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const {setUser, setClinic, firebaseUser} = useAuth();
  const [formData, setFormData] = useState({
    clinicName: "",
    fullName: "",
    email: "",
    phone: "",
    country: "",
    countryCode: "",
    dialCode: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!agreed) return;

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log(formData)
    try {
    //   // 1. Create Firebase Authentication account
      const firebaseUser = await registerUser({
        email: formData.email,
        password: formData.password,
      });

      const clinicData = {
        name: formData.clinicName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        city: "",
        address: "",
        createdBy: firebaseUser.uid,
      };

      const clinicId = await createClinic(clinicData);

      const userData = {
        uid: firebaseUser.uid,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        clinicId,
        role: "owner",
        lastLogin: new Date(),
        avatar: `https://api.dicebear.com/9.x/personas/svg?seed=${encodeURIComponent(
          formData.fullName,
        )}&backgroundColor=FDFDFD`,
      };

      await createUser(userData);
      

      onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          const currentUser = await getUserById(firebaseUser.uid);
          setUser(currentUser);

          if (currentUser?.clinicId) {
            const currentClinic = await getClinicById(currentUser.clinicId);
            setClinic(currentClinic);
          }
        }
      });

        

        navigation("/");

        toast.success("Account created successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Error creating account: " + err.message);
    }

  }

  return (
    <div className="w-150">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white rounded-4xl p-8 flex flex-col gap-5"
      >
        {/* Row 1 — Clinic name + Full name */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-sm font-medium text-slate-700">
              Clinic name
            </label>
            <div className="relative">
              <HiOutlineOfficeBuilding
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                name="clinicName"
                type="text"
                value={formData.clinicName}
                onChange={handleChange}
                placeholder="Pawsome Vets"
                className="w-full h-12 rounded-full bg-gray-100 text-gray-700 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-sm font-medium text-slate-700">
              Full name
            </label>
            <div className="relative">
              <FiUser
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Dr. Jane Doe"
                className="w-full h-12 rounded-full bg-gray-100 text-gray-700 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <div className="relative">
            <FiMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@clinic.com"
              className="w-full h-12 rounded-full bg-gray-100 text-gray-700 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
          </div>
        </div>

        {/* Row 2 — Phone + Country */}
        <div className="flex gap-4">
          <PhoneCountryRow formData={formData} setFormData={setFormData} />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Password</label>
          <div className="relative">
            <FiLock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="w-full h-12 rounded-full bg-gray-100 text-gray-700 pl-10 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPassword ? <FiEye size={16} /> : <FiEyeOff size={16} />}
            </button>
          </div>
        </div>

        {/* Confirm password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            Confirm password
          </label>
          <div className="relative">
            <FiLock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              className="w-full h-12 rounded-full bg-gray-100 text-gray-700 pl-10 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showConfirm ? <FiEye size={16} /> : <FiEyeOff size={16} />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="accent-blue-600 w-4 h-4"
          />
          I agree to the{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Terms of Service
          </span>{" "}
          &{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Privacy Policy
          </span>
        </label>

        {/* Create Account button */}
        <button
          disabled={!agreed}
          type="submit"
          className="w-full h-12 rounded-full bg-blue-400 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          Create Account →
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social buttons */}
        <div className="flex gap-3">
          <button className="flex-1 gap-3 h-11 rounded-full border border-gray-200 hover:bg-gray-50 flex items-center justify-center cursor-pointer transition-colors">
            <img
              src="https://www.google.com/favicon.ico"
              className="w-5 h-5"
              alt="Google"
            />
            <p>Continue with Google</p>
          </button>
        </div>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col items-center gap-2 h-1/4 justify-center">
      <p className="text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-bold hover:underline">
          Sign In
        </Link>
      </p>
      <p className="text-gray-400 text-xs">
        © 2026 VetRecall · Privacy · Terms
      </p>
    </div>
  );
}


