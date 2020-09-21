import React from "react";
import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting...");
  const cancel = () => console.log("Cancel");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, cancel);
  return (
    <div className="container">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
