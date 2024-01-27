import FooterImage from "../../assets/images/FooterImage";

const Footer = () => {
  return (
    <footer className="text-white py-16 px-8 w-full h-[15rem] relative flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 TailoredUI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/TailoredUI/TailoredUI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-8 h-8 cursor-pointer bg-white rounded-full p-1"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a
            href="https://github.com/TailoredUI/TailoredUI/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Policy
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 hidden md:block -z-10 opacity-50">
        <FooterImage />
      </div>
    </footer>
  );
};

export default Footer;
