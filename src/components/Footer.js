import React from "react";
import Logo from "./../assets/Asbeza.png";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

//share import
import {
  FacebookShareButton,
  PinterestShareButton,
  TelegramShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const Footer = () => {
  const date = new Date();
  return (
    <div className="mt-10 bg-[#00332e] relative pb-10">
      <div className="w-[80%] mx-auto sm:flex flex-row justify-between text-white py-4">
        <div className="w-[12%] h-[12%] flex items-center">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <h3 className="text-xl font-medium text-[#9fcf37]">Asbeza.</h3>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="text-xl font-medium text-[#9fcf37]">Asbeza</p>
          </div>
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>History</p>
          </div>
          <div>
            <p>Profile</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="text-xl font-medium text-[#9fcf37]">Help</p>
          </div>
          <div>
            <p>Terms and Conditions</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="sm:flex flex-col items-center">
          <div className="mb-2">
            <p className="text-xl font-medium text-[#9fcf37]">Social Shares</p>
          </div>
          <div className="flex gap-2 text-[1.3rem]">
            <FacebookShareButton url={"http://ermiastsegu.netlify.app/"}>
              <BsFacebook />
            </FacebookShareButton>
            <PinterestShareButton
              media={"./carrot.jpg"}
              url={"http://ermiastsegu.netlify.app/"}
            >
              <BsPinterest />
            </PinterestShareButton>
            <TelegramShareButton
              title={"Asbeza"}
              url={"http://ermiastsegu.netlify.app/"}
            >
              <BsTelegram />
            </TelegramShareButton>
            <TwitterShareButton
              title={"Asbeza"}
              url={"http://ermiastsegu.netlify.app/"}
            >
              <BsTwitter />
            </TwitterShareButton>
            <LinkedinShareButton
              title={"Asbeza"}
              url={"http://ermiastsegu.netlify.app/"}
            >
              <AiFillLinkedin />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <p className="text-white pt-10">
          &copy; {`${date.getFullYear()}, Azbeza.`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
