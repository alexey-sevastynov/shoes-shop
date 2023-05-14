import React from "react";

interface MenuMobilePageProps {}

const MenuMobilePage: React.FC<MenuMobilePageProps> = () => {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile-header">
        <p>Shop women shoes</p>
        <div className="header-close" />
      </div>
      <div className="menu-mobile-search">
        <input type="text" placeholder="Search" />
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1425 15.73L13.8994 12.4869C14.8822 11.2002 15.4213 9.63953 15.4215 7.99268C15.4215 6.00806 14.6486 4.14209 13.245 2.73877C11.8417 1.33545 9.97595 0.5625 7.99109 0.5625C6.00647 0.5625 4.1405 1.33545 2.73718 2.73877C-0.15979 5.63599 -0.15979 10.3499 2.73718 13.2466C4.1405 14.6501 6.00647 15.4231 7.99109 15.4231C9.63794 15.4229 11.1986 14.8838 12.4853 13.9009L15.7284 17.144C15.9235 17.3394 16.1796 17.437 16.4354 17.437C16.6913 17.437 16.9474 17.3394 17.1425 17.144C17.5331 16.7537 17.5331 16.1204 17.1425 15.73ZM4.15125 11.8325C2.03406 9.71533 2.0343 6.27026 4.15125 4.15283C5.17688 3.12744 6.54065 2.5625 7.99109 2.5625C9.44177 2.5625 10.8053 3.12744 11.8309 4.15283C12.8566 5.17847 13.4215 6.54224 13.4215 7.99268C13.4215 9.44336 12.8566 10.8069 11.8309 11.8325C10.8053 12.8582 9.44177 13.4231 7.99109 13.4231C6.54065 13.4231 5.17688 12.8582 4.15125 11.8325Z"
            fill="#757575"
          ></path>
        </svg>
      </div>

      <div className="menu-mobile-sale">
        <p>SALE</p>
      </div>
      <div className="menu-mobile-language">
        <p>УКРАЇНСЬКА (UA)</p>
        <div className="language-popup">
          <span>English</span>
        </div>
      </div>
    </div>
  );
};

export default MenuMobilePage;
