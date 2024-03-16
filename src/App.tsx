import { useState } from "react";
import { createPortal } from "react-dom";

import Modal from "./component/Modal";

import "./app.css";

const App = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpen = () => setIsModalOpen(true);
  const handleClickClose = () => setIsModalOpen(false);

  return (
    <main className="main">
      <h1>React portal example</h1>
      <button className="open-btn" type="button" onClick={handleClickOpen}>
        Open
      </button>
      {isModalOpen &&
        createPortal(
          <Modal handleClickClose={handleClickClose} />,
          document.body
        )}
    </main>
  );
};

export default App;
