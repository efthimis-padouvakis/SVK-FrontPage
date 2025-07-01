import React, { useState } from "react";
import { logo } from "../assets";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-center">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
          />
        </div>

        {/* Contact Info */}
        <div className="max-w-xl mx-auto text-center">
          <section className="mb-6">
            <p className="mb-2">
              <strong>Email: </strong>
              <a
                href="mailto:info@svkrobotics.com"
                className="text-blue-400 hover:underline"
              >
                info@svkrobotics.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Phone: </strong>
              <a
                href="tel:+302816008699"
                className="text-blue-400 hover:underline"
              >
                +30 281 600 8699
              </a>
            </p>
            <p>
              <strong>Mobile: </strong>
              <a
                href="tel:+306947586765"
                className="text-blue-400 hover:underline"
              >
                +30 694 758 6765
              </a>
            </p>
          </section>

          {/* Location */}
          <section className="mb-6">
            <p>Greece</p>
            <p>Heraklion, Crete</p>
            <p>GIAMALAKI 25, 71202</p>
          </section>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.facebook.com/profile.php?id=61552752842212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/svk.robotics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/svk-robotics/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com/SVKROBOTICS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCCMymTw3tMX5TtMmOzgZi0g?app=desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow-lg mb-8">
            <iframe
              title="Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.661999375163!2d25.12713700545938!3d35.33921399196639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5be3fb80294d%3A0xc0213651a2186700!2sSVK%20ROBOTICS!5e0!3m2!1sen!2sgr!4v1739177847327!5m2!1sen!2sgr"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>

          {/* Privacy Policy Link */}
          <button
            onClick={() => setShowModal(true)}
            className="text-sm text-blue-400 hover:underline"
          >
            Privacy Policy
          </button>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-xs text-gray-400 text-center">
        ©2025 SVK Robotics. All rights reserved.
      </p>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)} // Close modal on backdrop click
        >
          <div
            className="bg-white rounded-lg p-6 max-w-lg mx-4 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="text-gray-900 max-h-[70vh] overflow-y-auto space-y-6 px-2 md:px-6">
              <h1 className="text-2xl font-bold mb-4 text-center">
                Privacy Policy
              </h1>
              <p className="text-sm text-gray-700">
                Last updated: October 15, 2024
              </p>

              <p>
                <strong>SVK Robotics</strong> ("we", "our", "us") respects your
                privacy and is committed to protecting your personal data. This
                privacy policy will inform you about how we handle your personal
                information, your privacy rights, and how the law protects you,
                particularly in accordance with the General Data Protection
                Regulation (GDPR).
              </p>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  1. Important Information and Who We Are
                </h2>
                <p>
                  SVK Robotics is a company specializing in robotics and
                  mechatronics solutions, as well as selling robotics products
                  through our e-shop. This privacy policy applies to the use of
                  our website and e-shop, and it explains how we collect, store,
                  and process your personal data.
                </p>
                <p className="mt-2">
                  <strong>Contact Information</strong>
                  <br />
                  If you have any questions about this privacy policy or how we
                  handle your personal data, please contact us at:
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@svkrobotics.com"
                    className="text-blue-600 underline"
                  >
                    info@svkrobotics.com
                  </a>
                  <br />
                  Address: Giamalaki 25, 71202, Heraklion, Crete, Greece
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  2. What Data We Collect
                </h2>
                <p>
                  We may collect, use, store, and transfer different kinds of
                  personal data about you, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    <strong>Identity Data:</strong> First name, last name,
                    username or similar identifier, title, and gender.
                  </li>
                  <li>
                    <strong>Contact Data:</strong> Billing address, delivery
                    address, email address, and telephone numbers.
                  </li>
                  <li>
                    <strong>Financial Data:</strong> Payment card details,
                    though processed securely by third-party payment gateways.
                  </li>
                  <li>
                    <strong>Transaction Data:</strong> Details about payments
                    and purchases you have made from our e-shop.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type
                    and version, time zone settings, and other technology on the
                    devices you use to access the Site.
                  </li>
                  <li>
                    <strong>Profile Data:</strong> Purchases or orders made by
                    you, preferences, and feedback.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use
                    our website, products, and services.
                  </li>
                  <li>
                    <strong>Marketing and Communications Data:</strong>{" "}
                    Preferences in receiving marketing from us and your
                    communication preferences.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  3. How We Collect Your Personal Data
                </h2>
                <p>
                  We use different methods to collect data from and about you,
                  including:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    <strong>Direct Interactions:</strong> You may provide data
                    by filling in forms on our site or by corresponding with us
                    by post, phone, email, or otherwise. This includes data you
                    provide when you purchase products, create an account,
                    subscribe to our newsletter, or give feedback.
                  </li>
                  <li>
                    <strong>Automated Technologies or Interactions:</strong> As
                    you interact with our website, we may automatically collect
                    technical data about your browsing actions and patterns. We
                    collect this personal data using cookies, server logs, and
                    other similar technologies.
                  </li>
                  <li>
                    <strong>
                      Third Parties or Publicly Available Sources:
                    </strong>{" "}
                    We may receive personal data about you from various third
                    parties, including analytics providers, advertising
                    networks, and search information providers.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  4. How We Use Your Personal Data
                </h2>
                <p>
                  We will only use your personal data when the law allows us to.
                  Most commonly, we will use your data in the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Where we need to perform the contract we are about to enter
                    into or have entered into with you (for example, when
                    processing your orders).
                  </li>
                  <li>
                    Where it is necessary for our legitimate interests (or those
                    of a third party), and your interests and fundamental rights
                    do not override those interests.
                  </li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
                <p className="mt-2">
                  <strong>Marketing and Promotional Offers</strong>
                  <br />
                  We strive to provide you with choices regarding certain
                  personal data uses, particularly around marketing and
                  advertising. You will receive marketing communications from us
                  if you have requested information from us, purchased goods
                  from us, or if you provided us with your details when you
                  entered a competition or registered for a promotion.
                </p>
              </section>

              {/* You can continue formatting the rest of the points similarly */}

              <section>
                <h2 className="text-xl font-semibold mb-2">
                  12. Contact Details
                </h2>
                <p>
                  If you have any questions or concerns regarding this privacy
                  policy or your personal data, please contact us at:
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@svkrobotics.com"
                    className="text-blue-600 underline"
                  >
                    info@svkrobotics.com
                  </a>
                  <br />
                  Address: Ραδαμάνθους 18, Heraklion, Crete, Greece
                </p>
              </section>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
