import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import { RiStarSLine, RiStarSFill } from 'react-icons/ri';
import { GiShare } from 'react-icons/gi';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { BiHeart } from 'react-icons/bi';
import { HiOutlineArrowPath } from 'react-icons/hi2';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import { FaCottonBureau } from 'react-icons/fa';
import { TfiThumbUp } from 'react-icons/tfi';
import { GiThreeLeaves } from 'react-icons/gi';



const HomeC = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.heroSection}>
          <div className={styles.heroDiv}>
            <div className={styles.leftHero}>
              <div className={styles.image}>
                <Image src="/m1.png" width={740} height={863} />
              </div>
              <div className={styles.image2}>
                <div className={styles.img}>
                  <Image src="/m2.png" width={115} height={147} />
                </div>
                <div className={styles.img}>
                  <Image src="/m3.png" width={115} height={147} />
                </div>
                <div className={styles.img}>
                  <Image src="/m4.png" width={115} height={147} />
                </div>
                <div className={styles.img}>
                  <Image src="/m5.png" width={115} height={147} />
                </div>
                <div className={styles.img}>
                  <Image src="/m6.png" width={115} height={147} />
                </div>

              </div>
            </div>
            <div className={styles.rightHero}>
              <h3>CLOTHING</h3>
              <div className={styles.r1}>
                <h1>Leather boots with tall Leg</h1>
                <div className={styles.share}><GiShare /></div>

              </div>

              <div className={styles.rightItems}>
                <div className={styles.star}>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSLine />
                </div>
                <p style={{ color: "#616161", fontSize: "14px" }}>&#40;1.234 reviews&#41;</p>
                <p style={{ color: "#E5E5E5", fontSize: "20px" }}>|</p>
                <h4>SKU:</h4>
                <h4 style={{ color: "#616161", fontSize: "16px", fontWeight: "100" }}>A515-56-36UT</h4>
                <p style={{ color: "#E5E5E5", fontSize: "20px" }}>|</p>
                <h4 style={{ color: "#3DAB25", fontSize: "16px" }}>In-Stock</h4>
              </div>
              <div className={styles.r2}>
                <h1 style={{ color: "#F3692E", fontSize: "30px", paddingBottom: "0px" }}>$68.00</h1>
                <h1 style={{ color: "#A0A0A0", fontSize: "16px", paddingBottom: "0px", textDecoration: "line-through", fontWeight: "100", position: "relative", top: "3px" }}>$98.00</h1>
                <div className={styles.rMain}>
                  <AiOutlineCaretLeft />
                  <div className={styles.rBtn}>
                    <p >Save $12</p>
                  </div>
                </div>

              </div>
              <div className={styles.r3}>
                <p>The garments labelled as Committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.</p>
                <div className={styles.line}></div>
              </div>
              <div className={styles.r4}>
                <h1>Sold it:</h1>
                <div className={styles.rLine}>
                  <div className={styles.rL}>
                    <div className={styles.rL1}>
                    </div>
                  </div>
                  <p>Available:<span>20</span></p>
                </div>
              </div>
              <div className={styles.r5}>
                <div className={styles.rH1}>
                  <h2>Hurry Up!</h2>
                  <h2>Offer Ends in:</h2>
                </div>
                <div className={styles.rBox}>
                  <div className={styles.rB1}>
                    <h2>12</h2>
                    <p>Days</p>
                  </div>
                  <h4>:</h4>
                  <div className={styles.rB1}>
                    <h2>03</h2>
                    <p>Hours</p>
                  </div>
                  <h4>:</h4>
                  <div className={styles.rB1}>
                    <h2>14</h2>
                    <p>Min</p>
                  </div>
                  <h4>:</h4>
                  <div className={styles.rB1}>
                    <h2>21</h2>
                    <p>Sec</p>
                  </div>
                </div>

              </div>
              <div className={styles.line}></div>
              <div className={styles.r6}>
                <h2>Size:&nbsp;M</h2>
                <div className={styles.r6Box}>
                  <div className={styles.r6B}>
                    <p>XS</p>
                  </div>
                  <div className={styles.r6B}>
                    <p>S</p>
                  </div>
                  <div className={styles.r6B}>
                    <p>M</p>
                  </div>
                  <div className={styles.r6B}>
                    <p>L</p>
                  </div>
                  <div className={styles.r6B}>
                    <p>XL</p>
                  </div>
                  <div className={styles.r6B}>
                    <p>XXL</p>
                  </div>
                  <div className={styles.r6L}>View size Guild</div>

                </div>
              </div>
              <div className={styles.r7}>
                <h2>Quantity:</h2>
                <div className={styles.r7Main}>
                  <div className={styles.r7Btn}>
                    <div className={styles.r7B1}>-</div>
                    <div className={styles.r7B2}>1</div>
                    <div className={styles.r7B3}>+</div>
                  </div>
                  <div className={styles.r7Btn1}>Add To</div>
                  <div className={styles.r7B4}><HiOutlineArrowPath /></div>
                  <div className={styles.r7B4}><BiHeart /></div>

                </div>

              </div>
              <div className={styles.r8}>

                <div className={styles.r8B1}></div>
                <div className={styles.r8B2}>Ready To Ship | Order Today</div>
                <div className={styles.r8B3}>i</div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.r9}>
                <div className={styles.rH1}>
                  <h2>Get it Today</h2>
                </div>
                <div className={styles.r9B1}>
                  <CiDeliveryTruck />
                  <div className={styles.r9C1}>
                    <p style={{ fontWeight: "bold" }}>Fast Shipping</p>
                    <p>Free Delivery When order from $500.</p>
                  </div>
                </div>
                <div className={styles.r9B1}>
                  <MdOutlineAssignmentReturn />
                  <div className={styles.r9C1}>
                    <p style={{ fontWeight: "600" }}>100 - Day Return</p>
                    <p>Not impressed? Get a refund. You have 100 days to break our hearts.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* //second section  */}
      <section className={styles.section}>
        <div className={styles.heroSection}>
          <div className={styles.heroDiv2}>
            <div className={styles.newSec}>
              <h1>Description</h1>
              <h1>Specification</h1>
              <h1>Review</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.heroSection}>
          <div className={`${styles.heroDiv} ${styles.heroDiv3}`}>
            <div className={styles.leftHero}>
              <div className={styles.lCon}>
                <h3>About This Products</h3>
                <p>Keep your home organized, yet elegant with storage cabinets by H&N Patio Furniture. These cabinets not only make a great storage units, but also bring a great decorative accent to your decor. Traditionally designed, they are perfect to be used in the hallway, living room, bedroom, office or any place where you need to store or display things. Made of high quality materials, they are sturdy and durable for years. Bring one-of-a-kind look to your interior with furniture from H&N Patio Furniture!</p>
              </div>
              <div className={styles.lCon}>
                <h3>Indochine Style</h3>
                <p>Indochine style Interior design is a mix of traditional Asian nostalgia and French romance. This skillfully crafted cabinet will perfectly enhance your indoor furnishing, while leaving a long-lasting impression and a traditional accent.</p>
              </div>
              <div className={styles.lCon}>
                <h3>features Products</h3>
                <p>Explore the many possibilities of transforming your home with our Decor Transfers.
                  Exceptionally detailed, gorgeously composed and effortlessly easy to apply, these transfers will transform your living space.</p>
              </div>
            </div>
            <div className={`${styles.rightHero} ${styles.rightHero2}`}>
              <div className={styles.rDivBox}>
                <div className={styles.rDivBoxN}>
                  <p>Rating</p>
                  <span style={{ display: "flex" }}>
                    <div className={styles.star}>
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSLine />
                    </div>
                    <span style={{ fontSize: "14px" }}>&#40;1.234&#41;</span></span>
                </div>

              </div>
              <div className={styles.rDivBox}>
                <div className={styles.rDivBoxN}>
                  <p>Outer Shell</p>
                  <span>100% Polyester</span>
                </div>
              </div>
              <div className={styles.rDivBox}>
                <div className={styles.rDivBoxN}>
                  <p>Lining</p>
                  <span>100% Polyurathane</span>
                </div>
              </div>
              <div className={styles.rDivBox}>
                <div className={styles.rDivBoxN}>
                  <p>Size</p>
                  <span>S,M,L,Xl</span>
                </div>
              </div>
              <div className={styles.rDivBox}>
                <div className={styles.rDivBoxN}>
                  <p>Colors</p>
                  <span>Red,Black,Blue,White</span>
                </div>
              </div>
              <div className={styles.rDivBox}>
                <div className={styles.rDivBoxN}>
                  <p>Outer Shell</p>
                  <span>100% Polyester</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.section2}`}>
        <div className={styles.heroSection}>
          <div className={styles.heroDiv4}>
            <div className={styles.lCon4}>
              <FaShippingFast />
              <h3>Shipping Faster</h3>
              <p>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</p>
            </div>
            <div className={styles.lCon4}>
              <FaCottonBureau />
              <h3>Cotton Material</h3>
              <p>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</p>
            </div>
            <div className={styles.lCon4}>
              <TfiThumbUp />
              <h3>High Quantity</h3>
              <p>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</p>
            </div>
            <div className={styles.lCon4}>
              <GiThreeLeaves />
              <h3>Highly Compatible</h3>
              <p>Use on walls, furniture, doors and many more surfaces. The possibilities are endless.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeC