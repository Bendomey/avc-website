import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <header className="section-header position-absolute">
        <div className="container space-between align-middle">
          <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            className="navbar w-nav"
          >
            <div className="navbar-container align-middle w-container">
              <div className="col lg-3 sm-6 no-margin-bottom order-first no-padding-left col-logo xs-12 md-grow">
                <a href="/" className="brand on-dark w-nav-brand">
                  <Image
                    src="/images/avc.png"
                    className="logoTop"
                    layout="fixed"
                    width={70}
                    height={70}
                    alt="avc "
                  />
                </a>
              </div>
              <div className="col lg-8 no-margin-bottom position-absolute-md flexh-justify-center">
                <nav
                  role="navigation"
                  className="nav-menu w-nav-menu pad-on-small-screen"
                >
                  <div
                    data-hover="1"
                    data-delay="0"
                    data-w-id="cb96dc5f-319e-451a-0e75-919e706164ff"
                    className="nav-dropdown w-dropdown w-dropdown-about"
                  >
                    <div className="nav-link on-dark flex-horizontal w-dropdown-toggle">
                      <div>About Us</div>
                      <div className="dropdown-icon w-icon-dropdown-toggle"></div>
                    </div>
                    <nav className="dropdown-list w-dropdown-list">
                      <a
                        href="/about/our-story"
                        className="dropdown-link w-dropdown-link"
                      >
                        Our Story
                      </a>
                      <a
                        href="/about/our-lawyers"
                        className="dropdown-link w-dropdown-link"
                      >
                        Lawyers
                      </a>
                      <a
                        href="/about/supported-countries"
                        className="dropdown-link w-dropdown-link"
                      >
                        Countries
                      </a>
                    </nav>
                  </div>
                  <a
                    href="/legal-areas"
                    className="nav-link on-dark w-nav-link"
                  >
                    Legal Areas
                  </a>
                  <div
                    data-hover="1"
                    data-delay="0"
                    data-w-id="cb96dc5f-319e-451a-0e75-919e706164ff"
                    className="nav-dropdown w-dropdown w-dropdown-pricing"
                  >
                    <div className="nav-link on-dark flex-horizontal w-dropdown-toggle">
                      <div>Pricing</div>
                      <div className="dropdown-icon w-icon-dropdown-toggle"></div>
                    </div>
                    <nav className="dropdown-list w-dropdown-list ">
                      <a
                        href="/pricing"
                        className="dropdown-link w-dropdown-link"
                      >
                        Basic Subscription
                      </a>
                      <a
                        href="/pricing/extra"
                        className="dropdown-link w-dropdown-link"
                      >
                        Extra Services
                      </a>
                    </nav>
                  </div>

                  <a href="/blog" className="nav-link on-dark w-nav-link">
                    Blog
                  </a>
                  <a href="/faqs" className="nav-link on-dark w-nav-link">
                    FAQs
                  </a>
                </nav>
              </div>
              <div className="col lg-1 no-margin-bottom flexh-justify-end no-padding-right hidden-xs test">
                <a
                  href="https://app.africanventurecounsel.com/"
                  className="button-primary is-small order-last is-white w-inline-block"
                  style={{ border: "0px" }}
                >
                  <div className="button-primary-text">Login</div>
                </a>
              </div>
              <div className="menu-button w-nav-button">
                <div className="iconfont is-16px on-dark">
                  <em className="iconfont__no-italize"></em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
