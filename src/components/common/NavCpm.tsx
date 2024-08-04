import { FaCar } from "react-icons/fa";

export default function NavCpm() {
  return (
    <nav className="bg-[#1a1a1b] text-white w-full flex justify-center items-center z-50 shadow-md">
      <div className="flex justify-center py-4 px-10 min-w-full 2xl:min-w-[1300px]">
        <div className="flex gap-2 items-center">
          <div className="p-2 rounded-full bg-[#D35400] text-[30px]">
            <FaCar />
          </div>
          <h1 className="font-bold">SAFC</h1>
        </div>
      </div>
    </nav>
  );
}
