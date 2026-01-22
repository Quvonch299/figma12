import React from "react";
import { FaEnvelope, FaPinterest, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F0] text-gray-900 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Furniture */}
        <div>
          <h3 className="font-semibold mb-4">FURNITURE</h3>
          <ul className="space-y-2 text-sm">
            <li>Packages</li>
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Dining</li>
            <li>Home Office</li>
            <li>Decor</li>
            <li>Lighting</li>
            <li>Outdoor</li>
            <li>All Furniture</li>
            <li>Sample Sale</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li>How it Works</li>
            <li>About Feather</li>
            <li>Feather Furniture</li>
            <li>Reviews</li>
            <li>Feather for WeWork</li>
            <li>Feather for Business</li>
            <li>Feather for Staging</li>
            <li>Affiliate Program</li>
            <li>Careers</li>
            <li>In Your Area</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>FloorFound Terms</li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">FEATHER ON SOCIAL MEDIA</h3>
          <div className="flex gap-4 mb-6 text-gray-700">
            <FaEnvelope size={20} />
            <FaPinterest size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaLinkedin size={20} />
          </div>

          <h3 className="font-semibold mb-2 text-sm">JOIN OUR NEWSLETTER</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-b border-gray-400 py-1 focus:outline-none focus:border-black placeholder-gray-400 text-sm"
          />
        </div>
      </div>
    </footer>
  );
}
