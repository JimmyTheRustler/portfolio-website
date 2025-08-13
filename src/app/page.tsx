'use client';

import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-900 dark:text-white">
              James O'Brien
            </div>
            <div className="flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
              {/*<ThemeToggle /> UNCOMMENT THIS TO ENABLE THEME TOGGLE*/}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            James O'Brien
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            jamesseanobrien@gmail.com
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            A Backend Software Engineer with expertise in full-stack development, database management, and system integration. 
            Passionate about solving complex technical challenges and delivering efficient solutions that drive business value.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">About</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            Highly skilled and proactive Software Engineer with expertise in backend development, database management, 
            and full-stack applications. Experienced in handling complex data migrations, developing automation scripts, 
            and collaborating with cross-functional teams to deliver high-quality solutions. Passionate about continuous 
            learning and implementing best practices in software engineering.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Experience</h2>
          
          <div className="space-y-12">
            {/* Job 1 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend Software Engineer</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">February 2023 - August 2024</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Xactly, Remote</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Handled customer support tickets related to issues with Incent software, effectively diagnosing and resolving 
                problems to enhance user experience. Investigated miscalculations by analyzing user data logs, identifying 
                errors, and providing customers with detailed instructions to rectify issues independently.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Achievements</h5>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                    <li>• Addressed and resolved high-priority, customer-facing full-stack issues to maintain service reliability and client satisfaction.</li>
                    <li>• Reproduced and diagnosed software malfunctions caused by edge cases, utilizing error logs and code reviews</li>
                    <li>• Developed and executed SQL queries for bulk data operations, ensuring data integrity</li>
                    <li>• Created extraction scripts in Java to automate data retrieval processes</li>
                    <li>• Collaborated with support and DBA teams to resolve software performance issues</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies</h5>
                  <p className="text-gray-600 dark:text-gray-400">Java, Java Spring, SQL, Database Management, Customer Support Systems</p>
                </div>
              </div>
            </div>

            {/* Job 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Programmer Analyst</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">September 2021 - February 2023</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">PennState Health, Hershey, PA</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Contributed to the development of a web-based lab management platform using Django and Angular, implementing 
                back-end functionality for lab creation and research data tracking, and ensuring code quality through unit 
                tests and code reviews.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Achievements</h5>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                    <li>• Developed and integrated full-stack components for the Lab Management platform to enhance functionality.</li>
                    <li>• Developed and implemented a Python script to process 4TB of lost DNA data on HPC clusters using SLURM</li>
                    <li>• Reverse-engineered database structure and developed Python scripts to transfer 1TB of data</li>
                    <li>• Designed and implemented Python scripts to process 4TB of lost DNA data on HPC clusters using SLURM</li>
                    <li>• Completed the project in 2 months as the sole developer, delivering an efficient tool</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies</h5>
                  <p className="text-gray-600 dark:text-gray-400">Python, Django, Angular, Oracle, MySQL, HPC Clusters, SLURM</p>
                </div>
              </div>
            </div>

            {/* Job 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Support/General IT</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">2016 - 2019</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Bucknell University, Lewisburg, PA</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Collaborated with a team of 5 to deliver on-site IT support, including hardware installation and software 
                troubleshooting. Led efforts to coordinate and deploy department-wide computer upgrades across the organization.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Responsibilities</h5>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                    <li>• Hardware installation and software troubleshooting</li>
                    <li>• Department-wide computer upgrades coordination</li>
                    <li>• Customized Windows OS imaging and installation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies</h5>
                  <p className="text-gray-600 dark:text-gray-400">Windows OS, Hardware Support, IT Infrastructure</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Node.js Discord Bot</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Since 2019</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Personal Project</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Developed a Discord bot using Node.js and MySQL to identify shared games among friends for multiplayer sessions. 
                Integrated Steam's API to access and compile data on friends' game libraries, creating a list of common games.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies</h5>
                  <p className="text-gray-600 dark:text-gray-400">Node.js, MySQL, Discord API, Steam API</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Education</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Elizabethtown College</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">2020</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                3.68 GPA | Elizabethtown, PA
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Computer Science Tutor</h3>
                <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">August 2018 - May 2020</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Elizabethtown College</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Selected by Dr. Leap, Chair of the Computer Science Department, to assist students in CS I, CS II, 
                Data Structures, and Systems Programming based on subject expertise. Delivered personalized instruction 
                to enhance one-on-one student learning experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills & Abilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Programming Languages</h3>
              <p className="text-gray-600 dark:text-gray-400">Java, Java Spring, Python, JavaScript, TypeScript, C#, C++, HTML/CSS</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Databases & APIs</h3>
              <p className="text-gray-600 dark:text-gray-400">MySQL, SQL, REST API, Database Design</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Frameworks & Libraries</h3>
              <p className="text-gray-600 dark:text-gray-400">React, Next.js, Angular, Django, Node.js</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Platforms & Tools</h3>
              <p className="text-gray-600 dark:text-gray-400">Mac, Linux, Windows, Git, GitHub, GitLab, Agile, Unit Testing</p>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Interests</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I like to build new projects start to finish as a way of building a deep understanding 
              of the technology I am trying to learn.
            </p>
            <p>
              I like to solve problems. The bigger the problem is, the pleasure by solving it grows bigger. 
              I hope I have a bunch of tasks waiting for me every day, mark them done and say 
              "It's been a very busy but productive day"
            </p>
            <p>
              Passionate about gaming and technology, I enjoy developing tools that enhance user experiences 
              and solve real-world problems through innovative software solutions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact</h2>
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Email:</span> jamesseanobrien@gmail.com
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Location:</span> Pennsylvania, United States
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">LinkedIn:</span> 
              <a href="https://www.linkedin.com/in/jimobr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 ml-2">linkedin.com/in/jimobr</a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">GitHub:</span> 
              <a href="https://github.com/JimmyTheRustler" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 ml-2">github.com/JimmyTheRustler</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © 2025 James O'Brien. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
