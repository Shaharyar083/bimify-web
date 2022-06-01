import React from "react";
import "./style.scss";

import { Modal } from "react-bootstrap";

// image's & icons
import { MdOutlineClose } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import brand from "../../../assets/images/modal/brand.png";
import logo from "../../../assets/images/modal/object.png";

const DownloadModal = ({ name, showModal, modalClose, downloadObject }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={modalClose}
        className="download-modal-component"
      >
        <div className="close-modal">
          <MdOutlineClose onClick={modalClose} className="icon" />
        </div>

        <div className="main-wrapper">
          <div className="header">
            <div className="title">{name}</div>

            <div className="brand">
              <img src={brand} alt="" />
            </div>
          </div>

          <div className="download-text">Downloads</div>

          <div className="download-table">
            <table>
              <tbody>
                {["Ginza.Rfa", "Ginza-2.Rfa"].map((data) => (
                  <tr>
                    <td className="td1">
                      <img src={logo} alt="" />
                    </td>
                    <td className="td2">{data}</td>
                    <td className="td3">
                      <div
                        className="download"
                        onClick={() => {
                          window.open(
                            `https://platformdev123.blob.core.windows.net/testing/${downloadObject}`
                          );
                        }}
                      >
                        <FaCloudDownloadAlt className="icon" />
                        <span>Download</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DownloadModal;
