import React from "react";
import { styles } from "../style";
import chatAssistant from "../assets/chat-assistant.png";
import verify from "../assets/verify.svg";
import angle from "../assets/angle.svg";
import angle2 from "../assets/angle2.svg";
import bag from "../assets/bag.jpg";
import filter from "../assets/filter.svg";
import cross from "../assets/cross.svg";
import clip from "../assets/clip.svg";
import krunk from "../assets/krunk.png";

const ChatSection = () => {
  return (
    <div
      className={`${styles.flexStart} font-Poppins flex-col w-[36rem] h-[80rem] shadow-lg my-[6rem] rounded-[2rem] border-[0.7rem] border-white bg-[#fff]`}
    >
      <div
        className={` ${styles.flexCenter} relative text-btnBlue bg-bgBlue p-[2rem] mb-[3rem] rounded-t-[2rem] w-full h-[8rem]`}
      >
        <div className={`${styles.flexCenter} w-full h-full `}>
          <img
            src={chatAssistant}
            className={`w-[4rem] h-[4rem] object-cover rounded-full`}
            alt=""
          />
          <div
            className={` top-[5rem] left-[4.8rem] w-[0.8rem] h-[0.8rem] absolute rounded-full bg-green `}
          />
          <div
            className={`${styles.flexCenter} ml-[1rem] text-left flex-col w-full`}
          >
            <div className={`${styles.flexStart} w-full`}>
              <h2
                className={`${styles.flexStart} w-full text-[1.7rem] font-semibold`}
              >
                Timpu
                <img src={verify} className={`w-[1.5rem] ml-[1rem]`} alt="" />
              </h2>
            </div>

            <h3 className={`w-full  text-[1.3rem] font-medium`}>
              Chat assistant
            </h3>
          </div>
        </div>
        <div className={`relative flex justify-end items-end h-full w-full`}>
          <div className={` text-[1.3rem] font-medium`}>Online</div>
          <div
            className={` top-[2.7rem] left-[9.8rem] w-[0.8rem] h-[0.8rem] absolute rounded-full bg-green `}
          />
        </div>
      </div>
      <div className={`${styles.flexStart} w-full p-[1rem] py-0`}>
        <div className={`${styles.flexStart} flex-col`}>
          <div
            className={`${styles.card} max-w-[25rem] bg-gradient-to-br from-[#E5EEFF] to-[#fff] `}
          >
            <h4>
              Hi Sam! I am your personal shopping assistant, how can i help you
              today ?
            </h4>
          </div>
          <h5
            className={`text-left text-[1rem] leading-[1.5rem] px-[1rem] py-[0.5rem] w-full`}
          >
            4:45 PM
          </h5>
        </div>
      </div>
      <div className={`${styles.flexEnd} w-full p-[1rem] py-0`}>
        <div className={`${styles.flexEnd} flex-col`}>
          <div className={`${styles.card} max-w-[21rem] bg-secondary`}>
            <h4>I am looking for a haand bag, with long strap.</h4>
          </div>
          <h5
            className={`text-right text-[1rem] leading-[1.5rem] px-[1rem] py-[0.5rem] w-full`}
          >
            4:46 PM
          </h5>
        </div>
      </div>
      <div className={`w-full p-[1rem] pt-0 overflow-hidden h-[8rem]`}>
        <div className={`relative w-full`}>
          <h3 className={`text-[1.3rem] text-grey`}>
            Popular tags for handbag
          </h3>
          <div
            className={`${styles.flexBetween} text-center absolute top-[1rem] ss:top-[2.5rem] mt-[1rem]`}
          >
            <div className={`${styles.tagText} w-[6rem]`}>Clutch</div>
            <div className={`${styles.tagText} w-[10rem] ml-[1rem]`}>
              Fabric lining
            </div>
            <div className={`${styles.tagText} w-[6rem] ml-[1rem]`}>Baggit</div>
            <div className={`${styles.tagText} w-[4.5rem] ml-[1rem]`}>
              Multi
            </div>
          </div>
          <div
            className={`bg-white p-[0.5rem] absolute right-0 top-[1rem] ss:top-[3.1rem]`}
          >
            <img src={angle} className={`w-[4srem]`} alt="" />
          </div>
        </div>
      </div>

      <div className={`${styles.flexStart} w-full p-[1rem]`}>
        <div className={`${styles.flexStart} flex-col`}>
          <div
            className={`${styles.card} max-w-[25rem] bg-gradient-to-br from-[#E5EEFF] to-[#FAFCFF] `}
          >
            <div
              className={` ${styles.flexBetween} h-[7rem] p-[1rem] bg-white rounded-[1rem]`}
            >
              <div className={`h-full w-[10rem]`}>
                <img
                  src={bag}
                  className={`h-full w-full object-cover border-[1px] border-grey/45 rounded-[0.5rem]`}
                  alt=""
                />
              </div>
              <div
                className={`${styles.flexBetween} ml-[2rem] flex-col w-full`}
              >
                <h4 className={`${styles.flexBetween} font-medium w-full`}>
                  Bags on Timpu
                  <img src={verify} className={`w-[2rem]`} alt="" />
                </h4>
                <h5 className={`${styles.flexStart} text-grey w-full`}>
                  1123 products
                  <img src={angle} className={`w-[3rem] ml-[0.7rem]`} alt="" />
                </h5>
              </div>
            </div>
            <h4 className={`mt-[1rem]`}>
              Or set filter and help us choose the best bag for you.
            </h4>
          </div>
          <h5
            className={`text-left text-[1rem] leading-[1.5rem] px-[1rem] py-[0.5rem] w-full`}
          >
            4:48 PM
          </h5>
        </div>
      </div>
      <div className={`text-[1.3rem] w-full px-[1rem]`}>
        <div className={`${styles.flexBetween} w-full`}>
          <h4 className={`text-grey font-medium`}>Select filters</h4>
          <div className={`${styles.flexBetween}`}>
            <img src={filter} alt="" />
            <h4 className={`text-[#666666] font-medium`}>Filter</h4>
          </div>
        </div>
        <div className={`${styles.flexStart} flex-wrap w-full `}>
          <div
            className={` ${styles.flexBetween} ${styles.filterText} mr-[1rem] my-[0.5rem]`}
          >
            Strap - Long <img src={cross} className={`w-[2rem]`} alt="" />{" "}
          </div>
          <div
            className={` ${styles.flexBetween} ${styles.filterText} mr-[1rem] my-[0.5rem]`}
          >
            Colour <img src={cross} className={`w-[2rem]`} alt="" />{" "}
          </div>
          <div
            className={` ${styles.flexBetween} ${styles.filterText} mr-[1rem] my-[0.5rem]`}
          >
            Size <img src={cross} className={`w-[2rem]`} alt="" />{" "}
          </div>
          <div
            className={` ${styles.flexBetween} ${styles.filterText} mr-[1rem] my-[0.5rem]`}
          >
            Brand <img src={cross} className={`w-[2rem]`} alt="" />{" "}
          </div>
          <div
            className={` ${styles.flexBetween} ${styles.filterText} mr-[1rem] my-[0.5rem] `}
          >
            Material <img src={cross} className={`w-[2rem]`} alt="" />{" "}
          </div>
        </div>
      </div>
      <div
        className={`bg-bgBlue w-full mt-[1rem] text-[1.3rem] rounded-b-[2rem] `}
      >
        <div className={`${styles.flexBetween} w-full h-[4.5rem] p-[0.5rem] `}>
          <div
            className={`${styles.flexBetween} bg-white w-full h-full rounded-[0.5rem] p-[1rem] mr-[1rem]`}
          >
            <input
              type="text"
              className={`bg-transparent outline-none cursor-text w-full h-full `}
              placeholder="Type your message"
            />
            <img src={clip} className={`w-[1.6rem] h-[1.6rem]`} alt="" />
          </div>
          <div
            className={`${styles.flexCenter}  w-[7rem] h-full bg-btnBlue rounded-[0.5rem]`}
          >
            <img src={angle2} alt="" />
          </div>
        </div>
        <div className={`${styles.flexCenter} pt-[1rem] pb-[0.8rem] text-grey`}>
          Powered by
          <span className={`${styles.flexCenter} text-[#7A7F8C] font-semibold`}>
            Krunk.ai{" "}
            <img
              src={krunk}
              className={`ml-[0.5rem] w-[2rem] grayscale`}
              alt=""
            />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
