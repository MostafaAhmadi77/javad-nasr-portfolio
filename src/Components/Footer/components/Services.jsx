
import { Link } from "react-router";
import { dataServices } from "../../../data/data";

function Services() {
  return (
    <div className="flex flex-col items-center justify-center md:items-start">
      <span className="text-primary-orange">SERVICES</span>
      <ul className="flex flex-col items-center text-[0.9rem] md:items-start">
        {dataServices.map((service) => (
          <li key={service.id}>
            <Link to="/services" className="hover:text-primary-orange">
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
