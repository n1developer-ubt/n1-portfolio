import React from "react"
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
export default function MyName(props: { finishedLoading: boolean }) {
   const router = useRouter()
   const animationDuration = 0.7
   return (
      <div
         className='h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  '>
         <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
               opacity: {
                  duration: animationDuration,
               },
               y: {
                  duration: animationDuration,
               },
            }}
            className='text-AAsecondary font-mono'>
            Hi, my name is
         </motion.span>
         <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
               opacity: {
                  duration: animationDuration,
               },
               y: {
                  duration: animationDuration,
               },
            }}
            className='text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4'>
            Usama Bin Tariq.
         </motion.h1>
         <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
               opacity: {
                  duration: animationDuration,
               },
               y: {
                  duration: animationDuration,
               },
            }}
            className='text-gray-400 font-bold text-3xl lg:text-5xl sm:text-3xl md:text-4xl mt-4'>
            Transforming Ideas into Digital Solutions.
         </motion.h2>

         <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
               opacity: {
                  duration: animationDuration,
               },
               y: {
                  duration: animationDuration,
               },
            }}
            className='text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider'>
            I&apos;m a{" "}
            <span className='text-AAsecondary'>software engineer</span>, i
            possess strong problem-solving skills and specialize in crafting
            exceptional <br className='2xl:block hidden' />
            digital experiences. My current area of focus is in the{" "}
            <span className='text-AAsecondary'>web3 domain</span>, where I
            actively engage in developing <br className='2xl:block hidden' />
            and designing immersive{" "}
            <span className='text-AAsecondary'>web3 applications</span>. This
            involves working with{" "}
            <span className='text-AAsecondary'>Smart Contracts</span> on the{" "}
            <span className='text-AAsecondary'>Blockchain</span>.
            {/* <br className="2xl:block hidden" />creating and deploying them, as well as implementing the
        front-end components to enable seamless user interactions. */}
         </motion.h3>
         <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
               opacity: {
                  duration: animationDuration,
               },
               y: {
                  duration: animationDuration,
               },
            }}
            className='mt-12'>
            <a href={"/resume.pdf"} target={"_blank"} rel='noreferrer'>
               <button className='bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary'>
                  Check out my resume!
               </button>
            </a>
         </motion.div>
      </div>
   )
}
