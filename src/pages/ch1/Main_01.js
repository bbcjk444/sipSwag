import "./Main_01.css";
import Modal from "./../../Modal";
import Modal5 from "./../../Modal5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main_01 = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  const [modal5, setModal5] = useState(false);

  const openModal5 = () => {
    setModal5(!modal5);
  };

  const genderselect = () => {
    navigate("/main02");
  };

  const admin = () => {
    navigate("/sceup");
  };

  if (sessionStorage.getItem("id") === null) {
    return (
      <div className="div-main1">
        <div className="group-div-main1">
          <img
            className="image-232-icon-main"
            alt=""
            src="../image-232@2x.png"
          />
        </div>
        <img
          className="group-icon-main50"
          alt=""
          src="../group-3541.svg"
          onClick={openModal}
        />
        {modal === true ? <Modal modal={modal} openModal={openModal} /> : null}
        <img className="group-icon-main51" alt="" src="../Group 334.png" />
      </div>
    );
  } else if (
    sessionStorage.getItem("id") !== null &&
    sessionStorage.getItem("admin") === "0"
  ) {
    return (
      <div className="div-main1">
        <div className="group-div-main1">
          <img
            className="image-232-icon-main"
            alt=""
            src="../image-232@2x.png"
          />
        </div>
        <img
          className="group-icon-main50"
          alt=""
          src="../group-3541.svg"
          onClick={genderselect}
        />

        <img className="group-icon-main51" alt="" src="../Group 334.png" />
      </div>
    );
  } else if (
    sessionStorage.getItem("id") !== null &&
    sessionStorage.getItem("admin") === "1"
  ) {
    return (
      <div className="div-main1">
        <div className="group-div-main1">
          <img
            className="image-232-icon-main"
            alt=""
            src="../image-232@2x.png"
          />
        </div>
        <img
          className="group-icon-main55"
          alt=""
          src="../group-3541.svg"
          onClick={genderselect}
        />
        <img
          className="group-icon-main56"
          alt=""
          src="../Rectangle 377.png"
          onClick={openModal5}
        />
        {modal5 === true ? (
          <Modal5 modal5={modal5} openModal5={openModal5} />
        ) : null}
        <img
          className="group-icon-main57"
          alt=""
          src="../admin.png"
          onClick={openModal5}
        />
        {modal5 === true ? (
          <Modal5 modal5={modal5} openModal5={openModal5} />
        ) : null}
        <img className="group-icon-main58" alt="" src="../Group 334.png" />
      </div>
    );
  }
};

export default Main_01;
