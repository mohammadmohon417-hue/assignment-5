import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-pink-500">Dev</span> Stack
            </h2>

            <p className="text-sm text-gray-500 mt-3">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-500 hover:text-black">
                <FiGithub />
              </a>

              <a href="#" className="text-gray-500 hover:text-black">
                <FiTwitter />
              </a>

              <a href="#" className="text-gray-500 hover:text-black">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">PRODUCT</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">COMPANY</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-500 hover:text-black"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">LEGAL</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="text-sm text-gray-500 hover:text-black">
              Privacy
            </a>

            <a href="#" className="text-sm text-gray-500 hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
