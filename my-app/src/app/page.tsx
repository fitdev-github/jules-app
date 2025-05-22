import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gray-900 text-white p-4 sm:p-8 pt-16 sm:pt-24">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-full px-4 sm:px-0">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I&apos;m [Your Name] - Frontend Developer
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Crafting beautiful and responsive web experiences. I turn ideas into reality with code.
        </p>
        <button className="mt-8 px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          View My Work
        </button>
      </div>

      {/* About Me Section */}
      <section className="mt-16 sm:mt-20 max-w-2xl w-full text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          I am a passionate frontend developer dedicated to creating intuitive and engaging user interfaces.
          With a strong foundation in modern JavaScript frameworks like React and Next.js, and a keen eye for design, I specialize in building responsive and performant web applications. I thrive on solving complex problems and continuously learning new technologies to deliver exceptional digital experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-16 sm:mt-20 max-w-5xl w-full px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Project Card Template */}
          {[
            { title: "Project Alpha", description: "A web application for managing tasks, built with a focus on user experience and real-time collaboration.", tech: "React, Next.js, Tailwind CSS, Firebase" },
            { title: "Project Beta", description: "An e-commerce platform with a custom CMS, designed for scalability and ease of use.", tech: "Vue.js, Nuxt.js, Node.js, PostgreSQL" },
            { title: "Project Gamma", description: "A mobile application for tracking personal fitness goals and progress.", tech: "React Native, Expo, GraphQL" }
          ].map((project) => (
            <div key={project.title} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
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
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-16 sm:mt-20 max-w-4xl w-full text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
            "Tailwind CSS", "Git", "Responsive Design", "API Integration",
            "Node.js", "Firebase", "GraphQL", "REST APIs", "UI/UX Principles"
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-700 text-gray-300 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium shadow-md hover:bg-gray-600 transition duration-300 ease-in-out"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 sm:mt-20 max-w-2xl w-full text-center pb-16 sm:pb-24 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
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
      </section>
    </main>
  );
}
