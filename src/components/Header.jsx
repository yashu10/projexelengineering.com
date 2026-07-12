import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
        <div className="header-branding">
            <div className="branding-container">
                <Link href="/" className="logo-link">
                    <img src="assets/images/logo.png" alt="Projexel Engineering Logo" className="header-logo" />
                </Link>
                <p className="company-tagline">Where Engineering Meets Execution, with Precision</p>
            </div>
        </div>
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <div className="nav-links" id="nav-links">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact Us</Link>
                </div>
                <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    </header>
  );
}
