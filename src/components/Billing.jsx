import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  const controls = useAnimation();

  const handleInView = (inView) => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  };

  return (
    <InView triggerOnce={true} onChange={handleInView}>
      {({ ref, inView }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          id="product"
          className={layout.sectionReverse}
        >
          <div className={layout.sectionImgReverse}>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.2 }}
              src={bill}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5]"
            />

            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
          </div>

          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Easily control your <br className="sm:block hidden" /> billing &
              invoicing
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>

            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
              <img
                src={apple}
                alt="google_play"
                className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
              />
              <img
                src={google}
                alt="google_play"
                className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </motion.section>
      )}
    </InView>
  );
};

export default Billing;
