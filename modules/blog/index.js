import { useQuery } from "@apollo/client";
import { Footer } from "../../components/footer";
import { HeadComponent } from "../../components/head";
import { Header } from "../../components/header";
import { BLOG_POSTS } from "../../services/graphql/queries";
import { PulseLoader } from "react-spinners";
import { Fragment } from "react";

export const truncate = (data, { length }) => {
  return data.length <= length ? data : data.substr(0, length) + "...";
};

export function Blog() {
  const { data, loading } = useQuery(BLOG_POSTS);
  return (
    <>
      <HeadComponent />

      <Header />
      <div
        className="section is-hero img1 on-dark is-subpage"
        style={{ backgroundImage: "url('images/blog.jpg')" }}
      >
        <div className="container">
          <div className="col block-centered text-align-center lg-7 md-12">
            <h1 className="on-dark">Blog articles</h1>
          </div>
        </div>
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20vh",
            marginBottom: "20vh",
          }}
        >
          <PulseLoader color={"#ED3A0A"} />
        </div>
      ) : (
        <>
          {data?.postsLength === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20vh",
                marginBottom: "20vh",
              }}
            >
              <h1>No Post Found</h1>
              <p>There are no blog posts right now. Come back later</p>
            </div>
          ) : (
            <>
              <div className="section">
                <div className="container is-wrapping">
                  {data?.posts?.map((post) => {
                    if (post.status === "Active") {
                      return (
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
                                href={`/blogs/${post.id}?tag=${post?.tag?.name}`}
                                className="c-gridpost__clickable style4 w-inline-block"
                              >
                                <div className="c-gridpost__text style2">
                                  <h3>
                                    {truncate(`${post?.title}`, {
                                      length: 55,
                                    }) || "Tag Name here"}
                                  </h3>
                                  <div className="flexh-align-center flexh-space-between xs-is-wrapping">
                                    <div className="flexh-align-center xs-margin-bottom">
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
                                      {new Date(post?.updatedAt).toDateString()}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </Fragment>
                      );
                    } else return null;
                  })}
                </div>
                {/* <div className="container">
              <div className="col lg-12">
                <div className="c-paging">
                  <div className="iconfont margin-right-small is-11px">
                    <em className="iconfont__no-italize"></em>
                  </div>
                  <div className="c-paging__number is-dark is-rounded on-dark">
                    1
                  </div>
                  <a href="#" className="c-paging__number">
                    2
                  </a>
                  <a href="#" className="c-paging__number">
                    3
                  </a>
                  <a href="#" className="c-paging__number">
                    4
                  </a>
                  <a href="#" className="c-paging__number">
                    5
                  </a>
                  <a href="#" className="c-paging__number">
                    6
                  </a>
                  <a href="#" className="c-paging__number">
                    7
                  </a>
                  <div className="c-paging__number">...</div>
                  <a href="#" className="c-paging__number">
                    99
                  </a>
                  <a href="#" className="iconfont margin-left-small is-11px">
                    <em className="iconfont__no-italize"></em>
                  </a>
                </div>
              </div>
            </div> */}
              </div>
            </>
          )}
        </>
      )}

      <Footer />
    </>
  );
}
