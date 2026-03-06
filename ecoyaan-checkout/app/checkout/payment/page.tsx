import dynamic from "next/dynamic";

const PaymentContent = dynamic(
  () => import("./PaymentContent").then((m) => m.PaymentContent),
  { ssr: false },
);

export default function PaymentPage() {
  return <PaymentContent />;
}


