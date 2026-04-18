import Swipper from "./swipper/Swipper";
import Image1 from "../assets/features-1.png";
import Image2 from "../assets/features-2.png";
import Image3 from "../assets/features-3.png";
import Image4 from "../assets/features-4.png";
import Image5 from "../assets/features-5.png";

const Features = () => {
 const data = [
  {
    img: Image1,
    alt: "billing-system",
    title: "Smart Billing",
    para: "Quickly calculate bills with real-time product search and instant total updates.",
  },
  {
    img: Image2,
    alt: "product-management",
    title: "Product Management",
    para: "Add, edit, and manage products like Biryani, Tea, Snacks easily.",
  },
  {
    img: Image3,
    alt: "sales-history",
    title: "Sales History",
    para: "Automatically store all transactions and track daily sales performance.",
  },
  {
    img: Image4,
    alt: "user-access",
    title: "Role-Based Access",
    para: "Admin controls the system while staff can only access billing features.",
  },
  {
    img: Image5,
    alt: "payment-tracking",
    title: "Payment Tracking",
    para: "Record payment methods like Cash, UPI, and Card for every transaction.",
  },
];
  return (
    <div className=" bg-banner  pb-5 px-5" id="features">
      <h1 className="text-center py-3 text-3xl font-bold  color-secondary">
        Our Features
        <span className="block h-1 w-16 bg-primary-color mx-auto mt-2 rounded-full"></span>
      </h1>
      <Swipper
        data={data}
        imgHeight="250px"
        imgWidth="300px"
        freeMode={true}
        slidesPerView={4}
        border={true}
      />
    </div>
  );
};

export default Features;
