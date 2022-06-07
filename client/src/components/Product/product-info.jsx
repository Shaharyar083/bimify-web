import React, { useState } from "react";

// packages
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";

// compnents
import Location from "./location";

const tabArray = ["PRODUCT INFORMATION", "CLASSIFICATION", "AVAILABILITY"];

const ProductInfo = ({ product }) => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(tabArray[0]);

  const handleActive = (string) => {
    setActive(string);
  };

  const generalArrayRawData = product?.meta_data?.find(
    (ele) => ele?.key === "general"
  );
  const technicalDetailsRawData = product?.meta_data?.find(
    (ele) => ele?.key === "technical_details"
  );
  const dimensionsRawData = product?.meta_data?.find(
    (ele) => ele?.key === "dimensions"
  );

  const general =
    generalArrayRawData.value && JSON?.parse(generalArrayRawData?.value);

  const technical =
    technicalDetailsRawData.value &&
    JSON?.parse(technicalDetailsRawData?.value);

  const Dimensions =
    dimensionsRawData.value && JSON?.parse(dimensionsRawData?.value);

  return (
    <div className="product-info">
      <div className="tab-wrapper">
        {tabArray.map((data, index) => (
          <div
            className={data === active ? "tab active" : "tab"}
            onClick={() => {
              handleActive(data);
            }}
            key={index}
          >
            {t(`catalog.${index + 20}`)}
            {/* {data} */}
          </div>
        ))}
      </div>

      <div className="tab-content">
        {active === tabArray[0] && (
          <Table responsive>
            <tbody>
              {general !== undefined && (
                <>
                  <tr>
                    <th className="table_title">General:</th>
                    <td className="table_data"></td>
                  </tr>
                  <tr>
                    <td className="table_heading">Model</td>
                    <td className="table_data">{general[0]?.model?.field}</td>
                  </tr>
                  <tr>
                    <td className="table_heading">Brand</td>
                    <td className="table_data">{general[0]?.brand?.field}</td>
                  </tr>
                  <tr>
                    <td className="table_heading">Country</td>
                    <td className="table_data">{general[0]?.country?.field}</td>
                  </tr>
                </>
              )}
              {Dimensions !== undefined && (
                <>
                  <tr>
                    <th className="table_title">Dimensions</th>
                    <td className="table_data"></td>
                  </tr>
                  <tr>
                    <td className="table_heading">Width</td>
                    <td className="table_data">
                      {Dimensions[0]?.width?.field}
                    </td>
                  </tr>
                  <tr>
                    <td className="table_heading">Height</td>
                    <td className="table_data"></td>
                  </tr>
                  <tr>
                    <td className="table_heading">Length</td>
                    <td className="table_data">
                      {Dimensions[0]?.depth?.field}
                    </td>
                  </tr>
                </>
              )}
              {technical !== undefined && (
                <>
                  <tr>
                    <th className="table_title">Technical Details:</th>
                    <td className="table_data"></td>
                  </tr>
                  <tr>
                    <td className="table_heading">Weight</td>
                    <td className="table_data">
                      {technical[0]?.weight?.field}
                    </td>
                  </tr>
                  <tr>
                    <td className="table_heading">Material</td>
                    <td className="table_data">
                      {technical[0]?.material?.field}
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </Table>
        )}

        {active === tabArray[1] && <div></div>}

        {active === tabArray[2] && (
          <div>
            <Location />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
