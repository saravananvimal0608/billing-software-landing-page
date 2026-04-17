import Swipper from "./swipper/Swipper";
import Image1 from "../assets/hero.png";
import Image2 from "../assets/hero.png";
import Image3 from "../assets/hero.png";
import Image4 from "../assets/hero.png";
import Image5 from "../assets/hero.png";

const Features = () => {
  const data = [
    {
      img: Image1,
      alt: "features-image",
      title: "Investment Management",
      para: "Maximize your returns with our expert investment strategies.",
    },
    {
      img: Image2,
      alt: "features-image",
      title: "Investment Management",
      para: "Maximize your returns with our expert investment strategies.",
    },
    {
      img: Image3,
      alt: "features-image",
      title: "Investment Management",
      para: "Maximize your returns with our expert investment strategies.",
    },
    {
      img: Image4,
      alt: "features-image",
      title: "Investment Management",
      para: "Maximize your returns with our expert investment strategies.",
    },
    {
      img: Image5,
      alt: "features-image",
      title: "Investment Management",
      para: "Maximize your returns with our expert investment strategies.",
    },
  ];
  return (
    <div className="mt-5 bg-secondary  pb-5" id="features">
      <h1 className="text-center my-6 pt-3 text-3xl font-bold ">
        Our Features
        <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2 rounded-full"></span>
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
