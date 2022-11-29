import Login from "./Login";
import "./Modal.css";

function Modal({ modal, openModal }) {
  return (
    <>
      <div className="modal">
        <Login modal={modal} openModal={openModal}></Login>
      </div>
      <button
        onClick={() => {
          openModal(modal);
        }}
      >
        X
      </button>
    </>
  );
}

export default Modal;
