import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

export const metadata = {
  title: "Project Portfolio | Projexel Engineering - Successful EPC Projects",
  description: "View our diverse portfolio of successfully delivered EPC and industrial projects for major clients like Amul Dairy, Coca-Cola, and JSW Steel.",
  keywords: "EPC projects, industrial projects, mechanical fabrication portfolio, E&I projects, successful engineering projects, Projexel case studies",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      
    {/*  Navbar Placeholder  */}
    

    {/*  Page Header  */}
    <header className="page-header pattern-bg">
        <div className="container">
            <h1 className="page-title fade-in-up">PROJECT <span className="text-gradient">PORTFOLIO</span></h1>
            <p className="page-subtitle fade-in-up delay-1" style={{"fontFamily":"var(--font-heading)","fontWeight":"700","color":"var(--clr-primary)","fontSize":"1.25rem"}}>Executing Excellence across Water, Mechanical, and E&I Infrastructure.</p>
        </div>
    </header>

    {/*  Projects Section  */}
    <section className="projects-page-section">
        <div className="container">

            {/*  Category Filtering  */}
            <div className="portfolio-filter fade-in-up delay-2">
                <button className="filter-btn active" data-filter="all">All Sectors</button>
                <button className="filter-btn" data-filter="water">Water & Environmental</button>
                <button className="filter-btn" data-filter="mechanical">Mechanical & Structure</button>
                <button className="filter-btn" data-filter="electrical">Electrical & Instrumentation</button>
            </div>

            <div className="portfolio-grid" id="portfolio-grid">

                {/*  Project 1  */}
                <div className="portfolio-card fade-in-up" data-category="water">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Sr. 1 Gujrat gardian ma.jpeg')"}}></div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">1. Gujarat Guardian Limited</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Ankleshwer, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Ankleshwer, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Mechanical Equipment Erection, Piping & Fabrication</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 2  */}
                <div className="portfolio-card fade-in-up" data-category="mechanical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/2. JSW Steel Limited.jpeg')"}}></div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">2. JSW Steel Limited</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Bellary, Karnataka</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Thermax Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Tank Fabrication, Painting, Shifting and Erection Work</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 3  */}
                <div className="portfolio-card fade-in-up" data-category="mechanical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Sr . 3 Jsw.jpeg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">3. JSW Steel Ltd.</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Bellary, Karnataka</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Thermax Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Mechanical Equipment Erection, Piping, Fabrication and
                                    Electrical Works</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 4  */}
                <div className="portfolio-card fade-in-up" data-category="electrical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Atul Valsad, Gujarat.png')"}}></div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">4. Atul Ltd. (Valsad)</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Valsad, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Praj Industries Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Electrical Power Distribution, Instrumentation & Control
                                    System</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 5  */}
                <div className="portfolio-card fade-in-up" data-category="electrical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Atul Ltd. Electrical Power Distribution, Instrumentation & Control System.jpg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">5. Atul Ltd.</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Valsad, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Arvind Envisol Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Electrical Power Distribution, Instrumentation & Control
                                    System</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 6  */}
                <div className="portfolio-card fade-in-up" data-category="mechanical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Sr no. 6 Arvind ATFD.jpeg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">6. Arvind Mill Ltd</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Santej, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Arvind Envisol Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Fabrication of ATFD Structure & Erection of ATFD with Piping
                                    and Electrical Works</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 7  */}
                <div className="portfolio-card fade-in-up" data-category="electrical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Sr no. 7 HCCB.jpeg')"}}></div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">7. HCCB Ltd. – Coca Cola</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Sanand, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Praj Industries Ltd</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Electrical Power Distribution, Instrumentation & Control
                                    System</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 8  */}
                <div className="portfolio-card fade-in-up" data-category="mechanical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Sr no 8 adani Wilmar.jpeg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">8. Adani Wilmar Ltd.</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Neemuch, Madhya Pradesh</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Arvind Envisol Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Mechanical Equipment Erection, Piping, Fabrication and
                                    Electrical Works</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 9  */}
                <div className="portfolio-card fade-in-up" data-category="water">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Willowood Industries Ltd.jpg')"}}></div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">9. Willowood Industries Ltd</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Dahej, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Praj Industries Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Mechanical Equipment Erection, Piping, Fabrication and
                                    Electrical Power Distribution, Instrumentation & Control System & Fabrication of
                                    Piping & Electrical Support Work</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 10  */}
                <div className="portfolio-card fade-in-up" data-category="electrical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Suzuki Motor Gujarat Pvt Ltd Electrical Power Distribution, Instrumentation & Control System.jpg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">10. Suzuki Motor Gujarat Pvt Ltd</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Bahucharaji, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Toshiba Water Ltd</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Electrical Power Distribution, Instrumentation & Control
                                    System</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 11  */}
                <div className="portfolio-card fade-in-up" data-category="mechanical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Sr no.11 MRF.jpeg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">11. MRF Tyre</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Pondicherry</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Mazda Ltd.</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Supply, Fabrication & Erection of PEB Structure for MEE
                                    Plant</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 12  */}
                <div className="portfolio-card fade-in-up" data-category="mechanical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Amul Dairy Mechanical Equipment Erection, Piping & Fabrication.jpg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">12. Amul Dairy</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Anand, Gujarat</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Amul</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Mechanical Equipment Erection, Piping & Fabrication</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 13  */}
                <div className="portfolio-card fade-in-up" data-category="electrical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Sr no.13 Amul Electricals.jpeg')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">13. Amul Dairy</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Anand</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Amul</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Electrical Power Distribution, Instrumentation & Control
                                    System</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Project 14  */}
                <div className="portfolio-card fade-in-up" data-category="electrical">
                    <div className="portfolio-img-wrapper">
                        <div className="portfolio-img"
                            style={{"backgroundImage":"url('assets/images/Project/Deepak Fertilizer Electrical Power Distribution, Instrumentation & Control System.webp')"}}>
                        </div>
                    </div>
                    <div className="portfolio-content">
                        <div className="client-name">14. Deepak Fertilizer</div>
                        <div className="spec-grid">
                            <div className="spec-row">
                                <span className="spec-label">📍 Location:</span>
                                <span className="spec-value">Dahej</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">🏢 Company/EPC:</span>
                                <span className="spec-value">Praj Industries Ltd</span>
                            </div>
                            <div className="spec-row">
                                <span className="spec-label">Work Description:</span>
                                <span className="spec-value">Electrical Power Distribution, Instrumentation & Control
                                    System</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/*  Footer Placeholder  */}
    

    

      <Footer />
      <ClientScripts />
    </>
  );
}
