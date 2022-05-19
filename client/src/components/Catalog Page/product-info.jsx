import React, { useState } from "react";
import Location from "./location";
import { useTranslation } from "react-i18next";
import { Table } from "react-bootstrap";
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
            className={data === active ? "active" : "tab"}
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

      {active === tabArray[0] && (
        <div className="info">
          {general !== undefined && (
            <>
              <div className="table_title">General:</div>
              <Table responsive bordered hover>
                <tbody>
                  <tr>
                    <th className="table_heading">
                      {general[0]?.brand?.title}
                    </th>
                    <td className="table_data">{general[0]?.brand?.field}</td>
                  </tr>
                  <tr>
                    <th className="table_heading">
                      {general[0]?.country?.title}
                    </th>
                    <td className="table_data">{general[0]?.country?.field}</td>
                  </tr>
                  <tr>
                    <th className="table_heading">
                      {general[0]?.model?.title}
                    </th>
                    <td className="table_data">{general[0]?.model?.field}</td>
                  </tr>
                </tbody>
              </Table>
            </>
          )}

          {technical !== undefined && (
            <>
              <div className="table_title">Dimensions:</div>
              <Table responsive bordered hover>
                <tbody>
                  <tr>
                    <th className="table_heading">
                      {technical[0]?.fireRatingMaterials?.title}
                    </th>
                    <td className="table_data">
                      {technical[0]?.fireRatingMaterials?.field}
                    </td>
                  </tr>
                  <tr>
                    <th className="table_heading">
                      {technical[0]?.material?.title}
                    </th>
                    <td className="table_data">
                      {technical[0]?.material?.field}
                    </td>
                  </tr>
                  <tr>
                    <th className="table_heading">
                      {technical[0]?.materialSecondary?.title}
                    </th>
                    <td className="table_data">
                      {technical[0]?.materialSecondary?.field}
                    </td>
                  </tr>
                  <tr>
                    <th className="table_heading">
                      {technical[0]?.weight?.title}
                    </th>
                    <td className="table_data">
                      {technical[0]?.weight?.field}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </>
          )}

          {Dimensions !== undefined && (
            <>
              <div className="table_title">Technical Details:</div>
              <Table responsive bordered hover>
                <tbody>
                  <tr>
                    <th className="table_heading">
                      {Dimensions[0]?.depth?.title}
                    </th>
                    <td className="table_data">
                      {Dimensions[0]?.depth?.field}
                    </td>
                  </tr>
                  <tr>
                    <th className="table_heading">
                      {Dimensions[0]?.width?.title}
                    </th>
                    <td className="table_data">
                      {Dimensions[0]?.width?.field}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </>
          )}
        </div>
      )}

      {active === tabArray[1] && <div className="info"></div>}

      {active === tabArray[2] && (
        <div className="location">
          <Location />
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
