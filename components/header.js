document.write(`
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo-link">
                <img src="assets/images/logo.png" alt="Projexel Engineering" class="logo-img">
            </a>
            <div class="nav-links" id="nav-links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="projects.html">Projects</a>
                <a href="blog.html">Blog</a>
                <a href="assets/images/company-profile.pdf" target="_blank" style="display: inline-flex; align-items: center; gap: 0.35rem; font-weight: 600; color: var(--clr-primary) !important;"><i class="ri-file-pdf-line" style="font-size: 1.15rem; color: #ef4444; vertical-align: middle;"></i> Brochure</a>
                <a href="contact.html" class="btn btn-primary">Contact Us</a>
            </div>
            <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
    </nav>
`);
