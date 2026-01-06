import Link from "next/link";
import { useRouter } from "next/router";
import { FaSchool, FaHome, FaInfoCircle, FaBookOpen, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter(); // to highlight active link

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome className="me-1" /> },
    { href: "/about", label: "About", icon: <FaInfoCircle className="me-1" /> },
    { href: "/programs", label: "Programs", icon: <FaBookOpen className="me-1" /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope className="me-1" /> },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      {/* Brand */}
      <Link href="/" className="navbar-brand">
        <FaSchool className="me-2" /> Brilliant Unique Academy
      </Link>

      {/* Mobile toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${router.pathname === link.href ? "active-link" : ""}`}
              >
                {link.icon} {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
