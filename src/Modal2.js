import Join from "./join";
import "./Modal2.css";

function Modal2({ modal2, openModal2 }) {
  return (
    <>
      <div className="modal2">
        <Join modal2={modal2} openModal2={openModal2}></Join>
      </div>
      <button
        onClick={() => {
          openModal2(modal2);
        }}
      >
        X
      </button>
    </>
  );
}

export default Modal2;
