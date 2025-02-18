import React from "react";
import { logo } from "../import";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className=" bg-gray-900 py-7">
      <div className="lg:px-40 lg:py-20 px-7 container mx-auto ">
        <div className="flex items-center gap-2 text-white">
          <img className="h-8" src={logo} alt="" />
          <h3 className="text-md">Sherpaverse LTD</h3>
        </div>

        <div className="text-white">
          <p className="text-sm pt-2">
            Plot 15, Orchid Rd. Off Chevron Toll Gate, Lekki Lagos
          </p>

          <p className="text-sm pt-2">Ways to reach us</p>
          <div className="flex items-center gap-2 text-sm pt-2">
            <FaWhatsapp size={20} />
            <p>09057559292 </p>
          </div>
          <div className="flex items-center gap-2 text-sm pt-2">
            <MdOutlineMail size={20} />
            <p>info@sherpaverse.com </p>
          </div>

          <div className="flex items-center gap-2 text-sm pt-2">
            <a
              target="_blank"
              href="https://web.facebook.com/profile.php?id=61555161683538"
            >
              <FaFacebook size={20} />
            </a>

            <a target="_blank" href="https://www.instagram.com/sherpaverseltd/">
              <FaInstagram size={20} />
            </a>
          </div>

        <iframe
        className="mt-10 w-fit"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.670288636124!2d3.538813173503606!3d6.436376624172727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7aacf663849%3A0xb0595cd55978a29b!2s15%20Van-Daniel's%20St%2C%20Orchid%20Rd%2C%20Eti-Osa%2C%20Lekki%20100011%2C%20Lagos!5e0!3m2!1sen!2sng!4v1739917369501!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
          <p className="text-center text-sm my-7">&copy; {year} Sherpaverse</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
