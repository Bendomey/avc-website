import { Footer } from "../../components/footer";
import { HeadComponent } from "../../components/head";
import { Header } from "../../components/header";

export function Pricing() {
  return (
    <>
      <HeadComponent />
      <div
        className="section is-hero img1 on-dark is-subpage"
        style={{
          backgroundImage: "url('/images/a1.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="col block-centered text-align-center lg-7 md-12">
            <h1 className="on-dark">Simple and transparent pricing</h1>
          </div>
        </div>
      </div>
      <Header />

      <div className="section">
        <div className="container">
          <div className="col block-centered text-align-center lg-6 md-12">
            <h2>
              Choose a subscription plan that suits the needs of your business
            </h2>
            <div className="text-medium low-text-contrast margin-bottom">
              Choose a plan that fits the needs of your business and work with
              your assigned lawyer to complete all tasks according to an agreed
              schedule
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col lg-12">
            <span style={{ color: "#B93D1B" }} className="slideToSee">
              *Slide to see full details
            </span>

            <div style={{ overflowX: "auto" }}>
              <table>
                <tr>
                  <th className="size-h3">Package</th>
                  <th className="size-h3">Starter</th>
                  <th className="size-h3">Growth</th>
                  <th className="size-h3">Growth Plus</th>
                </tr>
                <tr>
                  <td className="create-grid-space">Pricing</td>
                  <td>
                    <div className="c-pricing__description">
                      <div
                        className="c-pricing__price"
                        style={{ lineHeight: "6vh" }}
                      >
                        $8,000<span className="font-size-normal">/ year</span>
                        <br />
                        or $700<span className="font-size-normal">/ Month</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="c-pricing__description">
                      <div
                        className="c-pricing__price"
                        style={{ lineHeight: "6vh" }}
                      >
                        $11000<span className="font-size-normal">/ year</span>
                        <br />
                        or $1000{" "}
                        <span className="font-size-normal">/ Month</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">
                    A dedicated Lawyer-led legal team + <br /> account manager
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>

                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">
                    Free initial corporate records <br /> review + essential
                    legal <br /> documents audit backed by a final <br />{" "}
                    initial legal opinion.
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>

                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">Custom employee manual</td>
                  <td>
                    <div className="iconfont is-brand-color is-24px ">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px ">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>

                  <td>
                    <div className="weight-is-medium e">
                      Contact for Pricing
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">
                    Custom essential business
                    <br /> agreements
                  </td>
                  <td>10</td>
                  <td>20</td>
                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">Trademark registration*</td>
                  <td>1</td>
                  <td>3</td>
                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">Product certification*</td>
                  <td>1</td>
                  <td>3</td>
                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">Monthly Advisory Hours</td>
                  <td>8</td>
                  <td>20</td>
                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">
                    Access the AVC hiring document <br /> generation, corporate
                    records
                    <br /> management, project tracking, +<br /> collaboration
                    tools.
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>

                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">
                    Regulatory, tax + accounting
                    <br /> filing reminders
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>

                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
                <tr>
                  <td className="create-grid-space">
                    Annual due diligence report
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>
                  <td>
                    <div className="iconfont is-brand-color is-24px">
                      <em className="iconfont__no-italize"></em>
                    </div>
                  </td>

                  <td>
                    <div className="weight-is-medium">Contact for Pricing</div>
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <span style={{ color: "#B93D1B" }}>
              *Trademark + product certification filing fees are not included
            </span>
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
