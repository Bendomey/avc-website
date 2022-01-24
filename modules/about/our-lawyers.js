import { Header } from "../../components/header";
import { HeadComponent } from "../../components/head";
import { Footer } from "../../components/footer";

export function OurLawyers() {
  return (
    <>
      <HeadComponent />
      <div
        className="section is-hero img1 on-dark is-subpage"
        style={{
          backgroundImage: "url('/images/team.jpg')",
        }}
      >
        <div className="container">
          <div className="col block-centered text-align-center lg-7 md-12">
            <h1 className="on-dark">Meet our team</h1>
          </div>
        </div>
      </div>
      <Header />

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
              Our lawyers are drawn from some of the world’s best law schools
              and undergraduate institutions and have extensive local experience
              and connections.
            </h2>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#1d2b36",
                fontFamily: "Sofia Pro",
              }}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              Our lawyers bring their international skills to bear on issues and
              matters affecting our clients with practicality and a personal
              touch that sets us apart. Our experienced and sophisticated yet
              highly responsive lawyers, in combination with our experience and
              collaborative work style, have been recognized by our clients and
              peers.
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
          <div className="col text-align-center lg-6 block-centered md-12">
            <div className="pre-title">Culture of excellence</div>
            <h2>Our Lawyers</h2>
          </div>
        </div>
        <div className="container">
          <div className="col lg-12">
            <div className="w-layout-grid c-team5">
              <div className="c-team5__card">
                <img
                  src="/images/lawyers/1.jpg"
                  alt=""
                  className="margin-bottom"
                />
                <div className="c-team5__name">E. Selasi Adika</div>
                <div className="c-team5__role">Co-founder</div>
              </div>
              <div className="c-team5__card">
                <img
                  src="/images/lawyers/2.jpg"
                  sizes="(max-width: 479px) 90vw, (max-width: 752px) 93vw, 700px"
                  alt=""
                  className="margin-bottom"
                />
                <div className="c-team5__name">Stephen Stroud</div>
                <div className="c-team5__role">Chief Financial officer</div>
              </div>
              <div className="c-team5__card">
                <img
                  src="/images/lawyers/3.jpg"
                  alt=""
                  className="margin-bottom"
                />
                <div className="c-team5__name">Olivia Happel</div>
                <div className="c-team5__role">chief operation officer</div>
              </div>
              <div className="c-team5__card">
                <img
                  src="/images/lawyers/4.png"
                  alt=""
                  className="margin-bottom"
                />
                <div className="c-team5__name">Peter McNeill</div>
                <div className="c-team5__role">FInancial strategist</div>
              </div>
              <div className="c-team5__card">
                <img
                  src="/images/lawyers/5.jpg"
                  alt=""
                  className="margin-bottom"
                />
                <div className="c-team5__name">Paul Fiorillo</div>
                <div className="c-team5__role">Brand manager</div>
              </div>
              <div className="c-team5__card">
                <img
                  src="/images/lawyers/6.png"
                  alt=""
                  className="margin-bottom"
                />
                <div className="c-team5__name">Douglas Gagnon</div>
                <div className="c-team5__role">Art director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
