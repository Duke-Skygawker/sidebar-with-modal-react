import { useGlobalContext } from "../Context";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const Home = () => {
  const { showModal, setShowModal, setShowSidebar, showSidebar, faBars } =
    useGlobalContext();
  return (
    <div>
      <button
        className="btn sidebar-toggler"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {faBars}
      </button>
      <Sidebar />
      <Modal />
      <button className="btn center" onClick={() => setShowModal(!showModal)}>
        Show Modal
      </button>
    </div>
  );
};
export default Home;
