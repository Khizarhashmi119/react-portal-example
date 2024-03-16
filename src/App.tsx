import { useState } from "react";
import { createPortal } from "react-dom";

import Modal from "./component/Modal";
import useClickOutside from "./hooks/useClickOutside";

import "./app.css";

const App = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpen = () => setIsModalOpen(true);
  const handleClickClose = () => setIsModalOpen(false);

  const modalRef = useClickOutside(handleClickClose);

  return (
    <main className="main">
      <h1>React portal example</h1>
      <button className="open-btn" type="button" onClick={handleClickOpen}>
        <span className="open-btn-text">Open</span>
      </button>
      {isModalOpen &&
        createPortal(
          <Modal ref={modalRef} handleClickClose={handleClickClose} />,
          document.body
        )}
    </main>
  );
};

export default App;
