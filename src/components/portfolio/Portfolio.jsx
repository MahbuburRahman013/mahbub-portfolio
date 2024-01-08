import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Gulhub Home",
    link: 'https://assignment-twelve-73e3a.web.app/',
    img: "https://i.ibb.co/C83Zcms/Screenshot-63.png",
    desc: "Gulhub Home: Effortless house rentals for users, members enjoy a dashboard, payment ease, and coupon options. Admins have full control. Built with React, Tailwind CSS, Firebase, MongoDB, and more for a seamless experience",
  },
  {
    id: 2,
    link: 'https://assignment-eleven-66826.web.app/',
    title: "Study Hub",
    img: "https://i.ibb.co/F3MtMhw/Screenshot-61.png",
    desc: "Study Hub: Your seamless education platform with roles for users, responsive design, and features like assignment creation, feedback, and error messaging. Join us for collaborative learning!",
  },
  {
    id: 3,
    link: 'https://assignment-ten-5f328.web.app/',
    title: "ROADWIZ",
    img: "https://i.ibb.co/ggVzmMm/Screenshot-62.png",
    desc: "ROADWIZ: Simplifying online shopping with easy cart management, secure login features, and advanced technologies like React, Tailwind CSS, Firebase, and MongoDB.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX , overflow:'hidden'}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
