import FindPW from "./findPW";
import "./Modal4.css";

function Modal4({ modal4, openModal4 }) {
  return (
    <>
      <div className="modal4">
        <FindPW modal4={modal4} openModal4={openModal4}></FindPW>
      </div>
    </>
  );
}

export default Modal4;
