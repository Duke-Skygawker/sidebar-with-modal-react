import { useGlobalContext } from "../Context";
import logo from "../logo.svg";
import { links, social } from "../data";

const Sidebar = () => {
  const { closeCross, showSidebar, setShowSidebar } = useGlobalContext();
  return (
    showSidebar && (
      <div className="sidebar">
        <button className="close-btn" onClick={() => setShowSidebar(false)}>
          {closeCross}
        </button>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="sidebar-container">
          <div className="links-container">
            <ul>
              {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                  <li key={id} className="link-item">
                    <i>{icon}</i>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="socials-container">
            {social.map((item) => {
              return (
                <a key={item.id} href={item.url}>
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};
export default Sidebar;
