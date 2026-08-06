import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";

function Connects() {
  return (
    <div className="flex flex-col gap-1 ss:items-center ss:justify-center md:items-start">
      <span className="text-primary-orange">LET'S CONNECT</span>
      <div className="text-3xl flex items-center justify-center gap-4">
        <FaLinkedinIn />
        <FaTelegram />
        <AiFillInstagram/>
      </div>
    </div>
  );
}

export default Connects;
