import { useState } from "react";
import { SiBmw, SiFord, SiHonda, SiTesla, SiToyota } from "react-icons/si";
import CheckboxWithLabel from "../common/FormCpm/CheckBoxCpm";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import BMW from "../../assets/img/bmw.png";
import BMWBlue from "../../assets/img/bmwBlue.png";
import BMWBlack from "../../assets/img/bmwblackpng.png";
import viosSilver from "../../assets/img/viosSilver.png";
import civicTypeR from "../../assets/img/civicTypeR.png";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { CiCircleQuestion } from "react-icons/ci";

export default function CarSelectionCpm() {
  const [showAll, setShowAll] = useState(false);
  const [selectedColor, setSelectedColor] = useState("White");
  const [showDetails, setShowDetails] = useState(false);

  const brands = [
    { name: "Honda", icon: <SiHonda /> },
    { name: "Toyota", icon: <SiToyota /> },
    { name: "Tesla", icon: <SiTesla /> },
    { name: "Ford", icon: <SiFord /> },
    { name: "BMW", icon: <SiBmw /> },
  ];

  const colors = [
    { name: "White", hex: "#F5F5F5" },
    { name: "ALPINA Blue Metallic", hex: "#0032A0" },
    { name: "Carbon Black Metallic", hex: "#2F2F2F" },
  ];

  const cars = [
    {
      name: "Toyota Vios 2023",
      type: "Sedan",
      image: viosSilver,
      price: "₱2,696,400",
    },
    {
      name: "Honda Civic Type R 2021",
      type: "Hatchback",
      image: civicTypeR,
      price: "₱2,696,400",
    },
    {
      name: "Honda Civic Type R 2021",
      type: "Hatchback",
      image: civicTypeR,
      price: "₱2,696,400",
    },
    {
      name: "Honda Civic Type R 2021",
      type: "Hatchback",
      image: civicTypeR,
      price: "₱2,696,400",
    },
    {
      name: "Honda Civic Type R 2021",
      type: "Hatchback",
      image: civicTypeR,
      price: "₱2,696,400",
    },
    {
      name: "Honda Civic Type R 2021",
      type: "Hatchback",
      image: civicTypeR,
      price: "₱2,696,400",
    },
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full flex justify-center items-center text-[14px]">
      <div className="flex min-w-full 2xl:min-w-[1506px]">
        <div className="w-[300px] py-4 px-10 hidden xl:flex flex-col ">
          <h1 className="font-bold mb-5">Filter</h1>
          <div
            className={`overflow-hidden transition-all duration-150 ease-in-out ${
              !showAll ? `h-[110px]` : `h-[200px]`
            }`}
          >
            <h1 className="font-bold">Brand</h1>
            <CheckboxWithLabel name="all-brands" label="All Brands" />
            {brands.map((brand, index) => (
              <CheckboxWithLabel
                key={index}
                name={brand.name}
                label={
                  <div className="flex gap-2 items-center">
                    {brand.icon}
                    <h1>{brand.name}</h1>
                  </div>
                }
              />
            ))}
          </div>
          <button
            onClick={toggleShowAll}
            className="text-[#828181] font-semibold mt-2"
          >
            {showAll ? (
              <div className="flex gap-2 items-center">
                <h1>Show Less</h1> <MdKeyboardArrowUp />
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <h1>More Brand</h1> <MdKeyboardArrowDown />
              </div>
            )}
          </button>
        </div>
        <div className="bg-[#f0f2f5] p-5 w-full ">
          <div className="w-full mb-5 border-b-2">
            <h1 className="font-bold text-[#D35400]">Selected Car</h1>
            <div className="flex gap-4 justify-between py-4 px-10 pr-0">
              <div className="relative px-5 w-[700px] h-[350px]">
                <div className="relative">
                  <h1
                    className="flex gap-2 items-center justify-end text-[#D35400] cursor-pointer"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    Details <CiCircleQuestion className="text-[20px]" />
                  </h1>
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 300, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        className="absolute p-5 right-0 z-20 w-[300px] bg-white rounded-md shadow-md"
                      >
                        test
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {selectedColor == "White" && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 0.8, 1] }}
                    src={BMW}
                    alt=""
                    className="w-full transition-all ease-in-out"
                  />
                )}
                {selectedColor == "ALPINA Blue Metallic" && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 0.8, 1] }}
                    transition={{ duration: 2, ease: easeInOut }}
                    src={BMWBlue}
                    alt=""
                    className="w-full transition-all ease-in-out"
                  />
                )}
                {selectedColor == "Carbon Black Metallic" && (
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 0.8, 1] }}
                    transition={{ duration: 2, ease: easeInOut }}
                    src={BMWBlack}
                    alt=""
                    className="w-full transition-all ease-in-out"
                  />
                )}
                <div className="absolute bottom-0 left-0 w-full">
                  <div className="flex justify-between w-full">
                    <h2 className="flex flex-col text-[20px]">
                      <span className="text-[#828181] text-[15px]">Sedan</span>
                      2023 BMW ALPINA B8 Gran Coupe
                    </h2>
                    <h2 className="flex flex-col text-[20px] font-black">
                      <span className="text-[#828181] text-[15px] font-normal">
                        MSRP
                      </span>
                      ₱2,696,400
                    </h2>
                  </div>
                </div>
              </div>
              <div className="px-5 w-[400px] h-[350px] overflow-x-auto bg-white shadow-md rounded-md">
                <h1 className="text-center mb-5 font-bold text-[#D35400] p-5">
                  Choose your exterior
                </h1>
                <div className="flex flex-col gap-2">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-5 text-[18px] cursor-pointer p-2 rounded-md ${
                        selectedColor === color.name ? "bg-[#f0f2f5]" : ""
                      }`}
                      onClick={() => setSelectedColor(color.name)}
                    >
                      <div
                        className="rounded-full h-[40px] w-[40px]"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <h2>{color.name}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-hidden overflow-y-auto h-[400px]">
            {cars.map((car, index) => (
              <motion.div
                whileHover={{ scale: 0.9 }}
                key={index}
                className="w-[400px] bg-white shadow-md rounded-md cursor-pointer hover:bg-[#e8e8e9]"
              >
                <div className="relative p-5 w-[400px] h-[300px]">
                  <h2 className="flex flex-col">
                    <span className="text-[#828181]">{car.type}</span>
                    {car.name}
                  </h2>
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 0.8, 1] }}
                    src={car.image}
                    alt=""
                    className="w-full transition-all ease-in-out"
                  />
                  <div className="absolute bottom-2 w-full">
                    <h2 className="flex flex-col font-black">
                      <span className="text-[#828181] font-normal">MSRP</span>
                      {car.price}
                    </h2>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
