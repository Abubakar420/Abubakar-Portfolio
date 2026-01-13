import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/abubakarprofile.jpg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>
                Nice to meet you! 👋🏻
              </motion.h4>
              <motion.h5 variants={paragraphVariants}>
                I’m a Front-End Developer
                <span style={{ color: "var(--hl-color)" }}>.</span>
              </motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                I’m a Front-End Developer with a strong passion for crafting beautiful, intuitive, and high-performance user interfaces that deliver exceptional user experiences. With a Bachelor’s degree in   <span style={{ color: "var(--hl-color)" }}>
                    {" "}
                    Computer Science{" "}
                  </span> I specialize in transforming complex ideas into 

<span style={{ color: "var(--hl-color)", marginLeft: "1px" }}>                      elegant, accessible,
                   </span>

 and
 <span style={{ color: "var(--hl-color)" }}> responsive web applications.
                   </span>
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                 My expertise lies in modern front-end technologies such as 
<span style={{ color: "var(--hl-color)", marginLeft: "2px" }}>  
                 JavaScript, TypeScript, React, HTML5, CSS3,
                  </span>

                  and modern UI frameworks, along with a deep understanding of component-driven architecture, state management, and performance optimization. I care deeply about 
<span style={{ color: "var(--hl-color)", marginLeft: "2px",marginRight: "2px" }}>
                  
                  clean code, scalability, accessibility, and pixel-perfect design, 
                                    </span>

                  ensuring every interface feels seamless across devices and browsers.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                 Driven by a user-first mindset, I collaborate closely with designers and backend teams to build engaging digital experiences that are not only visually compelling but also fast, reliable, and maintainable. I continuously explore emerging trends and tools in the front-end ecosystem to stay ahead and deliver future-ready solutions.
                </motion.p>
                <motion.p variants={paragraphVariants} style={{marginTop:'5px'}}>
                  When code isn't my focus, I'm conquering cycling routes,
                  feeling the wind on spirited runs, and fueling my love for
                  animal
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
