import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  const controls = useAnimation();

  const handleInView = (inView) => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  };

  return (
    <InView triggerOnce={true} onChange={handleInView}>
      {({ ref, inView }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className={layout.section}
        >
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Find a better card deal <br className="sm:block hidden" /> in few easy
              steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <Button styles={`mt-10`} />
          </div>

          <div className={layout.sectionImg}>
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.2 }}
              src={card}
              alt="billing"
              className="w-[100%] h-[100%]"
            />
          </div>
        </motion.section>
      )}
    </InView>
  );
};

export default CardDeal;
