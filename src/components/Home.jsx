import { useGlobalContext } from "../Context";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const Home = () => {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div>
      <Sidebar />
      <Modal />
      <button className="btn center" onClick={() => setShowModal(!showModal)}>
        Show Modal
      </button>
    </div>
  );
};
export default Home;
