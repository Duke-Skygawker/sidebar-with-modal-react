import { useGlobalContext } from "../Context";

const Modal = () => {
  const { closeCross, showModal, setShowModal } = useGlobalContext();
  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <button className="close-btn" onClick={() => setShowModal(false)}>
            {closeCross}
          </button>
          <p>Modal content</p>
        </div>
      </div>
    )
  );
};
export default Modal;
