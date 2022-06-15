import React from "react";
import "./style.scss";

// packages
import { Modal } from "react-bootstrap";
import { useMsal } from "@azure/msal-react";

// api's
import { getUserDetail, shareListToFriend } from "../../../api/index";

// image's & icons
import { MdOutlineClose } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const ShareListModal = ({ shareModalOpen, shareModalClose }) => {
  let { accounts } = useMsal();

  const [input, setInput] = React.useState("");
  const [user, setUser] = React.useState({});
  const [err, setError] = React.useState("");

  const closeModal = () => {
    setUser({});
    setInput("");
    setError("");
    shareModalClose();
  };

  const searchUser = async () => {
    const res = await getUserDetail({ email: input });

    if (res?.userExist) {
      setUser(res?.user);
      setError("");
    } else {
      setError("User not found!");
    }
  };

  const shareList = async () => {
    const res = await shareListToFriend({
      email: user?.email,
      friendEmail: accounts[0].username,
    });
    alert(res.message);
  };
  return (
    <Modal
      show={shareModalOpen}
      onHide={closeModal}
      className="share-modal-component"
    >
      <div className="close-modal">
        <MdOutlineClose onClick={closeModal} className="icon" />
      </div>

      <div className="main-wrapper">
        <div className="header">Search user which you want to share list!</div>

        <div className="search-user">
          <input
            type="email"
            placeholder="Search user by email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className="icon" onClick={searchUser}>
            <FaSearch />
          </div>
        </div>

        {err && <div className="error">{err}</div>}

        {Object.keys(user).length > 0 && (
          <div className="user-wrap">
            <div className="detail">
              <div>
                <span>Name:</span> {user?.name}
              </div>
              <div>
                <span>Email:</span> {user?.email}
              </div>
            </div>

            <div className="share-btn" onClick={shareList}>
              share
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ShareListModal;
