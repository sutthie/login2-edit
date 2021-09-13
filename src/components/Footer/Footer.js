import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container-fluid'>
        <div className='row justify-content-around'>
          <div className='col-6'>
            <h5 className={styles.title}>Title</h5>
            <p className={styles.description}>This is description.</p>
          </div>
          <div className='col-2'>
            <ul className='list-unstyled'>
              <li>
                <a className={styles.footerlink} href='/'>
                  Main Link
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href='/frmadd'>
                  เพิ่มข้อมูล Account
                </a>
              </li>
              <li>
                <a className={styles.footerlink} href='/test1'>
                  Test1 Link
                </a>
              </li>
              {/* <li>
                <a className={styles.footerlink} href='/test2'>
                  Test2 Link
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
