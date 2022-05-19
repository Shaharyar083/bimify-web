import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { useMsal } from "@azure/msal-react";
import { addReviewAndRating, getReviewAndRating } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setRatingAndReview } from "../../redux/reducers/product-reducer";
import { useTranslation } from "react-i18next";
import Loader from "../Loader";

const MessageBox = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="msg">
        {t("catalog.10")}
        {/* There are no reviews yet. */}
      </div>
    </>
  );
};

const Review = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="wrap">
        <div className="head">
          <div className="title">{data?.email}</div>

          <div>
            {[1, 2, 3, 4, 5].map((star, index) =>
              star <= data?.rating ? (
                <FaRegStar className="icon active" key={index} />
              ) : (
                <FaRegStar className="icon " key={index} />
              )
            )}
          </div>
        </div>

        <div className="para">{data?.review}</div>
      </div>
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
          <div
            className="product-reivew"
            style={{ width: accounts[0] ? "" : "100%" }}
          >
            <div className="tab">{t("catalog.11")}</div>

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
                  <Review data={data} key={i} />
                ))}
            </div>
          </div>

          {accounts[0] && (
            <div className="leave-review">
              <div className="tab">{t("catalog.12")}</div>

              <div className="wrap-container">
                <div className="sub-title">
                  {t("catalog.13")} <span>*</span>
                </div>

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

                <div className="sub-title">
                  {t("catalog.14")} <span>*</span>
                </div>

                <textarea
                  name="message"
                  rows="6"
                  cols="50"
                  className="textarea"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />

                <div className="btn-submit" onClick={submit}>
                  {t("catalog.15")}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductReview;
