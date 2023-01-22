import React from "react";
import "./productPage.scss";

// packages
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setCategory } from "../../redux/reducers/product-reducer";

// components
import ProductView from "./product-view";
import ProductDescription from "./product-description";
import ProductInfo from "./product-info";
import ProductReview from "./product-review";
import RelatedProducts from "./related-products";

// images & icons
import brand from "../../assets/images/product/brand.png";
import { FaArrowLeft } from "react-icons/fa";

const ProductPage = ({ product }) => {
  const generalArrayRawData = product?.meta_data?.find(
    (ele) => ele?.key === "general"
  );
  const technicalDetailsRawData = product?.meta_data?.find(
    (ele) => ele?.key === "technical_details"
  );
  const dimensionsRawData = product?.meta_data?.find(
    (ele) => ele?.key === "dimensions"
  );
  // const { t, i18n } = useTranslation();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // let categories = [...(product?.categories ?? [])];

  // const getCategoryName = (category) => {
  //   let name = category;
  //   if (name.includes("&amp;")) name = name.replace(/&amp;/gi, "&");

  //   return name;
  // };

  // const handleCategory = (name) => {
  //   dispatch(setCategory(name));
  //   navigate("/product");
  // };

  return (
    <div className="bimroom-product-page">
      {/* <div className="top-back-wrapper">
        <div
          className="goback"
          onClick={() => {
            navigate("/product");
          }}
        >
          <FaArrowLeft />
          <span>{t("catalog.1")}</span>
        </div>

        <div className="catalog">
          <span className="cat1" onClick={() => navigate("/product")}>
            CATALOG
          </span>
          {categories?.reverse().map((data, i) => (
            <span key={i}>
              {"  >  "}{" "}
              <span className="cat2" onClick={() => handleCategory(data.name)}>
                {getCategoryName(data.name)}
              </span>
            </span>
          ))}
        </div>

        <div className="extra"></div>
      </div> */}

      <div className="goback" onClick={() => {}}>
        <FaArrowLeft />
        <span>Back</span>
      </div>

      <div className="title-brand-wrapper">
        <div className="title">{product?.name}</div>
        <div className="brand">
          <img src={brand} alt="" />
        </div>
      </div>
      <div className="product-view-desc-section">
        <ProductView product={product} />
        <ProductDescription description={product?.description} />
      </div>

      {generalArrayRawData === undefined &&
      technicalDetailsRawData === undefined &&
      dimensionsRawData === undefined ? (
        "No Product Info to Show"
      ) : (
        <ProductInfo product={product} />
      )}

      <ProductReview productID={product?.id} />
      <RelatedProducts relatedProductIDs={product?.related_ids} />
      {/* </> */}
    </div>
  );
};

export default ProductPage;
