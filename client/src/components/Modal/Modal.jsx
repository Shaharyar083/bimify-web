import React, { useState } from "react";
import "./modal.scss";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ImCross } from "react-icons/im";

import brand from "../../assets/wishlist/brand.png";
import logo from "../../assets/model/icon.png";

const ModalComponent = ({ name, showModal, modalClose, downloadObject }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Modal show={showModal} onHide={modalClose} className="modal-component">
        <div className="modal-wrapper">
          <div className="header">
            <div className="object">{t("modal.1")}</div>
            <div className="name">{name}</div>
          </div>

          <div className="object-download-wrap">
            <table>
              <tbody>
                <tr>
                  <td className="td1">
                    <img src={logo} alt="" />
                  </td>
                  <td className="td2">RFA</td>
                  <td className="td3">dr-dpe-rfa.rfa</td>
                  <td
                    className="td4"
                    onClick={() => {
                      window.open(
                        `https://platformdev123.blob.core.windows.net/testing/${downloadObject}`
                      );
                    }}
                  >
                    <div className="download">Download</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="m-body">
            <div className="info">{t("modal.3")}</div>

            <div className="brand">
              <img src={brand} alt="" />
            </div>
          </div>
          <div className="cross" onClick={modalClose}>
            <ImCross />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
