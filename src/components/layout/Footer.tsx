import { Link } from "react-router-dom";
import { logoBase64 } from "../../assets/logoBase64";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoBase64} alt="AION - IMS Logo" className="h-8 w-auto object-contain" />
              <h3 className="text-lg font-bold text-white">AION - IMS</h3>
            </div>
            <p className="text-sm">
              Empowering future leaders through advanced education, innovative research, and exceptional placement opportunities.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link to="/placement" className="hover:text-white">Placement</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>MBA / BBA</li>
              <li>MCA / BCA</li>
              <li>M-Sc (DS)</li>
              <li>MHA / BHA</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>AION - IMS</li>
              <li>No 9, 1St Main Road, 3rd Cross,</li>
              <li>Byraweshwara Nagar, Laggere, Bengaluru,</li>
              <li>560058, Karnataka, India</li>
              <li>Email: career.aiontech@gmail.com</li>
              <li>Phone: +91 8050350011</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AION - IMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
