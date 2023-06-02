import { motion } from "framer-motion"

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


export default function MotionX() {
    
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 1.2, ...transition },
      }}
      className='scroll-for-more'>
   
      <div className='text'>
        Scroll <br />
        for more
      </div>
    </motion.div>
  );
  
    ;

  //return <p>hi motions</p>;
  }