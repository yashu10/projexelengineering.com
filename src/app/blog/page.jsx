import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

export const metadata = {
  title: "Engineering & EPC Blog | Insights from Projexel Engineering",
  description: "Read the latest insights, industry trends, and updates on Turnkey EPC, mechanical fabrication, and E&I solutions from the experts at Projexel Engineering.",
  keywords: "EPC blog, engineering blog, mechanical fabrication insights, E&I trends, industrial engineering news",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      
    {/*  Navbar Placeholder  */}
    

    {/*  Page Header  */}
    <header className="page-header pattern-bg">
        <div className="container">
            <h1 className="page-title fade-in-up is-visible">LATEST <span className="text-gradient">INSIGHTS</span></h1>
            <p className="page-subtitle fade-in-up delay-1 is-visible">Stay updated with industrial engineering trends, technological innovations, and company achievements.</p>
        </div>
    </header>

    {/*  Blog Section  */}
    <section className="blog-section" style={{"padding":"80px 0","backgroundColor":"var(--clr-surface-light)"}}>
        <div className="container">
            
            {/*  Controls (Search & Filters)  */}
            <div className="glass-panel fade-in-up is-visible" style={{"padding":"2rem","borderRadius":"var(--radius-md)","marginBottom":"4rem","display":"flex","flexWrap":"wrap","gap":"1.5rem","justifyContent":"space-between","alignItems":"center"}}>
                
                {/*  Category Filters  */}
                <div className="portfolio-filter" style={{"marginBottom":"0","paddingTop":"0","display":"flex","gap":"1rem","flexWrap":"wrap"}}>
                    <button className="filter-btn active" data-category="all">All Articles</button>
                    <button className="filter-btn" data-category="Industrial Trends">Industrial Trends</button>
                    <button className="filter-btn" data-category="Technology">Technology</button>
                    <button className="filter-btn" data-category="Company News">Company News</button>
                </div>

                {/*  Search Input  */}
                <div style={{"position":"relative","width":"100%","maxWidth":"320px"}}>
                    <input type="text" id="blogSearch" placeholder="Search articles..." style={{"width":"100%","padding":"0.75rem 1rem 0.75rem 2.5rem","borderRadius":"50px","border":"1px solid rgba(0,0,0,0.1)","outline":"none","transition":"var(--transition)","background":"white","fontFamily":"inherit","fontSize":"0.95rem"}} />
                    <span style={{"position":"absolute","left":"1rem","top":"50%","transform":"translateY(-50%)","color":"var(--clr-text-muted)","fontSize":"1.1rem"}}><i className="ri-search-line"></i></span>
                </div>
            </div>

            {/*  Blog Grid  */}
            <div id="blogGrid" className="portfolio-grid" style={{"gridTemplateColumns":"repeat(auto-fit, minmax(320px, 1fr))","gap":"2.5rem"}}>
                {/*  Blog cards rendered dynamically via JS  */}
            </div>

            {/*  Empty State  */}
            <div id="noResults" style={{"display":"none","textAlign":"center","padding":"4rem 2rem"}}>
                <div style={{"fontSize":"3rem","marginBottom":"1.5rem"}}>🔍</div>
                <h3 style={{"fontFamily":"var(--font-heading)","fontSize":"1.5rem","marginBottom":"0.5rem"}}>No Articles Found</h3>
                <p style={{"color":"var(--clr-text-muted)"}}>Try adjusting your filters or search keywords.</p>
            </div>

        </div>
    </section>

    {/*  Footer Placeholder  */}
    

    {/*  Scripts  */}
    
    
    

      <Footer />
      <ClientScripts />
    </>
  );
}
