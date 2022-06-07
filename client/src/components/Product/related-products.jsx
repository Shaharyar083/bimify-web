import React, { useState, useEffect } from "react";
import {
  FaRegHeart,
  FaHeart,
  FaRegStar,
  FaStar,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import brand from "../../assets/product images/brand.png";
import { Link } from "react-router-dom";
import { getProductByIDs, productToCart } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { useMsal } from "@azure/msal-react";
import { setUser } from "../../redux/reducers/user-reducer";
import TagManager from "react-gtm-module";
import ModalComponent from "../Modal/Modal";

const RelatedProducts = ({ relatedProductIDs }) => {
  const { accounts } = useMsal();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.user);
  const p_rating = useSelector((store) => store.product.productRatingAndReview);

  const [relatedProduct, setRelatedProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const handleModalClose = () => setShowModal(false);

  const handleModalShow = (data) => {
    TagManager.dataLayer({
      dataLayer: {
        event: "click",
        button: "download",
        product: "productID",
      },
    });
    setModalData(data);
    setShowModal(true);
  };

  const handleCart = (product) => {
    if (accounts[0]) {
      let payload = {
        tenantId: accounts[0]?.localAccountId,
        name: accounts[0]?.name,
        email: accounts[0]?.username,
        productID: product?.id,
      };

      productToCart(payload)
        .then((data) => {
          dispatch(setUser(data.user));
        })
        .catch((err) =>
          console.log("related product page api error =>", err.message)
        );
    } else {
      alert("Please login first...");
    }
  };

  useEffect(() => {
    let isCancelled = false;

    getProductByIDs({ productIDs: relatedProductIDs })
      .then((data) => {
        if (!isCancelled) setRelatedProducts(data.data);
      })
      .catch((err) => console.log("related product error =>", err.message));

    return () => {
      isCancelled = true;
    };
  }, [relatedProductIDs]);

  return (
    <>
      {relatedProduct.length > 0 && (
        <div className="related-product-section">
          <div className="tab">RELATED PRODUCTS</div>

          <div className="product-wrapper">
            {relatedProduct.length > 0 &&
              relatedProduct.map((data, i) => {
                return (
                  <div className=" p_card" key={i}>
                    <div className="p_header">
                      <div className="heart" onClick={() => handleCart(data)}>
                        {user?.cart?.includes(data?.id) ? (
                          <FaHeart color="#337ab7" />
                        ) : (
                          <FaRegHeart />
                        )}
                      </div>

                      <div className="star">
                        {[1, 2, 3, 4, 5].map((i) =>
                          i <=
                          p_rating.find(
                            (val) => val.productID === `${data?.id}`
                          )?.rating ? (
                            <FaStar color="#feb449" key={i} />
                          ) : (
                            <FaRegStar key={i} />
                          )
                        )}
                      </div>
                    </div>

                    <Link to={`/product/${data.slug}`} className="p_body">
                      <div className="thumbnail">
                        <img src={data.images[0]?.src} alt="" />
                      </div>
                      <div className="p_title">{data.name}</div>
                    </Link>

                    <div
                      className="download"
                      onClick={() => handleModalShow(data)}
                    >
                      <FaCloudDownloadAlt className="icon" />
                      <span>Download</span>
                    </div>

                    <div className="brand">
                      <img src={brand} alt="" />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      <ModalComponent
        name={modalData?.name}
        showModal={showModal}
        modalClose={handleModalClose}
      />
    </>
  );
};

export default RelatedProducts;
