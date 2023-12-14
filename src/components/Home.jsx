import Modal from "./Modal";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Modal />
      <button className="btn center">Show Modal</button>
    </div>
  );
};
export default Home;
