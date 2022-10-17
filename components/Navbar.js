import React from 'react'
import styles from "../styles/Home.module.css"
import { BsChevronDown } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { BiHeart } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { HiArrowSmRight } from 'react-icons/hi';



const Navbar = () => {
    return (
        <>
            <header>
                <div className={styles.nav1}>
                    <div className={styles.nav1Item}>
                        <p>English <span><BsChevronDown /></span></p>
                        <p>USD <span><BsChevronDown /></span></p>
                    </div>
                </div>
                <div className={styles.nav2}>
                    <div className={styles.mainNav}>
                        <div className={styles.wd}>
                            <h1>LOGO</h1>
                        </div>
                        <div className={styles.nav2Item}>
                            <div className={styles.navMain}>
                                <div className={styles.navLeft}>
                                    <ul>
                                        <li>Home</li>
                                        <li>School Uniforms</li>
                                        <li>Corporate</li>
                                        <li className={styles.liColor}>Sports</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className={styles.navRight}>
                                    <ul>
                                        <li><BiSearch /></li>
                                        <li><BiHeart /></li>
                                        <li className={styles.meter}><CgShoppingCart /><span>1</span></li>
                                        <li><FiUser /></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className={styles.nav3}>
                    <div className={styles.nav3Item}>
                        <p>Free Delivery on orders above Rs. 1000,  DON’T MISS</p>
                        <p style={{ color: "#FA8158" }}>SHOP NOW<span><HiArrowSmRight /></span></p>
                    </div>
                </div>
                <div className={styles.nav4}>
                    <div className={styles.nav4Item}>
                        <p style={{ color: "#A0A0A0" }}>Home</p>
                        <p style={{ color: "#A0A0A0" }}>/</p>
                        <p style={{ color: "#A0A0A0" }}>Category Sports</p>
                        <p style={{ color: "#A0A0A0" }}>/</p>
                        <p>Football Shirt</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar