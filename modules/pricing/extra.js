import { Footer } from "../../components/footer";
import { HeadComponent } from "../../components/head";
import { Header } from "../../components/header";

export function ExtraServices() {
  return (
    <>
      <HeadComponent />

      <div
        className="section is-hero img1 on-dark is-subpage"
        style={{ backgroundImage: "url('/images/a1.jpg')" }}
      >
        <div className="container">
          <div className="col block-centered text-align-center lg-7 md-12">
            <h1 className="on-dark">Extra Services</h1>
          </div>
        </div>
      </div>
      <Header />

      <div className="section has-bg-accent">
        <div className="container">
          <div className="col block-centered text-align-center lg-12 md-12 sm-12">
            <p
              style={{
                fontSize: "1.4rem",
                color: "#1d2b36",
                fontFamily: "Sofia Pro",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              For companies entering hyper-growth, you need fast and efficient
              legal services beyond the scope of the basic subscription plans;
              our loyalty based discount programs offer significant percentage
              based fees reduction for specific custom corporate legal tasks.
            </p>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#1d2b36",
                fontFamily: "Sofia Pro",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              Our approach is generally to have each client relationship managed
              by one lead lawyer, who then becomes familiar with the{" "}
              {"client's"}
              operations, objectives, and key decision-makers.
            </p>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#1d2b36",
                fontFamily: "Sofia Pro",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              We strongly believe a thorough understanding of each {"client's"}
              business is at the core of providing useful, effective legal
              advice.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="col lg-6 md-12 block-centered text-align-center">
            <h2>How it Works</h2>
          </div>
        </div>
        <div className="container is-wrapping">
          <div className="col lg-6 sm-12">
            <div className="flexh-align-top">
              <img
                src="/images/process-01.svg"
                width="64"
                alt=""
                className="margin-right"
              />
              <div>
                <h4>1. Log into your subscription AVC account</h4>
                <div className="margin-bottom">
                  Log into your subscription AVC account
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-6 sm-12">
            <div className="flexh-align-top">
              <img
                src="/images/process-02.svg"
                width="64"
                alt=""
                className="margin-right"
              />
              <div>
                <h4>2. Post your job request</h4>
                <div className="margin-bottom">
                  Post your job request through the AVC client dashboard and
                  send automatic notification.
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-6 sm-12">
            <div className="flexh-align-top">
              <img
                src="/images/process-03.svg"
                width="64"
                alt=""
                className="margin-right"
              />
              <div>
                <h4>
                  3. Our system notifies your AVC account manager and Lawyer led
                  legal team
                </h4>
                <div className="margin-bottom">
                  Our system notifies your AVC account manager and Lawyer led
                  legal team of your job post.
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-6 sm-12">
            <div className="flexh-align-top">
              <img
                src="/images/process-04.svg"
                width="64"
                alt=""
                className="margin-right"
              />
              <div>
                <h4>
                  4. Enter into an discounted fee agreement for the task
                  involved
                </h4>
                <div className="margin-bottom">
                  Once you are satisfied with the feedback from your AVC Lawyer;
                  you enter into an agreement for the agreed applicable
                  discounted fee. applicable.
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-6 sm-12">
            <div className="flexh-align-top">
              <img
                src="/images/process-05.svg"
                width="64"
                alt=""
                className="margin-right"
              />
              <div>
                <h4>5. Pay fees into escrow</h4>
                <div className="margin-bottom">
                  All fees for services are paid into a digital escrow account
                  that is accessible on your dashboard. The account may be drawn
                  down by the lawyer as the work progresses based on agreement.
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-6 sm-12">
            <div className="flexh-align-top">
              <img
                src="/images/process-06.svg"
                width="64"
                alt=""
                className="margin-right"
              />
              <div>
                <h4>6. Delivery of work-product</h4>
                <div className="margin-bottom">
                  Once your job is complete, it is sent to you securely through
                  our internal messaging system.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section no-padding-top-bottom">
        <div className="container legalFeesCenter">
          <div className="col lg-5 alignself-center md-12">
            <div className="pre-title">We&#x27;re happy to help</div>
            <h2>Are you ready to start saving on legal fees? </h2>
            <a
              data-w-id="e73078c0-9038-5aaf-1f8d-c6964300f545"
              href="contact.html"
              className="button-primary animated is-small w-inline-block legalFeesCenterBtn"
            >
              <div
                style={{
                  transform:
                    "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 1,
                }}
                className="button-primary-text"
              >
                Join Now
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
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-6 md-12 no-margin-bottom text-align-center">
            <img src="/images/help.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="section has-bg-accent">
        <div className="container">
          <div className="col block-centered text-align-center lg-6 md-12">
            <h2>FAQ</h2>
          </div>
        </div>
        <div className="container is-narrow">
          <div className="col lg-6 sm-12">
            <div className="c-accordion1 margin-bottom">
              <a
                data-w-id="0234ef41-ae2b-3d95-633d-2600f585318c"
                href="#"
                className="c-accordion1__head w-inline-block"
              >
                <h4 className="no-margin-bottom">
                  What is the difference between Superly and a CMS?
                </h4>
                <div className="fa accordion-chevron"></div>
              </a>
              <div style={{ height: "0px" }} className="c-accordion1__content">
                <div className="c-accordion__inner">
                  <div>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
            </div>
            <div className="c-accordion1 margin-bottom">
              <a
                data-w-id="0234ef41-ae2b-3d95-633d-2600f5853196"
                href="#"
                className="c-accordion1__head w-inline-block"
              >
                <h4 className="no-margin-bottom">
                  My content model includes a field called ‘Author,’ why is it
                  not searchable?
                </h4>
                <div className="fa accordion-chevron"></div>
              </a>
              <div style={{ height: "0px" }} className="c-accordion1__content">
                <div className="c-accordion__inner">
                  <div>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
            </div>
            <div className="c-accordion1 margin-bottom">
              <a
                data-w-id="0234ef41-ae2b-3d95-633d-2600f58531a0"
                href="#"
                className="c-accordion1__head w-inline-block"
              >
                <h4 className="no-margin-bottom">
                  Is the single sign-on feature available for all customers?
                </h4>
                <div className="fa accordion-chevron"></div>
              </a>
              <div style={{ height: "0px" }} className="c-accordion1__content">
                <div className="c-accordion__inner">
                  <div>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
            </div>
            <div className="c-accordion1 margin-bottom">
              <a
                data-w-id="0234ef41-ae2b-3d95-633d-2600f58531aa"
                href="#"
                className="c-accordion1__head w-inline-block"
              >
                <h4 className="no-margin-bottom">
                  Why Personal Access Tokens?
                </h4>
                <div className="fa accordion-chevron"></div>
              </a>
              <div style={{ height: "0px" }} className="c-accordion1__content">
                <div className="c-accordion__inner">
                  <div>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col lg-6 sm-12">
            <div className="c-accordion1 margin-bottom">
              <a
                data-w-id="4bcf526e-4788-8565-ac83-6b2ab36cf19d"
                href="#"
                className="c-accordion1__head w-inline-block"
              >
                <h4 className="no-margin-bottom">
                  What is the difference between roles within organizations and
                  spaces?
                </h4>
                <div className="fa accordion-chevron"></div>
              </a>
              <div style={{ height: "0px" }} className="c-accordion1__content">
                <div className="c-accordion__inner">
                  <div>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
            </div>
            <div className="c-accordion1 margin-bottom">
              <a
                data-w-id="4bcf526e-4788-8565-ac83-6b2ab36cf1a7"
                href="#"
                className="c-accordion1__head w-inline-block"
              >
                <h4 className="no-margin-bottom">
                  What entities can be copied to a space environment?
                </h4>
                <div className="fa accordion-chevron"></div>
              </a>
              <div style={{ height: "0px" }} className="c-accordion1__content">
                <div className="c-accordion__inner">
                  <div>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
            </div>
            <div className="c-accordion1 margin-bottom">
              <a
                data-w-id="4bcf526e-4788-8565-ac83-6b2ab36cf1b1"
                href="#"
                className="c-accordion1__head w-inline-block"
              >
                <h4 className="no-margin-bottom">
                  What Identity Providers (IdP) does Superly support?
                </h4>
                <div className="fa accordion-chevron"></div>
              </a>
              <div style={{ height: "0px" }} className="c-accordion1__content">
                <div className="c-accordion__inner">
                  <div>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
            </div>
            <div className="c-accordion1 margin-bottom">
              <a
                data-w-id="4bcf526e-4788-8565-ac83-6b2ab36cf1bb"
                href="#"
                className="c-accordion1__head w-inline-block"
              >
                <h4 className="no-margin-bottom">
                  What are the IP ranges for webhook calls?
                </h4>
                <div className="fa accordion-chevron"></div>
              </a>
              <div style={{ height: "0px" }} className="c-accordion1__content">
                <div className="c-accordion__inner">
                  <div>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
