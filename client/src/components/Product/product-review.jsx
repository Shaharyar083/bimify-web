import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useMsal } from "@azure/msal-react";
import { addReviewAndRating, getReviewAndRating } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setRatingAndReview } from "../../redux/reducers/product-reducer";
import { useTranslation } from "react-i18next";
import Loader from "../Loader";
import { Grid } from "@material-ui/core";
import Line32 from "../../assets/images/other/Line32.png";
import { Line } from "rc-progress";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const reviews = [
  {
    rating: 99,
    star: 5,
  },
  {
    rating: 17,
    star: 4,
  },
  {
    rating: 5,
    star: 3,
  },
  {
    rating: 3,
    star: 2,
  },
  {
    rating: 0,
    star: 1,
  },
];

const MessageBox = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="msg">{t("catalog.10")}</div>
    </>
  );
};

const Review = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="head">
            <div className="title">{data?.email}</div>
            <div>
              {[1, 2, 3, 4, 5].map((star, index) =>
                star <= data?.rating ? (
                  <AiFillStar className="icon active" key={index} />
                ) : (
                  <FaRegStar className="icon " key={index} />
                )
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <div className="para">{data?.review}</div>
        </Grid>
      </Grid>
    </>
  );
};

const ProductReview = ({ productID }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const p_rating_review = useSelector(
    (store) => store.product.productRatingAndReview
  );
  const { accounts } = useMsal();
  const [starHover, setStarHover] = useState();
  const [starActive, setStarActive] = useState(0);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setReview("");
    setStarActive(0);
  };

  const submit = async () => {
    let payload = {
      email: accounts[0]?.username,
      productID,
      rating: starActive,
      review,
    };

    try {
      setIsLoading(true);
      await addReviewAndRating(payload);
      const response = await getReviewAndRating();
      dispatch(setRatingAndReview(response.data));
      setIsLoading(false);
      reset();
    } catch (err) {
      setIsLoading(false);
      console.log("product-review component api error =>", err.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="product-review-section">
          {/* SUBMITTING RATING AND REVIEW SECTION */}
          {/* {accounts[0] && ( */}
          <>
            <div className="rr-header">
              <h1>Ratings & Reviews</h1>
            </div>
            <Grid container className="rating-review-wrapper">
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <div className="reviews-show-container">
                  <div className="ratingicons">
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <AiFillStar className="icon active" key={star} />
                    ))}
                  </div>
                  <div className="ratingtext">
                    <h1>5.0</h1>
                    <p> ( 2,345 Reviews )</p>{" "}
                  </div>
                  <div className="progress-container">
                    {reviews.map((e) => (
                      <div className="progress-bars">
                        <p>{e.star} Star</p>
                        <Line
                          percent={e.rating}
                          strokeWidth={1}
                          strokeColor="#FEB449"
                          className="line-progress"
                        />
                        <p>{e.rating}%</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={7} lg={7}>
                <div className="leave-review">
                  <div className="tab">Leave A Review</div>

                  <div className="wrap-container">
                    <div
                      className="star-wrapper"
                      onMouseOut={() => {
                        setStarHover(-1);
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((data, index) => (
                        <FaRegStar
                          className={
                            starActive
                              ? data <= starActive
                                ? "icon active"
                                : "icon"
                              : data <= starHover
                              ? "icon active"
                              : "icon"
                          }
                          key={index}
                          onMouseOver={() => {
                            setStarHover(data);
                          }}
                          onClick={() => {
                            setStarActive(data);
                          }}
                        />
                      ))}
                    </div>
                    <textarea
                      name="message"
                      rows="6"
                      cols="50"
                      className="textarea"
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                    />

                    <div className="submit-btn-container">
                      <div className="btn-submit" onClick={submit}>
                        {t("catalog.15")}
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </>
          {/* )} */}
          {/* SHOW RATING AND REVIEW LIST SECTION */}
          <div
            className="product-reivew"
            style={{ width: accounts[0] ? "" : "100%" }}
          >
            {p_rating_review?.find((id) => id.productID === `${productID}`)
              ?.reviews.length === 0 && (
              <div className="msg-box-wrapper">
                <MessageBox />
              </div>
            )}

            <div className="review-list">
              {p_rating_review
                ?.find((id) => id.productID === `${productID}`)
                ?.reviews?.map((data, i) => (
                  <>
                    <Review data={data} key={i} />

                    {i === p_rating_review[0]?.reviews?.length - 1 ? (
                      <div className="linecontainer">
                        <div className="view-more-line">
                          <div>
                            <img src={Line32} alt="" />
                          </div>
                          <p>View More</p>
                          <span>
                            {" "}
                            <MdOutlineKeyboardArrowDown className="arrow-icon" />
                          </span>
                          <div>
                            <img src={Line32} alt="" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="linecontainer">
                        <img src={Line32} alt="" />
                      </div>
                    )}
                  </>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductReview;
