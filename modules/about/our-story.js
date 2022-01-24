import { HeadComponent } from "../../components/head";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function OurStory() {
  return (
    <>
      <HeadComponent />
      <Header />
      <div
        className="section is-hero img1 on-dark is-subpage"
        style={{
          backgroundImage: "url('/images/aboutheader.jpg')",
        }}
      >
        <div className="container">
          <div className="col block-centered text-align-center lg-7 md-12">
            <h1 className="on-dark">About Us</h1>
          </div>
        </div>
      </div>

      <div className="section no-padding-bottom">
        <div className="container">
          <div className="col lg-6 sm-12">
            <div className="size-h2">
              A Modern African Corporate Law Practice
            </div>
          </div>
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-5 sm-12">
            <div className="text-medium">
              We are a subscription-based African corporate law practice
              committed to assisting our clients successfully navigate the
              continual legal, economic, and cultural shifts that can impact
              their businesses across Africa in a cost effective and predictable
              manner; with the aid of our technology platform
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col lg-12">
            <a href="#" className="position-relative w-inline-block w-lightbox">
              <img
                src="/images/ab.jpg"
                sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, 95vw"
                alt=""
              />
              <div className="iconfont is-video-play-btn position2">
                <em className="iconfont__no-italize"></em>
              </div>
              {/* <script type="application/json" className="w-json">{
  "items": [
    {
      "type": "video",
      "originalUrl": "https://www.youtube.com/watch?v=7OOVY7zXDvc&autoplay=1",
      "url": "https://www.youtube.com/watch?v=7OOVY7zXDvc&autoplay=1",
      "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F7OOVY7zXDvc%3Ffeature%3Doembed%26autoplay%3D1&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7OOVY7zXDvc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7OOVY7zXDvc%2Fhqdefault.jpg&args=autoplay%3D1&key=96f1f04c5f4143bcb0f2e68c87d65feb&autoplay=1&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
      "thumbnailUrl": "https://i.ytimg.com/vi/7OOVY7zXDvc/hqdefault.jpg",
      "width": 940,
      "height": 528
    },
    {
      "cdnUrl": "https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg",
      "width": 150,
      "height": 150,
      "fileName": "image-placeholder.svg",
      "origFileName": "image-placeholder.svg",
      "url": "https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg",
      "_id": "example_img",
      "type": "image",
      "fileSize": 2063
    }
  ]
}</script> */}
            </a>
          </div>
        </div>
      </div>

      <div className="section no-padding-bottom">
        <div className="container">
          <div className="col lg-5 alignself-center md-12">
            <h2>Our story</h2>
            <div className="text-medium margin-bottom">
              AVC is the brainchild is several young but experienced and
              tenacious African lawyers who are also serial entrepreneurs in
              their own right; who recognize the unfavorable nature of
              traditional attorney-client fee arrangements as applied startups
              and smaller, high growth and emerging businesses.
            </div>
            <div className="w-richtext">
              <p>
                The founders of AVC saw this problem as an opportunity to build
                proactive bespoke and cost predictable subscription packages
                that suit the most pressing legal needs of their all businesses
                across Africa.
              </p>
              <p>
                The founders of AVC seemed it fit to build a platform that
                streamlined the basic legal tasks of businesses, is equipped
                with document automation and management, and allows for
                effective and responsive communications between attorney and
                client.
              </p>
              <p>
                They also deemed it fit to depart from the traditional reactive
                relationship between business and legal by building subscription
                packages that identify readily address the most pressing legal
                needs of their clients’ businesses within the the framework of
                the traditional attorney retainer fee.
              </p>
            </div>
          </div>
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-6 md-12 order-first md-text-align-center">
            <img
              src="/images/b.jpg"
              sizes="(max-width: 479px) 90vw, (max-width: 692px) 93vw, (max-width: 991px) 644px, 45vw"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section no-padding-bottom has-bg-accent">
        <div className="container flexh-align-center">
          <div className="col no-margin-bottom lg-6 md-12 order-last">
            <img src="/images/c.png" alt="" />
          </div>
          <div className="col lg-1"></div>
          <div className="col no-margin-bottom lg-5 position-relative md-12">
            <div className="text-large weight-is-thin margin-bottom">
              Our value proposition is simple. For the cost of your regular
              monthly retainer fee, you can set up a safe, reliable digital
              legal department with us; complete with an assigned lawyer, at
              least ten (10) monthly hours of business consultation with your
              assigned lawyer; at least ten (10) essential business agreements;
              annual due diligence reports, your own company dashboard, 24/7
              access to all your important company documents, and real time
              updates for all new assigned tasks.
            </div>
            <div className="is-bold">E. Selasi Adika</div>
            <div className="text-small">Co-Founder, AVC</div>
            <div className="c-quote__marker">“</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
