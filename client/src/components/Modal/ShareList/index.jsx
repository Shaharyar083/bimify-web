import React from "react";
import "./style.scss";

// packages
import { Modal } from "react-bootstrap";
import { useMsal } from "@azure/msal-react";
import { useSelector } from "react-redux";

// api's
import { getUserDetail, shareListToFriend } from "../../../api/index";

// image's & icons
import { MdOutlineClose } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const ShareListModal = ({ shareModalOpen, shareModalClose }) => {
  let { accounts } = useMsal();

  const user = useSelector((store) => store.user.user);

  const [input, setInput] = React.useState("");
  const [friend, setFirend] = React.useState({});
  const [err, setError] = React.useState("");

  const closeModal = () => {
    setFirend({});
    setInput("");
    setError("");
    shareModalClose();
  };

  const searchUser = async () => {
    const res = await getUserDetail({ email: input });
    // console.log('kkk', res)
    if (res?.userExist) {
      setFirend(res?.user);
      setError("");
    } else {
      setError("User not found!");
    }
  };

  const shareList = async () => {
    const res = await shareListToFriend({
      email: accounts[0].username,
      myCart: user?.cart,
      friendEmail: friend?.email,
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

        {Object.keys(friend).length > 0 && (
          <div className="user-wrap">
            <div className="detail">
              <div>
                <span>Name:</span> {friend?.name}
              </div>
              <div>
                <span>Email:</span> {friend?.email}
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
