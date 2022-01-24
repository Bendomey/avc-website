export function Footer() {
  return (
    <>
      <div
        className="section no-padding-top-bottom "
        style={{
          backgroundImage: 'url("/images/Header2.jpg")',
        }}
      >
        <div className="is-wide footerOrange">
          <div className="col lg-12 no-margin-bottom md-no-padding-left-right">
            <div className="c-application__cta">
              <div className="md-margin-bottom">
                <div className="size-h2 on-dark">
                  Didn’t find what you are looking for?
                </div>
              </div>
              <div>
                <a href="#" className="button-primary is-white w-inline-block">
                  <div className="button-primary-text">Learn more</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="section padding-bottom-16 is-dark">
        <div className="container flex-horizontal">
          <div className="col lg-2 flexv-space-between md-12 align-left logoBottom">
            <img src="/images/avc.png" alt="logo" />
          </div>
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-8 md-12">
            <div className="container container-nested is-wrapped">
              <div className="col lg-4 no-margin-bottom-lg md-12">
                <div
                  className="size-h4 margin-bottom on-dark"
                  style={{ fontFamily: "Sofia Pro Semi" }}
                >
                  Office
                </div>
                <div>19 Kofi Annan Street, Airport, Accra, Ghana</div>
              </div>
              <div className="col lg-4 md-12 no-margin-bottom">
                <div
                  className="size-h4 margin-bottom on-dark"
                  style={{ fontFamily: "Sofia Pro Semi" }}
                >
                  Let&#x27;s talk
                </div>
                <div>
                  <a href="tel:+23356143 0128" className="phone-footer">
                    +233 56 143 0128
                  </a>
                </div>
                <a
                  href="mailto:info@africanventurecounsel.com"
                  className="email-footer"
                >
                  info@africanventurecounsel.com
                </a>
                <a href="#" className="footer-nav-link on-dark w-inline-block">
                  <div>
                    <span
                      className="fa-brand-2 w24 fab fa-linkedin"
                      style={{ marginRight: "5px" }}
                    ></span>
                  </div>
                </a>
                <a href="#" className="footer-nav-link on-dark w-inline-block">
                  <div>
                    <span
                      className="fa-brand-2 w24 fab fa-instagram"
                      style={{ marginRight: "5px" }}
                    ></span>{" "}
                  </div>
                </a>
                <a href="#" className="footer-nav-link on-dark w-inline-block">
                  <div>
                    <span
                      className="fa-brand-2 w24 fab fa-facebook"
                      style={{ marginRight: "5px" }}
                    ></span>{" "}
                  </div>
                </a>
              </div>
              <div className="col lg-3 no-margin-bottom-lg md-12">
                <div
                  className="size-h4 margin-bottom on-dark"
                  style={{ fontFamily: "Sofia Pro Semi" }}
                >
                  Extra Links
                </div>
                <a href="about.html" className="footer-nav-link on-dark">
                  About Us
                </a>
                <a href="#" className="footer-nav-link on-dark">
                  FAQs
                </a>
                <a href="blog.html" className="footer-nav-link on-dark">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col lg-12 margin-bottom">
            <div className="hr on-dark opacity"></div>
          </div>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div className="col lg-6 no-margin-bottom md-12 md-order-last">
            <div className="low-text-contrast text-small flexh-space-between md-flex-vertical">
              <div
                className="md-order-last"
                style={{ fontFamily: "Sofia Pro Semi" }}
              >
                ©{" "}
                <span
                  className="year"
                  style={{ fontFamily: "Sofia Pro Semi" }}
                ></span>{" "}
                African Venture Counsel{" "}
              </div>
              <a
                href="#"
                className="footer-bottom-link on-dark"
                style={{ fontFamily: "Sofia Pro Semi" }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="footer-bottom-link on-dark"
                style={{ fontFamily: "Sofia Pro Semi" }}
              >
                Need Help?
              </a>
            </div>
          </div>
          <div className="col lg-6 no-margin-bottom md-12">
            <div
              className="w100 text-align-right footer-bottom md-text-align-left"
              style={{ fontFamily: "Sofia Pro Semi" }}
            >
              Powered by Artlasplus
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
