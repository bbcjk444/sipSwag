import FindID from "./findID";
import "./Modal3.css";

function Modal3({ modal3, openModal3 }) {
  return (
    <>
      <div className="modal3">
        <FindID modal3={modal3} openModal3={openModal3}></FindID>
      </div>
    </>
  );
}

export default Modal3;
