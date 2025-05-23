"use client"; // Required for Framer Motion components
import Image from "next/image";
import { motion } from "framer-motion";
import { UserIcon, CodeBracketIcon, CogIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const AnimatedWaveBackground = () => (
    <motion.svg
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMid slice" // Changed to slice to ensure it covers, might need adjustment
    >
      <defs>
        <pattern id="wavePattern" patternUnits="userSpaceOnUse" width="200" height="100" x="0" y="0">
          <motion.path
            d="M0,50 Q50,0 100,50 T200,50"
            stroke="rgba(55, 65, 81, 0.5)" // gray-700 with 50% opacity
            strokeWidth="2"
            fill="none"
            initial={{ x: 0 }}
            animate={{ x: [-200, 0] }} // Loop path horizontally
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
          <motion.path
            d="M0,60 Q50,10 100,60 T200,60" // Slightly offset wave
            stroke="rgba(75, 85, 99, 0.4)" // gray-600 with 40% opacity
            strokeWidth="2"
            fill="none"
            initial={{ x: -50 }} // Start with an offset
            animate={{ x: [-250, -50] }} // Loop path horizontally
            transition={{ duration: 12, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 2 }} // Slower and delayed
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#wavePattern)" />
    </motion.svg>
  );

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start bg-gray-900 text-white p-4 sm:p-8 pt-16 sm:pt-24 overflow-hidden">
      <AnimatedWaveBackground />
      {/* Hero Section needs to be above the background, ensure z-index if necessary */}
      <motion.div
        style={{ zIndex: 1 }} // Ensure content is above background
        className="text-center space-y-6 max-w-full px-4 sm:px-0 relative" // Added relative for z-index context
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
          }}
        >
          Hi, I&apos;m [Your Name] - Frontend Developer
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2, ease: "easeInOut" } },
          }}
        >
          Crafting beautiful and responsive web experiences. I turn ideas into reality with code.
        </motion.p>
        <motion.button
          className="mt-8 px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4, ease: "easeInOut" } },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* About Me Section */}
      <motion.section
        className="mt-16 sm:mt-20 max-w-2xl w-full text-center px-4 relative" // Added relative for z-index context
        style={{ zIndex: 1 }} // Ensure content is above background
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gray-700 flex items-center justify-center text-gray-500 mb-6 md:mb-0 md:mr-8 flex-shrink-0">
            <UserIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            {/* Or: <Image src="/path-to-your-headshot.jpg" alt="Your Name" layout="fill" className="rounded-full object-cover" /> */}
          </div>
          <div className="flex-grow">
            <h2 className="flex items-center justify-center md:justify-start text-3xl sm:text-4xl font-bold mb-6">
              <UserIcon className="h-7 w-7 sm:h-8 sm:w-8 mr-3 text-blue-400" />
              About Me
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I am a passionate frontend developer dedicated to creating intuitive and engaging user interfaces.
              With a strong foundation in modern JavaScript frameworks like React and Next.js, and a keen eye for design, I specialize in building responsive and performant web applications. I thrive on solving complex problems and continuously learning new technologies to deliver exceptional digital experiences.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="mt-16 sm:mt-20 max-w-5xl w-full px-4 relative" // Added relative for z-index context
        style={{ zIndex: 1 }} // Ensure content is above background
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className="flex items-center justify-center text-3xl sm:text-4xl font-bold mb-8 text-center">
          <CodeBracketIcon className="h-7 w-7 sm:h-8 sm:w-8 mr-3 text-blue-400" />
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Project Card Template */}
          {[
            { title: "Project Alpha", description: "A web application for managing tasks, built with a focus on user experience and real-time collaboration.", tech: "React, Next.js, Tailwind CSS, Firebase" },
            { title: "Project Beta", description: "An e-commerce platform with a custom CMS, designed for scalability and ease of use.", tech: "Vue.js, Nuxt.js, Node.js, PostgreSQL" },
            { title: "Project Gamma", description: "A mobile application for tracking personal fitness goals and progress.", tech: "React Native, Expo, GraphQL" }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform overflow-hidden" // Added p-6 and overflow-hidden
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }} // Stagger project cards
              whileHover={{ scale: 1.05, rotate: 1, transition: { type: "spring", stiffness: 300, damping: 10 } }}
            >
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 mb-4"> 
                {/* Image placeholder now has rounded-lg for all corners as it's contained by card padding */}
                <CodeBracketIcon className="w-12 h-12" />
                {/* Or: <Image src={project.imageUrl || "/placeholder-project.png"} alt={project.title} layout="fill" className="rounded-lg object-cover" /> */}
              </div>
              <div> {/* Removed p-6 pt-0, relies on card's p-6 now */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  {project.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  Technologies: {project.tech}
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">Live Demo</a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">View Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mt-16 sm:mt-20 max-w-4xl w-full text-center px-4 relative" // Added relative for z-index context
        style={{ zIndex: 1 }} // Ensure content is above background
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className="flex items-center justify-center text-3xl sm:text-4xl font-bold mb-8">
          <CogIcon className="h-7 w-7 sm:h-8 sm:w-8 mr-3 text-blue-400" />
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
            "Tailwind CSS", "Git", "Responsive Design", "API Integration",
            "Node.js", "Firebase", "GraphQL", "REST APIs", "UI/UX Principles"
          ].map((skill, index) => (
            <motion.span
              key={skill}
              className="bg-gray-700 text-gray-300 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium shadow-md hover:bg-gray-600 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }} // Trigger when skill itself is 50% visible
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeInOut" }} // Stagger skills
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="mt-16 sm:mt-20 max-w-2xl w-full text-center pb-16 sm:pb-24 px-4 relative" // Added relative for z-index context
        style={{ zIndex: 1 }} // Ensure content is above background
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2 className="flex items-center justify-center text-3xl sm:text-4xl font-bold mb-8">
          <EnvelopeIcon className="h-7 w-7 sm:h-8 sm:w-8 mr-3 text-blue-400" />
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-6">
          Let&apos;s connect! Feel free to reach out if you have any questions, project ideas, or just want to say hi.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300 text-lg sm:text-xl">
            LinkedIn
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300 text-lg sm:text-xl">
            GitHub
          </a>
        </div>
        <p className="text-lg sm:text-xl text-gray-300">
          <a href="mailto:your.email@example.com" className="hover:text-blue-300 transition duration-300">
            your.email@example.com
          </a>
        </p>
      </motion.section>
    </main>
  );
}
