import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
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
          className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`flex-1 flex justify-start items-center flex-row m-3`}
            >
              <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                {stat.value}
              </h4>
              <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </motion.section>
      )}
    </InView>
  );
};

export default Stats;
