import { forwardRef } from "react";

import "./styles.css";

type Props = {
  handleClickClose: () => void;
};

const Modal = forwardRef<HTMLDivElement | null, Props>((props, ref) => {
  const { handleClickClose } = props;

  return (
    <div className="modal-container">
      <div ref={ref} className="modal">
        <h1>Modal title</h1>
        <button className="close-btn" type="button" onClick={handleClickClose}>
          Close
        </button>
      </div>
    </div>
  );
});

export default Modal;
