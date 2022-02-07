import { Footer } from "../../components/footer";
import { BLOG_POST } from "../../services/graphql/queries";
import { HeadComponent } from "../../components/head";
import { Header } from "../../components/header";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { PostText } from "./post-text";

export function Post() {
  const { query } = useRouter();
  const { id, tag } = query;

  const { data } = useQuery(BLOG_POST, {
    variables: {
      id,
    },
  });

  return (
    <>
      <HeadComponent />
      <Header />

      <div
        className="section is-hero img1 on-dark"
        style={{
          position: "relative",
          backgroundImage: `url('${
            data?.post?.image ||
            "https://via.placeholder.com/1000x600.png?text=IMAGE"
          }')`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            height: "100%",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "10vh",
            }}
            className="col block-centered text-align-center lg-7 md-12"
          >
            <div className="pre-title on-dark">
              <a href="#" className="c-categorylink__over-banner">
                {tag}
              </a>
            </div>
            <h1 className="on-dark">{data?.post?.title}</h1>
            <div className="text-small flexh-justify-center">
              <div className="flexh-align-center margin-right">
                <img
                  src="https://via.placeholder.com/1000x600.png?text=IMAGE"
                  width="56"
                  alt=""
                  className="is-rounded margin-right-small"
                />
                <div>by {data?.post?.createdBy?.name || "Selasi Adika"}</div>
              </div>
              <div className="flexh-align-center">
                <div className="icomoon margin-right-small"></div>
                <div>{new Date(data?.post?.createdAt).toDateString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="col lg-3 md-12 md-order-last">
            {/* <div className="c-article__related"> */}
            <Image
              src={
                data?.post?.image ||
                "https://via.placeholder.com/1000x600.png?text=IMAGE"
              }
              width={300}
              height={300}
              alt={data?.post?.image}
            />
            {/* </div> */}
          </div>
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-8 md-12">
            <PostText html={data?.post?.details} />
          </div>
        </div>
        {/* <div className="container">
          <div className="col lg-12">

          <img
                src="https://via.placeholder.com/1000x600.png?text=IMAGE 1967w"
                sizes="100vw"
                alt=""
                className="c-article_image"
              />
              <div className="image-caption">Man standing next to a booth</div>
            </div>
          </div>
        </div> */}
        {/* <div className="container">
          <div className="col lg-3 md-12 md-order-last">
            <div className="c-article__related">
              <div className="margin-bottom-double text-small weight-is-black low-text-contrast">
                Related Articles
              </div>
              <div
                data-delay="3000"
                data-animation="slide"
                data-autoplay="1"
                data-duration="500"
                data-infinite="1"
                className="c-article_related-slider w-slider"
              >
                <div className="w-slider-mask">
                  <div className="w-slide">
                    <div>
                      <h4 className="margin-bottom">
                        Donec id elit non mi porta gravida at eget metus
                      </h4>
                      <div className="text-small low-text-contrast">
                        1 January 2020
                      </div>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div>
                      <h4 className="margin-bottom">
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam
                      </h4>
                      <div className="text-small low-text-contrast">
                        9 January 2020
                      </div>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div>
                      <h4 className="margin-bottom">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                        dolor auctor.{" "}
                      </h4>
                      <div className="text-small low-text-contrast">
                        21 February 2021
                      </div>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div>
                      <h4 className="margin-bottom">
                        Fusce Fermentum Pellentesque Egestas Commodo
                      </h4>
                      <div className="text-small low-text-contrast">
                        3 March 2020
                      </div>
                    </div>
                  </div>
                  <div className="w-slide">
                    <div>
                      <h4 className="margin-bottom">
                        Dapibus Pellentesque Ornare Ultricies
                      </h4>
                      <div className="text-small low-text-contrast">
                        31 November 2020
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
                <div className="c-article_related-slider-nav w-slider-nav w-slider-nav-invert w-round"></div>
              </div>
            </div>
          </div>
          <div className="col lg-8 no-margin-bottom md-12">
            <div className="c-article__author">
              <div className="container container-nested flexh-align-center">
                <div className="col lg-2 text-align-center no-margin-bottom-lg xs-12">
                  <img
                    src="https://via.placeholder.com/1000x600.png?text=IMAGE"
                    alt=""
                    className="margin-bottom is-rounded max-width-100px"
                  />
                  <div className="text-small text-align-center weight-is-black">
                    Johan Pirlo
                  </div>
                </div>
                <div className="col lg-10 no-margin-bottom xs-12">
                  <p className="text-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>  */}
      </div>
      <Footer />
    </>
  );
}
