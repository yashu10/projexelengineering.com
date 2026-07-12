import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

export const metadata = {
  title: "Blog Details | Projexel Engineering",
  description: "Projexel Engineering delivers turnkey EPC, mechanical fabrication, and E&I solutions from Ahmedabad, Gujarat — trusted by JSW Steel, Amul Dairy, and Coca-Cola.",
  
};

export default function BlogdetailPage() {
  return (
    <>
      <Header />
      
    {/*  Navbar Placeholder  */}
    

    {/*  Page Header (Dynamic)  */}
    <header className="page-header pattern-bg" style={{"padding":"160px 0 100px","textAlign":"left"}}>
        <div className="container">
            <div id="articleHeader" className="fade-in-up is-visible">
                {/*  Back Link  */}
                <a href="/blog" style={{"color":"var(--clr-primary)","fontWeight":"600","textDecoration":"none","display":"inline-flex","alignItems":"center","gap":"0.5rem","marginBottom":"2rem","fontSize":"0.95rem"}}>
                    <i className="ri-arrow-left-line"></i> Back to Insights
                </a>
                <div style={{"display":"flex","gap":"1.5rem","alignItems":"center","marginBottom":"1.5rem"}}>
                    <span id="articleCategory" style={{"padding":"0.35rem 1rem","backgroundColor":"rgba(8, 65, 108, 0.1)","color":"var(--clr-primary)","borderRadius":"50px","fontSize":"0.8rem","fontWeight":"600","letterSpacing":"0.5px","textTransform":"uppercase"}}>Category</span>
                    <span id="articleReadTime" style={{"color":"var(--clr-text-muted)","fontSize":"0.85rem"}}><i className="ri-time-line"></i> 5 min read</span>
                </div>
                <h1 id="articleTitle" className="page-title" style={{"fontSize":"clamp(2rem, 4vw, 3.2rem)","lineHeight":"1.3","marginBottom":"2rem","maxWidth":"900px","textAlign":"left"}}>Blog Title</h1>
                
                <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
                    <div id="articleAuthorInitial" style={{"width":"48px","height":"48px","background":"var(--clr-primary)","color":"white","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontWeight":"bold","fontSize":"1.1rem","border":"2px solid white","boxShadow":"0 4px 10px rgba(0,0,0,0.1)"}}>
                        AP
                    </div>
                    <div>
                        <div id="articleAuthor" style={{"fontWeight":"600","color":"var(--clr-text)","fontSize":"1rem"}}>Author Name</div>
                        <div style={{"display":"flex","gap":"1rem","alignItems":"center"}}>
                            <span id="articleAuthorRole" style={{"fontSize":"0.8rem","color":"var(--clr-text-muted)"}}>Role</span>
                            <span style={{"color":"rgba(0,0,0,0.15)"}}>|</span>
                            <span id="articleDate" style={{"fontSize":"0.8rem","color":"var(--clr-text-muted)"}}>May 12, 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    {/*  Main Content Grid  */}
    <section className="blog-detail-section" style={{"backgroundColor":"var(--clr-bg)"}}>
        <div className="container">
            <div className="blog-detail-container">
                
                {/*  Main Article Column  */}
                <div className="article-column slide-in-left is-visible">
                    {/*  Featured Image  */}
                    <div style={{"width":"100%","height":"clamp(250px, 45vw, 450px)","borderRadius":"var(--radius-lg)","overflow":"hidden","marginBottom":"3rem","boxShadow":"0 20px 40px rgba(0,0,0,0.06)"}}>
                        <img id="articleImage" src="assets/images/service_turnkey.png" alt="Featured Image" style={{"width":"100%","height":"100%","objectFit":"cover"}} loading="lazy" />
                    </div>

                    {/*  Article Body Content  */}
                    <article id="articleBody" className="article-content">
                        {/*  Loaded dynamically  */}
                    </article>
                    
                    {/*  Share and Actions  */}
                    <div className="glass-panel" style={{"padding":"2rem","borderRadius":"var(--radius-md)","marginTop":"4rem","display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","gap":"1.5rem"}}>
                        <div style={{"fontWeight":"600","color":"var(--clr-text)"}}>Was this article helpful?</div>
                        <div style={{"display":"flex","gap":"1rem"}}>
                            <button className="btn btn-outline" style={{"padding":"0.5rem 1.2rem","fontSize":"0.9rem"}} ><i className="ri-thumb-up-line" style={{"marginRight":"0.5rem"}}></i> Helpful</button>
                            <button className="btn btn-primary" style={{"padding":"0.5rem 1.2rem","fontSize":"0.9rem"}} ><i className="ri-share-line" style={{"marginRight":"0.5rem"}}></i> Share Link</button>
                        </div>
                    </div>
                </div>

                {/*  Sidebar Column  */}
                <div className="sidebar-column slide-in-right is-visible">
                    
                    {/*  Search Widget  */}
                    <div className="glass-panel sidebar-widget">
                        <h4 style={{"fontFamily":"var(--font-heading)","fontSize":"1.2rem","marginBottom":"1.5rem","borderBottom":"2px solid rgba(8,65,108,0.1)","paddingBottom":"0.5rem"}}>Search Insights</h4>
                        <div style={{"position":"relative"}}>
                            <input type="text" id="sidebarSearch" placeholder="Type and enter..." style={{"width":"100%","padding":"0.75rem 1rem 0.75rem 2.2rem","borderRadius":"8px","border":"1px solid rgba(0,0,0,0.1)","outline":"none","transition":"var(--transition)","background":"white","fontFamily":"inherit","fontSize":"0.95rem"}} />
                            <span style={{"position":"absolute","left":"0.75rem","top":"50%","transform":"translateY(-50%)","color":"var(--clr-text-muted)","fontSize":"1rem"}}><i className="ri-search-line"></i></span>
                        </div>
                    </div>

                    {/*  Recent Posts Widget  */}
                    <div className="glass-panel sidebar-widget">
                        <h4 style={{"fontFamily":"var(--font-heading)","fontSize":"1.2rem","marginBottom":"1.5rem","borderBottom":"2px solid rgba(8,65,108,0.1)","paddingBottom":"0.5rem"}}>Recent Articles</h4>
                        <div id="recentPostsList">
                            {/*  Loaded dynamically  */}
                        </div>
                    </div>

                    {/*  Quick Contact / Brochure CTA Widget  */}
                    <div className="glass-panel sidebar-widget" style={{"background":"linear-gradient(135deg, var(--clr-primary), var(--clr-primary-hover))","color":"white","border":"none","textAlign":"center","padding":"3rem 2rem"}}>
                        <div style={{"fontSize":"3rem","marginBottom":"1rem"}}>🏗️</div>
                        <h3 style={{"color":"white","fontFamily":"var(--font-heading)","fontSize":"1.4rem","marginBottom":"1rem"}}>Need Turnkey Solutions?</h3>
                        <p style={{"color":"rgba(255,255,255,0.8)","fontSize":"0.95rem","marginBottom":"2rem"}}>Get in touch with our engineering experts to discuss your ambitious industrial project.</p>
                        <a href="/contact" className="btn btn-outline" style={{"background":"white","color":"var(--clr-primary)","fontWeight":"bold","border":"none","width":"100%"}}>Get a Consultation</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/*  Error Block (Hidden by default)  */}
    <section id="errorBlock" style={{"display":"none","padding":"120px 0","textAlign":"center","backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container" style={{"maxWidth":"600px"}}>
            <div style={{"fontSize":"4rem","marginBottom":"1.5rem"}}>⚠️</div>
            <h2 style={{"fontFamily":"var(--font-heading)","fontSize":"2.25rem","marginBottom":"1rem"}}>Article Not Found</h2>
            <p style={{"color":"var(--clr-text-muted)","fontSize":"1.1rem","marginBottom":"2.5rem"}}>The article you are trying to view does not exist or has been moved.</p>
            <a href="/blog" className="btn btn-primary btn-lg">Back to Insights</a>
        </div>
    </section>

    {/*  Footer Placeholder  */}
    

    {/*  Scripts  */}
    
    
    

      <Footer />
      <ClientScripts />
    </>
  );
}
