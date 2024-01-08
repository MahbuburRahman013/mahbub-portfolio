import "./hero.scss";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";

const pdfFile = 'https://drive.google.com/u/0/uc?id=1XASQ50oP_JtOXMjC2z0X_uYJyTkwFCsk&export=download'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};



const Hero = () => {

  // const downloadFdf = () => {
  //   const aTag = document.createElement('a')
  //   aTag.href = 'http://localhost:5173'
  //   aTag.setAttribute('download', pdfFile)
  //   document.body.appendChild(aTag);
  //   aTag.click()
  //   aTag.remove()
  // }



  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hello, I am Mahbubur Rahman</motion.h2>
          <motion.h1 variants={textVariants}>
            A Frontend Web Developer.
          </motion.h1>
         <a 
         href={pdfFile}
         download="Example-PDF-document"
         target="_blank"
         rel="noreferrer"
         >
         <motion.div variants={textVariants} className="buttons">
            <motion.button className="resumeButton" variants={textVariants}><span className="icon"><MdOutlineFileDownload></MdOutlineFileDownload></span> Download Resume</motion.button>
          </motion.div>
         </a>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <a
      href={pdfFile}
      download="Example-PDF-document"
      target="_blank"
      rel="noreferrer"
      >
      <motion.div
        // onClick={downloadFdf}
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        I am a React Js Developer!
      </motion.div>
      </a>

    </div>
  );
};

export default Hero;
