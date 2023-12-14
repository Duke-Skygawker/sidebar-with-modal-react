import { useContext, useState } from "react";
import { createContext } from "react";
import { ImCross } from "react-icons/im";

export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showModal, setShowModal] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        showModal,
        setShowModal,
        showSidebar,
        setShowSidebar,
        closeCross: <ImCross />,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
