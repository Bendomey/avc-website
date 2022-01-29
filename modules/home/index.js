import { HeadComponent } from "../../components/head";
import { Header } from "../../components/header";
import Image from "next/image";
import { Footer } from "../../components/footer";
import { Counter } from "./counter";
import { useQuery } from "@apollo/client";
import { BLOG_POSTS } from "../../services/graphql/queries";
import { PulseLoader } from "react-spinners";
import { Fragment } from "react";
import { truncate } from "../blog";

export function Home() {
  const { data, loading } = useQuery(BLOG_POSTS, {
    variables: { length: 2 },
  });

  return (
    <>
      <HeadComponent />
      <Header />
      <div
        className="section is-hero img1 on-dark"
        style={{
          background: "url(images/Header.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="col block-centered text-align-center lg-7 md-12">
            <h1
              className="on-dark"
              style={{ fontFamily: "Sofia Pro Semi" }}
              data-aos="fade-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              A Modern Legal Solution For African Businesses
            </h1>
            <br />

            <a
              data-w-id="6e550107-0405-598d-4176-9d9f46c2e6da"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              href="#"
              className="button-primary animated block-centered us-white w-inline-block"
              style={{
                background: "transparent",
                border: "1px solid #fff",
                color: "#fff",
              }}
            >
              <div
                style={{
                  // -webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // -moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // -ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  transform:
                    "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 1,
                }}
                className="button-primary-text"
              >
                get started
              </div>
              <div
                style={{
                  opacity: 0,
                  display: "block",
                  // -webkit-transform:translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // -moz-transform:translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  // -ms-transform:translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
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
      </div>
      <div className="section">
        <div className="container">
          <div className="col block-centered text-align-center lg-12 md-12 sm-12">
            <h2
              style={{
                fontSize: "1.4rem",
                color: "#1d2b36",
                fontFamily: "Sofia Pro",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              African Venture Counsel (“AVC”) is a subscription based corporate
              law practice built on modern technology to facilitate the
              provision of fast, transparent, and cost-predictable bespoke legal
              services to startups, high growth companies, and established
              businesses accross Africa.
            </h2>
          </div>
        </div>
      </div>
      <div className="section has-bg-accent position-relative">
        <div className="container">
          <div className="col lg-6 md-12 order-first no-margin-bottom" />
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-5 alignself-center md-12">
            <img
              src="/images/video_image.jpg"
              className="imageOnlyOnSmallDevices"
            />
            <div className="pre-title">Focus on Africa</div>
            <h2
              style={{
                fontFamily: "Sofia Pro Semi",
              }}
              className="headerCenter"
            >
              Streamline your business legal needs in Africa with us
            </h2>
            <div
              className="margin-bottom-double"
              style={{
                fontFamily: "Ubuntu sans-serif",
                color: "#586168",
              }}
            >
              We provide broad array of legal services across Africa from entity
              formation, employment & labor, regulatory compliance, intellectual
              property protection, commercial transactions, mergers and
              acquisitions, and fundraising.
              <br />
              <br />
              Our digital platform enables effective collaboration between with
              your management and professionals to deliver fast, transparent,
              and cost-predictable services to any business in Africa. On our
              platform you can
            </div>

            <div className="container " style={{ flexDirection: "column" }}>
              <div
                className="col lg-12 md-12 sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="flexh-align-center">
                  <div className="c-iconbox1__icon firstOneBiggie">
                    <Image
                      src="/images/law-01.svg"
                      width={70}
                      height={70}
                      alt=""
                      layout="fixed"
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: "Sofia Pro Semi",
                      }}
                    >
                      Simplify Legal Workflows
                    </h4>
                    <div
                      className="margin-bottom"
                      style={{
                        fontFamily: "Ubuntu sans-serif",
                        color: "#586168",
                      }}
                    >
                      Simplify legal workflows by streamlining your most common
                      legal work with assistance by your AVC lawyer.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col lg-12 md-12 sm-12"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="flexh-align-center">
                  <div className="c-iconbox1__icon">
                    <img
                      src="/images/law-02.svg"
                      className="imagesForList"
                      width="70"
                      alt=""
                    />
                  </div>
                  <div className="listMoveRight">
                    <h4 style={{ fontFamily: "Sofia Pro Semi" }}>
                      Manage Documents
                    </h4>
                    <div
                      className="margin-bottom"
                      style={{
                        fontFamily: "Ubuntu, sans-serif",
                        color: "#586168",
                      }}
                    >
                      Access & Manage all your Business Legal Documents &
                      Contracts
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col lg-12 md-12"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                <div className="flexh-align-center">
                  <div className="c-iconbox1__icon">
                    <img
                      src="/images/law-03.svg"
                      className="imagesForList"
                      width="65"
                      alt=""
                    />
                  </div>
                  <div className="listMoveRight">
                    <h4 style={{ fontFamily: "Sofia Pro Semi" }}>
                      Collaborate
                    </h4>
                    <div
                      className="margin-bottom"
                      style={{
                        fontFamily: "Ubuntu, sans-serif",
                        color: "#586168",
                      }}
                    >
                      Collaborate with your AVC lawyer in real time on urgent
                      matters.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="decoration-leftside img2 hidden-md"></div>
      </div>

      <div className="section position-relative">
        <div className="container">
          <div className="col block-centered text-align-center lg-6 md-12">
            <h2
              style={{ fontFamily: "Sofia Pro Semi" }}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              Here are some additional ways your business can benefit from our
              platform
            </h2>
          </div>
        </div>
        <div className="container position-relative md-margin-bottom">
          <div className="c-process__line hidden-md"></div>
          <div
            className="col lg-1-5 md-12 md-margin-bottom-quad"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="margin-bottom-double text-align-center">
              <div className="c-process__step-no">
                <img src="/images/Archive/benefits-01.svg" />
              </div>
            </div>
            <h4
              className="text-align-center"
              style={{ fontFamily: "Sofia Pro Semi", color: "#1d2b36" }}
            >
              Gain access to experience led business legal counsel anywhere in
              Africa
            </h4>
          </div>
          <div
            className="col lg-1-5 md-12 md-margin-bottom-quad"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="margin-bottom-double text-align-center">
              <div className="c-process__step-no">
                <img src="/images/Archive/benefits-04.svg" />
              </div>
            </div>
            <h4
              className="text-align-center"
              style={{ fontFamily: "Sofia Pro Semi", color: "#1d2b36" }}
            >
              Receive Automatic reminders on contract and regulatory deadlines{" "}
            </h4>
          </div>
          <div
            className="col lg-1-5 md-12 md-margin-bottom-quad"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="margin-bottom-double text-align-center">
              <div className="c-process__step-no">
                <img src="/images/Archive/benefits-02.svg" />
              </div>
            </div>
            <h4
              style={{ fontFamily: "Sofia Pro Semi", color: "#1d2b36" }}
              className="text-align-center"
            >
              Receive annual due diligence reports
            </h4>
          </div>
          <div
            className="col lg-1-5 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="margin-bottom-double text-align-center">
              <div className="c-process__step-no">
                <img src="/images/Archive/benefits-05.svg" />
              </div>
            </div>
            <h4
              className="text-align-center"
              style={{ fontFamily: "Sofia Pro Semi", color: "#1d2b36" }}
            >
              Cost predictability
            </h4>
          </div>

          <div
            className="col lg-1-5 md-12 md-margin-bottom-quad"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="margin-bottom-double text-align-center">
              <div className="c-process__step-no">
                <img src="/images/Archive/benefits-03.svg" />
              </div>
            </div>
            <h4
              className="text-align-center"
              style={{ fontFamily: "Sofia Pro Semi", color: "#1d2b36" }}
            >
              Gain access to a growing network of businesses, entrepreneurs and
              investors
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="col lg-12 flexh-justify-center">
            <a
              data-w-id="57ef55cb-981f-dc1c-a38d-0036a5e56222"
              href="#"
              className="button-primary animated is-small w-inline-block"
              style={{ backgroundColor: "#fff" }}
            >
              <div
                style={{
                  // -webkit-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                  transform:
                    "translate3d(0, 0PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 1,
                }}
                className="button-primary-text"
              >
                Learn more
              </div>
              <div
                style={{
                  opacity: 0,
                  display: "block",
                  // -webkit-transform:translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
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
      </div>

      <div className="section has-bg-accent position-relative">
        <div className="container">
          <div className="col lg-6 md-12 order-first no-margin-bottom"></div>
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-5 alignself-center md-12">
            <img
              src="/images/bigImage.jpg"
              className="imageOnlyOnSmallDevices"
            />
            <div className="pre-title">Facts in number</div>
            <h2 style={{ fontFamily: "Sofia Pro Semi" }}>
              A pioneer in business legal innovation in Africa
            </h2>
            <Counter />
          </div>
        </div>
        <div className="decoration-leftside img1 hidden-md"></div>
      </div>

      <div
        className="section"
        style={{
          marginBottom: "-10vh",
        }}
      >
        <div className="container">
          <div
            className="col block-centered text-align-center lg-6 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h2
              style={{
                fontFamily: "Sofia Pro Semi",
              }}
            >
              Popular Legal Areas
            </h2>
          </div>
        </div>
        <div className="container">
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/law-01.svg"
                width="64"
                alt=""
                className="xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3
                  style={{
                    fontFamily: "Sofia Pro Semi",
                  }}
                >
                  General Counsel Services
                </h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/law-04.svg"
                width="64"
                alt=""
                className="alignself-top xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3
                  style={{
                    fontFamily: "Sofia Pro Semi",
                  }}
                >
                  Business Entity Formation
                </h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/law-02.svg"
                width="64"
                alt=""
                className="alignself-top xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3 style={{ fontFamily: "Sofia Pro Semi" }}>
                  Commercial Agreements
                </h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/law-05.svg"
                width="64"
                alt=""
                className="xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3 style={{ fontFamily: "Sofia Pro Semi" }}>
                  Regulatory Compliance
                </h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/law-08.svg"
                width="64"
                alt=""
                className="alignself-top xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3 style={{ fontFamily: "Sofia Pro Semi" }}>
                  Trademarks & Patents
                </h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/law-09.svg"
                width="64"
                alt=""
                className="alignself-top xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3 style={{ fontFamily: "Sofia Pro Semi" }}>
                  Employment & Labor
                </h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/law-06.svg"
                width="64"
                alt=""
                className="xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3 style={{ fontFamily: "Sofia Pro Semi" }}>Franchising</h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/law-07.svg"
                width="64"
                alt=""
                className="alignself-top xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3 style={{ fontFamily: "Sofia Pro Semi" }}>Real Estate</h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
          <div
            className="col lg-4 md-12"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div className="c-iconbox">
              <img
                src="/images/Archive/capital.svg"
                width="64"
                alt=""
                className="alignself-top xs-margin-bottom"
              />
              <div className="margin-left xs-no-margin">
                <h3 style={{ fontFamily: "Sofia Pro Semi" }}>
                  Capital Markets
                </h3>
                <div>Learn More &rarr;</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10vh",
          }}
        >
          <PulseLoader color={"#ED3A0A"} />
        </div>
      ) : (
        <>
          {data?.postsLength > 0 ? (
            <>
              <div className="section">
                <div className="container">
                  <div className="col block-centered text-align-center lg-5 md-12">
                    <h2
                      style={{ fontFamily: "Sofia Pro Semi" }}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      Latest news from our blog
                    </h2>
                  </div>
                </div>
                <div className="container is-wide">
                  <div className="col lg-12">
                    <div
                      data-animation="slide"
                      data-easing="ease-out-expo"
                      data-duration="900"
                      data-infinite="1"
                      className="c-blogslider w-slider"
                    >
                      <div className="w-slider-mask">
                        <div className="c-blogslider__slide w-slide">
                          <div className="container">
                            {data?.posts?.map((post) => (
                              <Fragment key={post.id}>
                                <div className="col lg-6 md-12">
                                  <div className="c-gridpost__card style4">
                                    <a
                                      href={`/blogs/${post.id}?tag=${post?.tag?.name}`}
                                      style={{
                                        backgroundImage: `url('${post?.image}')`,
                                      }}
                                      className="c-gridpost__image-bg img4 w-inline-block"
                                    ></a>
                                    <div className="c-gridpost__category style4">
                                      <a
                                        href="#"
                                        className="c-gridpost__category-link"
                                      >
                                        {post?.tag?.name || "Tag Name here"}
                                      </a>
                                    </div>
                                    <a
                                      href="#"
                                      className="c-gridpost__clickable style4 w-inline-block"
                                    >
                                      <div className="c-w style2">
                                        <h3
                                          style={{
                                            fontFamily: "Sofia Pro Semi",
                                          }}
                                        >
                                          {truncate(`${post?.title}`, {
                                            length: 55,
                                          }) || "Tag Name here"}
                                        </h3>
                                        <div className="flexh-align-center flexh-space-between xs-is-wrapping">
                                          <div className="flexh-align-center xs-margin-bottom nameAndEmail">
                                            <img
                                              src="https://via.placeholder.com/1000x600.png?text=IMAGE"
                                              width="44"
                                              alt=""
                                              className="is-rounded margin-right-small"
                                            />
                                            <div className="text-small">
                                              {truncate(
                                                `${post?.createdBy?.fullname}`,
                                                {
                                                  length: 25,
                                                }
                                              ) || "Selasi Adika"}
                                            </div>
                                          </div>
                                          <div className="text-small low-text-contrast">
                                            {new Date(
                                              post?.updatedAt
                                            ).toDateString()}
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                        <div className="c-blogslider__slide w-slide">
                          <div className="container is-wrapping">
                            <div className="col lg-6 md-12">
                              <div className="c-gridpost__card style4">
                                <a
                                  href="#"
                                  className="c-gridpost__image-bg img3 w-inline-block"
                                ></a>
                                <div className="c-gridpost__category style4">
                                  <a
                                    href="#"
                                    className="c-gridpost__category-link"
                                  >
                                    Ghana
                                  </a>
                                </div>
                                <a
                                  href="#"
                                  className="c-gridpost__clickable style4 w-inline-block"
                                >
                                  <div className="c-w style2">
                                    <h3
                                      style={{ fontFamily: "Sofia Pro Semi" }}
                                    >
                                      Government Of Ghana Announces Startup Fund
                                    </h3>
                                    <div className="flexh-align-center flexh-space-between xs-is-wrapping">
                                      <div className="flexh-align-center xs-margin-bottom nameAndEmail">
                                        <img
                                          src="https://via.placeholder.com/1000x600.png?text=IMAGE"
                                          width="44"
                                          alt=""
                                          className="is-rounded margin-right-small"
                                        />
                                        <div className="text-small">
                                          James Ouya
                                        </div>
                                      </div>
                                      <div className="text-small low-text-contrast">
                                        07 June 2020
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div className="col lg-6 md-12">
                              <div className="c-gridpost__card style4">
                                <a
                                  href="#"
                                  className="c-gridpost__image-bg w-inline-block"
                                ></a>
                                <div className="c-gridpost__category style4">
                                  <a
                                    href="#"
                                    className="c-gridpost__category-link"
                                  >
                                    Design
                                  </a>{" "}
                                  /{" "}
                                  <a
                                    href="#"
                                    className="c-gridpost__category-link"
                                  >
                                    Technology
                                  </a>
                                </div>
                                <a
                                  href="#"
                                  className="c-gridpost__clickable style4 w-inline-block"
                                >
                                  <div className="c-w style2">
                                    <h3
                                      style={{ fontFamily: "Sofia Pro Semi" }}
                                    >
                                      OpenAI’s Hide-and-Seek the Systems
                                      Perspective
                                    </h3>
                                    <div className="flexh-align-center flexh-space-between xs-is-wrapping">
                                      <div className="flexh-align-center xs-margin-bottom nameAndEmail">
                                        <img
                                          src="https://via.placeholder.com/1000x600.png?text=IMAGE"
                                          width="44"
                                          alt=""
                                          className="is-rounded margin-right-small"
                                        />
                                        <div className="text-small">
                                          James Ouya
                                        </div>
                                      </div>
                                      <div className="text-small low-text-contrast">
                                        07 June 2020
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden w-slider-arrow-left">
                        <div className="w-icon-slider-left"></div>
                      </div>
                      <div className="hidden w-slider-arrow-right">
                        <div className="w-icon-slider-right"></div>
                      </div>
                      <div className="c-blogslider__nav w-slider-nav w-slider-nav-invert w-round"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      )}

      <div
        className="section has-bg-accent position-relative"
        style={{ marginBottom: 0 }}
      >
        <div className="container">
          <div className="col block-centered lg-8 md-12 sm-12">
            <div className="c-financial-finder text-align-center">
              <div className="pre-title">Ready to network?</div>
              <h2 className="text-align-center md-size-h3">
                Join our growing community
              </h2>
              <div className="text-align-center margin-bottom">
                Get the latest news in your email.
              </div>
              <div className="w-form">
                <form
                  id="email-form-2"
                  name="email-form-2"
                  data-name="Email Form 2"
                  className="c-horizontal-form"
                >
                  <input
                    type="text"
                    className="form-input-text no-margin-bottom-lg margin-left margin-right md-no-margin-lr w-input"
                    maxLength="256"
                    name="Zip-code"
                    data-name="Zip code"
                    placeholder="Email eg.johndoe@example.com"
                    id="Zip-code"
                    required=""
                  />
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    className="button-primary min-width-70 w-button"
                    style={{
                      color: "black",
                      border: "1px solid black",
                    }}
                  />
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="overall">
            <img src="/images/logos/logos-01.png" className="logosSize" />
            <img src="/images/logos/logos-02.png" className="logosSize" />
            <img src="/images/logos/logos-03.png" className="logosSize" />
            <img src="/images/logos/logos-04.png" className="logosSize" />
            <img src="/images/logos/logos-05.png" className="logosSize" />
            <img src="/images/logos/logos-06.png" className="logosSize" />
            <img src="/images/logos/logos-07.png" className="logosSize" />
            <img src="/images/logos/logos-08.png" className="logosSize" />
          </div>
        </div>
        <div className="container">
          <div className="overall">
            <img src="/images/logos/row-01.png" className="logosSize" />
            <img src="/images/logos/row-02.png" className="logosSize" />
            <img src="/images/logos/row-03.png" className="logosSize" />
            <img src="/images/logos/row-04.png" className="logosSize" />
            <img src="/images/logos/row-05.png" className="logosSize" />
            <img src="/images/logos/row-06.png" className="logosSize" />
            <img src="/images/logos/row-07.png" className="logosSize" />
            <img src="/images/logos/row-08.png" className="logosSize" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
