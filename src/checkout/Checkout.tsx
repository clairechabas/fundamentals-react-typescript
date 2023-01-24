import { useState } from "react";

// type CheckoutStep = "Details" | "Shipping" | "Payment";
enum CheckoutStep {
  Details = "Details",
  Shipping = "Shipping",
  Payment = "Payment",
}

function Checkout() {
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>("Details");

  return (
    <>
      {checkoutStep === "Details" && (
        <>
          <h1>Details</h1>
          <button type="button" onClick={() => setCheckoutStep("Shipping")}>
            Next
          </button>
        </>
      )}

      {checkoutStep === "Shipping" && (
        <>
          <h1>Shipping</h1>
          <button type="button" onClick={() => setCheckoutStep("Payment")}>
            Next
          </button>
        </>
      )}
      {checkoutStep === "Payment" && (
        <>
          <h1>Payment</h1>
        </>
      )}
    </>
  );
}

export default Checkout;
