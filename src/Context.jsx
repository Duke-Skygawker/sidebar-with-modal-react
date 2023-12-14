import { useContext, useState } from "react";
import { createContext } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa6";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        showModal,
        setShowModal,
        showSidebar,
        setShowSidebar,
        closeCross: <ImCross />,
        faBars: <FaBars />,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
