import useClickOutside from "../../hooks/useClickOutside";

import "./styles.css";

type Props = {
  handleClickClose: () => void;
};

const Modal = (props: Props): JSX.Element => {
  const { handleClickClose } = props;

  const modalContainerRef = useClickOutside(handleClickClose);

  return (
    <div ref={modalContainerRef} className="modal-container">
      <div className="modal">
        <h1>Modal title</h1>
        <button className="close-btn" type="button" onClick={handleClickClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
