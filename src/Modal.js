import Login from "./Login";
import "./Modal.css";

function Modal({ modal, openModal }) {
  return (
    <>
      <div className="modal">
        <Login modal={modal} openModal={openModal}></Login>
      </div>
    </>
  );
}

export default Modal;
