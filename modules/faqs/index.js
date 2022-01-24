import { Footer } from "../../components/footer";
import { HeadComponent } from "../../components/head";
import { Header } from "../../components/header";

export function FAQs() {
  return (
    <>
      <HeadComponent />
      <Header />
      <div
        className="section is-hero img1 on-dark is-subpage bgpos2"
        style={{ backgroundImage: "url('images/faq.jpg')" }}
      >
        <div className="container">
          <div className="col block-centered text-align-center lg-7 md-12">
            <h1 className="on-dark">Frequently Asked Questions</h1>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container flex-horizontal">
          <div className="col lg-4 is-sticky md-12">
            <div className="c-toc">
              <div className="c-toc__item">
                <span className="has-brand-color">1. </span>About us
              </div>
              <div className="c-toc__item">
                <span className="has-brand-color">2. </span>The platform
              </div>
              <div className="c-toc__item">
                <span className="has-brand-color">3. </span>Subscriptions
              </div>
              <div className="c-toc__item">
                <span className="has-brand-color">4. </span>Managing your
                account
              </div>
              <div className="c-toc__item">
                <span className="has-brand-color">5. </span>Safety and security
              </div>
            </div>
            <div className="c-toc is-style">
              <div className="c-toc__item">
                <span className="c-toc_arrow">
                  <em className="iconfont__no-italize"></em>
                </span>{" "}
                <a href="#" style={{ color: "#ed390b" }}>
                  Licensing
                </a>
              </div>
              <div className="c-toc__item">
                <span className="c-toc_arrow">
                  <em className="iconfont__no-italize"></em>
                </span>{" "}
                <a href="#" style={{ color: "#ed390b" }}>
                  Term of use
                </a>
              </div>
              <div className="c-toc__item">
                <span className="c-toc_arrow">
                  <em className="iconfont__no-italize"></em>
                </span>{" "}
                <a href="#" style={{ color: "#ed390b" }}>
                  Refund policy
                </a>
              </div>
              <div className="c-toc__item">
                <span className="c-toc_arrow">
                  <em className="iconfont__no-italize"></em>
                </span>{" "}
                <a href="#" style={{ color: "#ed390b" }}>
                  Affiliate
                </a>
              </div>
              <div className="c-toc__item">
                <span className="c-toc_arrow">
                  <em className="iconfont__no-italize"></em>
                </span>{" "}
                <a href="#" style={{ color: "#ed390b" }}>
                  Terms and conditions
                </a>
              </div>
            </div>
            <div className="c-banner">
              <div className="size-h2 text-align-center margin-bottom on-dark">
                Still have questions?
              </div>
              <a
                data-w-id="e9f49e60-fd02-64ca-d03e-0d1a2ae76012"
                href="#"
                className="button-primary animated block-centered is-dark w-inline-block"
              >
                <div
                  style={{
                    transform:
                      "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 1,
                  }}
                  className="button-primary-text"
                >
                  contact us
                </div>
                <div
                  style={{
                    opacity: 0,
                    display: "block",
                    transform:
                      "translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="button-primary-text for-hover"
                >
                  let&#x27;s go <span className="fa margin-left"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="col lg-8 md-12">
            <div className="margin-bottom-double">
              <h2>1. Getting started</h2>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Do you work with non-profit organizations?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Your focus seems to be on business planning and strategy. Do
                    you also help clients with marketing or strategy execution?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Do you provide client references?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Can you make an equity investment in my business or provide
                    debt financing?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    I need help but have a very limited budget. Can you help me?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
            </div>
            <div className="margin-bottom-double">
              <h2>2. Installing HTML template</h2>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Do you work with non-profit organizations?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Your focus seems to be on business planning and strategy. Do
                    you also help clients with marketing or strategy execution?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Do you provide client references?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Can you make an equity investment in my business or provide
                    debt financing?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    I need help but have a very limited budget. Can you help me?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
            </div>
            <div className="margin-bottom-double">
              <h2>3. Using Superly</h2>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Do you work with non-profit organizations?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Your focus seems to be on business planning and strategy. Do
                    you also help clients with marketing or strategy execution?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Do you provide client references?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    Can you make an equity investment in my business or provide
                    debt financing?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
              <div data-delay="0" className="c-accordion2 w-dropdown">
                <div className="c-accordion2__toggle w-dropdown-toggle">
                  <div className="c-accordion__title">
                    I need help but have a very limited budget. Can you help me?
                  </div>
                  <div className="w-icon-dropdown-toggle"></div>
                </div>
                <nav className="c-accordion2__content w-dropdown-list">
                  <div className="text-block">
                    Sed posuere consectetur est at lobortis. Maecenas faucibus
                    mollis interdum. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam. Cras justo odio, dapibus ac facilisis in,
                    egestas eget quam.Sed posuere consectetur est at lobortis.
                    Maecenas faucibus mollis interdum. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam. Cras justo odio, dapibus
                    ac facilisis in, egestas eget quam.
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
