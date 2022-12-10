import React from "react";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className='h-screen grid place-items-center bg-pink-200'>
      <div className='grid lg:grid-cols-2 w-2/3 h-2/3 bg-white rounded-lg'>
        <div className={styles.imgBg}>
          <div className={`${styles.imgMain} rounded-l-lg`}></div>
          <div className={styles.imgHeart1}></div>
          <div className={styles.imgHeart2}></div>
        </div>
        <div className='grid place-items-center'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
