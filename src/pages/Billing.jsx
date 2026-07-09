import {FaCheck} from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { useAuth } from "../hooks/useAuth";

function Billing() {
  return (
    <div className="mt-16 space-y-8 max-w-[1600px] px-6">
      <Header />
      <PricingCards />
    </div>
  );
}

export default Billing;

function Header() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Billing & Subscription
      </h1>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Manage your plan, payment methods and invoices
      </p>
    </div>
  );
}
const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "For small clinics getting started.",
    price: 49,
    currency: "USD",
    billingPeriod: "mo",
    features: [
      "Up to 500 patients",
      "Email reminders",
      "Basic analytics",
      "1 user",
    ],
    
  },
  {
    id: "professional",
    name: "Professional",
    description: "Most popular for growing clinics.",
    price: 149,
    currency: "USD",
    billingPeriod: "mo",
    features: [
      "Up to 5,000 patients",
      "Email + SMS reminders",
      "Advanced analytics",
      "10 users",
      "Priority support",
    ],
    
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For multi-location clinics.",
    price: 399,
    currency: "USD",
    billingPeriod: "mo",
    features: [
      "Unlimited patients",
      "Omnichannel reminders",
      "Custom integrations",
      "SSO + audit logs",
      "Dedicated CSM",
    ],
    
  },
];

function PricingCard({plan, onSelect}) {
  const {clinic} = useAuth();
  const {
    name,
    description,
    price,
    currency,
    billingPeriod,
    features,
  } = plan;


  function getCta(clinicPlanId, targetPlanId) {
    if (clinicPlanId === targetPlanId) {
      return {
        label: "Current plan",
        action: "none",
        disabled: true,
      };
    }

    const currentIndex = plans.findIndex((plan) => plan.id === clinicPlanId);

    const targetIndex = plans.findIndex((plan) => plan.id === targetPlanId);

    const isUpgrade = targetIndex > currentIndex;

    return {
      label: isUpgrade ? "Upgrade" : "Downgrade",
      action: isUpgrade ? "upgrade" : "downgrade",
      disabled: false,
    };
  }

  return (
    <div
      className={`relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6
                  border transition-shadow duration-700 hover:scale-105
                  ${
                    clinic.plan === plan.id
                      ? "border-indigo-500 shadow-md"
                      : "border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md"
                  }`}
    >
      {clinic.plan === plan.id && (
        <span
          className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-semibold
                          text-white bg-indigo-600"
        >
          Current
        </span>
      )}

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {name}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
        {description}
      </p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-slate-900 dark:text-white">
          {currency === "USD" ? "$" : currency}
          {price}
        </span>
        <span className="text-sm text-slate-400 dark:text-slate-500">
          /{billingPeriod}
        </span>
      </div>

      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
          >
            <FaCheck className="mt-0.5 text-green-500 shrink-0" size={13} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled={clinic.plan === plan.id}
        onClick={() => onSelect(plan)}
        className={`mt-8 w-full py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                    ${
                      clinic.plan === plan.id
                        ? "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
                    }`}
      >
        {getCta(clinic.plan, plan.id).label}
      </button>
    </div>
  );
}

function PricingCards({onSelect}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} onSelect={onSelect} />
      ))}
    </div>
  );
}

function PaymentSection(){
  return (
    <div> 
    </div>
  )
}