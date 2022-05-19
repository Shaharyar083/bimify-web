import React from "react";
import "./blog.scss";
import logo from "../../assets/blog images/site-logo.png";
import tower from "../../assets/blog images/tower.jpeg";
import collection from "../../assets/blog images/collection-1.jpg";
import plug from "../../assets/blog images/plug.jpeg";
import { Parallax } from "react-parallax";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
});

const Blog = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="blog-page">
        <div className="blog_hero">
          <div className="blog_main">
            <div className="blog_divider">
              <div className="blog_text">
                <div
                  className="picture"
                  data-aos={"fade-right"}
                  data-aos-easing={"linear"}
                  data-aos-duration={"700"}
                >
                  <img className="logo_pic" src={logo} alt="" srcset="" />
                </div>
                <div
                  className="text"
                  data-aos={"fade-up"}
                  data-aos-easing={"linear"}
                  data-aos-duration={"700"}
                >
                  <p className="text_para">
                    {t("blog.1")}
                    <br />
                    <br />
                    {t("blog.2")}
                    <br />
                    <br />
                    {t("blog.3")}
                  </p>
                </div>
              </div>
              <div className="blog_pic">
                <div className="tower">
                  <Parallax
                    renderLayer={(percentage) => (
                      <img
                        className="tower_pic"
                        src={tower}
                        alt=""
                        srcset=""
                        style={{
                          transform:
                            percentage > 1 && `scale(${1 - (percentage - 1)}) `,
                          transition: "all .3s linear",
                        }}
                      />
                    )}
                  ></Parallax>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="collection_hero">
          <div className="collection_main">
            <div className="collection_name">
              <div className="logo_name">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    className="circle"
                    data-name="Layer 1"
                    viewBox="0 0 425 425"
                  >
                    <defs></defs>
                    <title>circle-emblem-test</title>
                    <g id="Layer_1-2" data-name="Layer 1-2">
                      <polygon
                        className="cls-1"
                        points="91.86 239.01 180.38 290.64 180.38 378.11 91.86 326.48 91.86 239.01"
                      ></polygon>
                      <polygon
                        className="cls-2"
                        points="268.93 239.01 180.41 290.64 180.41 378.11 268.93 326.48 268.93 239.01"
                      ></polygon>
                      <polygon
                        className="cls-2"
                        points="91.86 239.04 180.31 187.47 180.31 112.91 91.86 164.49 91.86 239.04"
                      ></polygon>
                      <polygon
                        className="cls-3"
                        points="268.79 239.04 180.34 187.47 180.34 112.91 268.79 164.49 268.79 239.04"
                      ></polygon>
                    </g>
                    <circle
                      className="cls-4"
                      cx="212.5"
                      cy="212.5"
                      r="212.5"
                    ></circle>
                    <g id="Layer_1-2-2" data-name="Layer 1-2">
                      <polygon
                        className="cls-1"
                        points="123.97 206.01 212.5 257.64 212.5 345.1 123.97 293.47 123.97 206.01"
                      ></polygon>
                      <polygon
                        className="cls-2"
                        points="301.04 206.01 212.51 257.64 212.51 345.1 301.04 293.47 301.04 206.01"
                      ></polygon>
                      <polygon
                        className="cls-2"
                        points="123.97 206.04 212.41 154.47 212.41 79.9 123.97 131.48 123.97 206.04"
                      ></polygon>
                      <polygon
                        className="cls-3"
                        points="300.89 206.04 212.46 154.47 212.46 79.9 300.89 131.48 300.89 206.04"
                      ></polygon>
                    </g>
                  </svg>
                </span>
                <span>
                  <p className="bimroom_collection">BIMROOM COLLECTION</p>
                </span>
              </div>
              <div className="line-wrap">
                <Parallax
                  renderLayer={(percentage) => (
                    <div
                      style={{
                        width: percentage < 0.2 ? 200 : percentage * 1000,
                        transition: "all .6s linear",
                      }}
                      className="line"
                    ></div>
                  )}
                ></Parallax>
              </div>
            </div>
            <div className="collection_divider">
              <div className="collection_data">
                <div className="collectionpic_main">
                  <img
                    className="collection_pic"
                    src={collection}
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div
                className="collection_text"
                data-aos={"fade-up"}
                data-aos-easing={"linear"}
                data-aos-duration={"700"}
              >
                <div className="text1">
                  <p className="collection_para">
                    {t("blog.4")}
                    <br />
                    <br />
                    {t("blog.5")}
                    <br />
                    <br />
                    {t("blog.6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="plug_hero">
          <div className="plug_main">
            <div className="collection_name">
              <div className="logo_name">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    className="circle"
                    data-name="Layer 1"
                    viewBox="0 0 425 425"
                  >
                    <defs></defs>
                    <title>circle-emblem-test</title>
                    <g id="Layer_1-2" data-name="Layer 1-2">
                      <polygon
                        className="cls-1"
                        points="91.86 239.01 180.38 290.64 180.38 378.11 91.86 326.48 91.86 239.01"
                      ></polygon>
                      <polygon
                        className="cls-2"
                        points="268.93 239.01 180.41 290.64 180.41 378.11 268.93 326.48 268.93 239.01"
                      ></polygon>
                      <polygon
                        className="cls-2"
                        points="91.86 239.04 180.31 187.47 180.31 112.91 91.86 164.49 91.86 239.04"
                      ></polygon>
                      <polygon
                        className="cls-3"
                        points="268.79 239.04 180.34 187.47 180.34 112.91 268.79 164.49 268.79 239.04"
                      ></polygon>
                    </g>
                    <circle
                      className="cls-4"
                      cx="212.5"
                      cy="212.5"
                      r="212.5"
                    ></circle>
                    <g id="Layer_1-2-2" data-name="Layer 1-2">
                      <polygon
                        className="cls-1"
                        points="123.97 206.01 212.5 257.64 212.5 345.1 123.97 293.47 123.97 206.01"
                      ></polygon>
                      <polygon
                        className="cls-2"
                        points="301.04 206.01 212.51 257.64 212.51 345.1 301.04 293.47 301.04 206.01"
                      ></polygon>
                      <polygon
                        className="cls-2"
                        points="123.97 206.04 212.41 154.47 212.41 79.9 123.97 131.48 123.97 206.04"
                      ></polygon>
                      <polygon
                        className="cls-3"
                        points="300.89 206.04 212.46 154.47 212.46 79.9 300.89 131.48 300.89 206.04"
                      ></polygon>
                    </g>
                  </svg>
                </span>
                <span>
                  <p className="bimroom_collection">PLUGIN</p>
                </span>
              </div>
              {/* <div className="line"></div> */}
              <div className="line-wrap">
                <Parallax
                  renderLayer={(percentage) => (
                    <div
                      style={{
                        width: percentage < 0.2 ? 200 : percentage * 1000,
                        transition: "all .6s linear",
                      }}
                      className="line"
                    ></div>
                  )}
                ></Parallax>
              </div>
            </div>
            <div className="plugin_divider">
              <div
                className="plug_text"
                data-aos={"fade-up"}
                data-aos-easing={"linear"}
                data-aos-duration={"700"}
              >
                <div className="text2">
                  <p className="collection_para">
                    {t("blog.7")}
                    <br />
                    <br />
                    {t("blog.8")}
                    <br />
                    <br />
                    {t("blog.9")}
                  </p>
                </div>
              </div>
              <div className="plug_data">
                <div className="plugpic_main">
                  <img className="plug_pic" src={plug} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
