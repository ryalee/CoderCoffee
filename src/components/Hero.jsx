
import BgImage from "../assets/bg-slate.png";
import CoffeeMain from "../assets/black.png";
import { motion } from "framer-motion";
import Nav from "./Nav";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false)

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          <Nav sidebar={sidebar} setSidebar={setSidebar} />

          {/* HERO */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* hero text */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Blvck Tumbler
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    aliquam, porro suscipit cupiditate reiciendis sint odio
                    debitis voluptatem eos rerum atque minus.
                  </h1>
                </div>

                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* hero image */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={CoffeeMain}
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />

              {/* orange circle */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute top-24 -right-16 border-primary rounded-full h-[180px] w-[180px] border-[20px] z-10"
              ></motion.div>

              {/* background big text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>

            {/* side text */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>

              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Blvck Tumbler </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
                    aliquam, porro suscipit cupiditate reiciendis sint odio
                    debitis voluptatem eos rerum atque minus.
                  </h1>
                </div>

                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* sidebar menu */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{x:0}}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>

                {/* social links */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>

                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
