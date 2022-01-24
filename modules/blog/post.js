import { Footer } from "../../components/footer";
import { HeadComponent } from "../../components/head";
import { Header } from "../../components/header";

export function Post() {
  return (
    <>
      <HeadComponent />
      <Header />

      <div
        className="section is-hero img1 on-dark"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1000x600.png?text=IMAGE')",
        }}
      >
        <div className="container">
          <div className="col block-centered text-align-center lg-7 md-12">
            <div className="pre-title on-dark">
              <a href="#" className="c-categorylink__over-banner">
                Design
              </a>{" "}
              /{" "}
              <a href="#" className="c-categorylink__over-banner">
                Technology
              </a>
            </div>
            <h1 className="on-dark">
              Creativity is breaking the traditional norms
            </h1>
            <div className="text-small flexh-justify-center">
              <div className="flexh-align-center margin-right">
                <img
                  src="https://via.placeholder.com/1000x600.png?text=IMAGE"
                  width="56"
                  alt=""
                  className="is-rounded margin-right-small"
                />
                <div>by Johan Pirlo</div>
              </div>
              <div className="flexh-align-center">
                <div className="icomoon margin-right-small"></div>
                <div>7 June 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
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
                        Sollicitudin Consectetur Ullamcorper Risus Ligula
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
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-8 md-12">
            <div className="rich-text w-richtext">
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam venenatis vestibulum.{" "}
                <a href="#">Maecenas sed diam eget</a> risus varius blandit sit
                amet non magna. Integer posuere erat a ante venenatis dapibus
                posuere velit aliquet. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus
                eget urna mollis ornare vel eu leo. Sed posuere consectetur est
                at lobortis. Aenean lacinia bibendum nulla sed consectetur.
                Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
              <h3>01. What is creative implosion?</h3>
              <p>
                Donec id elit non mi porta gravida at eget metus. Nullam quis
                risus eget urna mollis ornare vel eu leo. Vestibulum id ligula
                porta felis euismod semper. Donec ullamcorper nulla non metus
                auctor fringilla. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia
                quam venenatis vestibulum. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa
                justo sit amet risus.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col lg-12">
            <div className="margin-bottom-double">
              <img
                src="https://via.placeholder.com/1000x600.png?text=IMAGE 1967w"
                sizes="100vw"
                alt=""
                className="c-article_image"
              />
              <div className="image-caption">Man standing next to a booth</div>
            </div>
          </div>
        </div>
        <div className="container">
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
          <div className="col lg-1 no-margin-bottom"></div>
          <div className="col lg-8 no-margin-bottom md-12">
            <div className="rich-text w-richtext">
              <p>
                Vestibulum id ligula porta felis euismod semper. Donec
                ullamcorper nulla non metus auctor fringilla:
              </p>
              <ul>
                <li>List item one</li>
                <li>List item number two</li>
                <li>Unordered list item number three</li>
                <li>And the last but not least, its number four</li>
              </ul>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Aenean eu leo quam.{" "}
              </p>
              <blockquote>
                Creativity is inventing, experimenting, growing, taking risks,
                breaking rules, making mistakes, and having fun
              </blockquote>
              <h3>02. Implement the impossible</h3>
              <p>
                Pellentesque ornare sem lacinia quam venenatis vestibulum.{" "}
                <a href="#">Maecenas sed diam eget</a> risus varius blandit sit
                amet non magna. Integer posuere erat a ante venenatis dapibus
                posuere velit aliquet. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.
              </p>
              <p>
                ‍<strong>Let&#x27;s recap the paragraph:</strong>
              </p>
              <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four and then..</li>
                <li>Five is the last number</li>
              </ol>
              <h3>03. Make mistakes and have fun</h3>
              <p>
                Donec id elit non mi porta gravida at eget metus. Nullam quis
                risus eget urna mollis ornare vel eu leo. Vestibulum id ligula
                porta felis euismod semper.{" "}
              </p>
              <figure
                style={{
                  paddingBottom: "56.206088992974244%",
                }}
                id="w-node-cadde97f3e96-f7f88089"
                className="w-richtext-align-fullwidth w-richtext-figure-type-video"
              >
                <div>
                  <iframe
                    allowFullScreen="true"
                    frameBorder="0"
                    scrolling="no"
                    src="https://www.youtube.com/embed/RyShHO2iqGk"
                  ></iframe>
                </div>
              </figure>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet risus. Aenean eu leo
                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
            </div>
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
        </div>
      </div>
      <Footer />
    </>
  );
}
