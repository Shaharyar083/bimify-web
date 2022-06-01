import React from "react";
import "./blog.scss";

// images
import pic1 from "../../assets/images/blog/pic1.png";
import pic2 from "../../assets/images/blog/pic2.png";
import pic3 from "../../assets/images/blog/pic3.png";

const Blog = () => {
  return (
    <>
      <div className="blog-page">
        <div className="main-title">MANUFACTURERS</div>

        <div className="blog-containor">
          <div className="main-wrappper">
            <div className="left">
              <img src={pic1} alt="" />
            </div>

            <div className="right">
              <div className="title">WHY BIMROOM?</div>

              <div className="para">
                <p>
                  In the past decade, building information modeling has widely
                  been adapted as the primary method of building design.
                  Currently BIM is shifting from best practice to a process
                  compulsory by law in most developed countries. If your
                  company’s product catalogue is not already available in BIM
                  formats, now is the time to react. Most specifications are
                  made based on design, and designers using BIM are likely to
                  specify products with high-quality BIM models available.
                </p>
                <p>
                  There are numerous sources of BIM content online with hundreds
                  of thousands of products available – What makes Bimroom
                  different from the rest?
                </p>
                <p>
                  Most BIM content libraries focus on quantity over quality.
                  Product catalogues are filled with non-BIM file formats and
                  unnecessarily detailed production models directly imported
                  into BIM applications. The content is often created by
                  software developers to meet the demands of the manufacturer
                  rather than the designers who ultimately use the models.
                </p>
                <p>
                  At Bimroom, all content is created or revised by architects
                  and engineers specializing in BIM – people who are familiar
                  with the requirements of the designers. All our efforts aim to
                  facilitate the work of designers rather than taking shortcuts
                  to make more content available. We believe this approach will
                  attract and engage more designers and bring more favourable
                  attention to manufacturers whose products are featured at
                  Bimroom. High quality models reflect high quality products!
                </p>
                <p>
                  Our solution makes BIM easy for the manufacturer as well as
                  the designer – we take care of the modeling, hosting and
                  maintenance of your digital product catalogue to an extent
                  that best suits your needs. Contact us today for more
                  information on what we can do for you!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-containor">
          <div className="main-wrappper main-wrappper1">
            <div className="left">
              <img src={pic2} alt="" />
            </div>

            <div className="right">
              <div className="title">CUSTOM FEATURES</div>

              <div className="para">
                <p>
                  We bring your brand to the spotlight with individual solutions
                  to best complement your content. If you feel like designers
                  would benefit from a guided and detailed way to specify your
                  products, we’ll build a product configurator tailored for the
                  purpose. A custom configurator will help the designers make
                  sure that the products are specified according to your
                  requirements.
                </p>
                <p>
                  If you’d like more exposure to your offering, we’ll highlight
                  your brand and products on the Bimroom front page and plugin
                  toolbar. All our services are available to integrate in your
                  own channels – if you want to make your Bimroom content
                  available on your own website, we’ll make it happen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-containor">
          <div className="main-wrappper main-wrappper2">
            <div className="left">
              <img src={pic3} alt="" />
            </div>

            <div className="right">
              <div className="title">TRAINING</div>

              <div className="para">
                <p>
                  Shifting the paradigm from CAD to BIM does not happen
                  overnight. If required, we’ll train your product design and
                  sales personnel on how to use and benefit from BIM content and
                  Bimroom services. We’ll help you highlight your BIM efforts
                  and make sure that your clients and other groups of interest
                  find your digital products and make the best possible use of
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
