"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import getStripe from "@/utils/get-stripe";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleBasicClick = () => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  };

  const handleEnterpriseClick = () => {
    window.location.href = "mailto:aqibnawab1100@gmail.com";
  };

  const handleSubmit = async () => {
    try {
      const checkoutSession = await fetch("/api/checkout-sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscriptionType: isYearly ? "yearly" : "monthly",
        }),
      });

      if (!checkoutSession.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { sessionId } = await checkoutSession.json();
      const stripe = await getStripe();

      if (!stripe) {
        throw new Error("Stripe initialization failed.");
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Stripe redirect error:", error);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const pricingPlans = [
    {
      name: "Basic",
      description: "Get started with our free plan.",
      price: "$0",
      features: ["100 flashcards", "Basic study modes", "Limited analytics"],
      buttonText: isSignedIn ? "Current Plan" : "Sign up for free",
      buttonAction: handleBasicClick,
      buttonDisabled: isSignedIn,
    },
    {
      name: "Pro",
      description: "Unlock more features for serious learners.",
      price: isYearly ? "$90/year" : "$9/mo",
      features: [
        "Unlimited flashcards",
        "Advanced study modes",
        "Detailed analytics",
        "Custom decks",
      ],
      buttonText: "Get Pro",
      buttonAction: handleSubmit,
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for teams and organizations.",
      price: "Contact us",
      features: [
        "Unlimited flashcards",
        "Advanced study modes",
        "Detailed analytics",
        "Custom branding",
        "Dedicated support",
      ],
      buttonText: "Contact Sales",
      buttonAction: handleEnterpriseClick,
    },
  ];

  return (
    <section
      id="pricing"
      className="layout-container flex my-16 mx-auto pb-4 px-4 sm:px-8"
    >
      <div className="container grid items-center justify-center gap-12 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl  font-semibold text-[#A020F0] ">Pricing for Every Need</h1>
          <p className="max-w-lg mx-auto text-lg">
            Choose the plan that fits your learning style and budget. Get
            started with our free Basic plan or unlock more features with our
            Pro and Enterprise options.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <label htmlFor="billing-toggle">Monthly</label>
          <input
            type="checkbox"
            id="billing-toggle"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <label htmlFor="billing-toggle">Yearly</label>
        </div>

        <div className="price-cards-container grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div>
                <h2 className="text-xl font-semibold text-black">
                  {plan.name}
                </h2>
                <p className="text-black">{plan.description}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-4xl font-bold text-black">
                  {plan.price}
                </div>
                <ul className="grid gap-2 text-sm text-black">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <Check className="mr-2 inline-block h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full mt-3 py-2 px-4 ${
                  plan.buttonDisabled
                    ? "border border-gray-300 text-black"
                    : "bg-blue-600 text-white"
                } rounded-lg`}
                onClick={plan.buttonAction}
                disabled={plan.buttonDisabled}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
