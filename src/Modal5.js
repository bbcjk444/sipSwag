import Sceup from "./scenariocall";
import "./Modal5.css";

function Modal5({ modal5, openModal5 }) {
  return (
    <>
      <div className="modal5">
        <Sceup modal5={modal5} openModal5={openModal5}></Sceup>
      </div>
    </>
  );
}

export default Modal5;
