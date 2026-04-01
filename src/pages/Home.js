import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { faGithub, faInstagram, faFacebook, faLine, faTiktok, faReact, faNode, faDocker, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons';
// eslint-disable-next-line no-unused-vars
import { faInfoCircle, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// ⬇️ ใช้ LanguageContext
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

export default function Home() {
  const [isLangOpen, setIsLangOpen] = useState(false);  // dropdown ภาษา
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // เมนูมือถือ
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false; // default = Light
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  const { lang, toggleLanguage } = useLanguage();

  // ✅ translations EN/TH
  const translations = {
    en: {
      about: "About Me",
      aboutText:
      "I graduated with a degree in Information Technology from Kasetsart University, Kamphaeng Saen Campus. I have extensive experience in coding, full-stack development (React & Django), database management, and mobile app development. I possess strong skills in analyzing, debugging, and fixing complex technical issues, as well as designing system workflows. Passionate about hardware and IoT, I am currently furthering my expertise in DevOps to enhance system operations and deployment efficiency. I am committed to continuous learning and contributing my technical skills to drive organizational success.",
      skills: "Hard Skills",
      hobbies: "Work & Hobbies",
      hobbiesText: "Explore my work and hobbies — from programming projects, music, open house events, to outdoor cinema. Click below to see full details and photos.",
      experience: "Experience",
      experienceText: "Hands-on experience in IoT, Web Applications, Mobile Development, Game Development, and UI/UX Design. Click below to explore all projects with details and source code.",
      certificates: "Certificates",
      certificatesText: "Certificates and achievements from outstanding student awards, bootcamps, and programming courses. Click below to see the full list with previews.",
      education: "Education",
      contact: "Contact",
      follow: "Follow Me",
      viewHobbies: "🌟 View Work & Hobbies",
      viewExperience: "💼 View Experience",
      viewCertificates: "🏆 View All Certificates",
      downloadTranscript: "Download Transcript",
    },
    th: {
      about: "เกี่ยวกับฉัน",
      aboutText:
      "ผมสำเร็จการศึกษาจากสาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน มีประสบการณ์ด้านการเขียนโค้ด พัฒนาเว็บทั้งฝั่ง Frontend และ Backend (React & Django) การจัดการฐานข้อมูล และพัฒนาแอปบนมือถือ ผมมีทักษะที่โดดเด่นด้านการ วิเคราะห์ ดีบัก และแก้ไขบั๊ก (Debugging & Bug Fixing) ปัญหาเชิงลึกที่ซับซ้อน รวมถึงการออกแบบ System Workflow นอกจากนี้ผมยังมีความสนใจในด้าน Hardware และ IoT โดยปัจจุบันกำลัง ศึกษาต่อยอดในด้าน DevOps เพื่อเสริมสร้างทักษะการจัดการระบบและกระบวนการ Deploy ให้มีประสิทธิภาพสูงสุด พร้อมมุ่งมั่นที่จะพัฒนาตนเองอย่างต่อเนื่องเพื่อนำความรู้ความสามารถไปสร้างประโยชน์ให้กับองค์กร",
      skills: "Hard Skills",
      hobbies: "งานและงานอดิเรก",
      hobbiesText: "สำรวจงานและงานอดิเรกของผม — ตั้งแต่งานโปรแกรมเมอร์ ก่อสร้าง ดนตรี งาน Open House ไปจนถึงหนังกลางแปลง กดด้านล่างเพื่อดูรายละเอียดและรูปภาพทั้งหมด",
      experience: "ประสบการณ์",
      experienceText: "ประสบการณ์ตรงในด้าน IoT, การพัฒนาเว็บ, แอปมือถือ, เกม และการออกแบบ UI/UX คลิกด้านล่างเพื่อดูรายละเอียดและโค้ดทั้งหมด",
      certificates: "เกียรติบัตร",
      certificatesText: "เกียรติบัตรนิสิตดีเด่น ความสำเร็จจากการอบรม และคอร์สโปรแกรมมิ่ง คลิกด้านล่างเพื่อดูรายการทั้งหมด",
      education: "การศึกษา",
      contact: "ติดต่อ",
      follow: "ติดตามฉัน",
      viewHobbies: "🌟 ดูงานและงานอดิเรก",
      viewExperience: "💼 ดูประสบการณ์",
      viewCertificates: "🏆 ดูเกียรติบัตรทั้งหมด",
      downloadTranscript: "ดาวน์โหลดผลการเรียน",
    },
  };

  const menuItems = [
    "about",
    "skills",
    "hobbies",
    "experience",
    "certificate",
    "education",
    "contact",
  ];

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-sans relative overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full px-6 py-4 mt-4 z-50">
        <div
          className="max-w-5xl mx-auto flex justify-between items-center 
               border border-green-400 rounded-full 
               bg-white/60 dark:bg-black/60 
               backdrop-blur-md shadow-lg px-4 py-2 
               transition-colors duration-300"
        >
          {/* โลโก้ / ชื่อ */}
          <h1 className="text-green-400 font-bold text-lg tracking-wider">
            OATTHAPHON.K
          </h1>

          {/* ปุ่มเปลี่ยนภาษา + DarkMode */}
          <div className="flex items-center gap-2">
            {/* toggle dark mode */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center px-2 py-1 text-sm rounded 
                   bg-gray-800 dark:bg-gray-200 
                   text-white dark:text-black 
                   hover:bg-gray-700 dark:hover:bg-gray-300 
                   transition-colors duration-300"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            {/* toggle language */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-2 py-1 text-sm rounded 
                     bg-gray-800 dark:bg-gray-200 
                     text-white dark:text-black 
                     hover:bg-gray-700 dark:hover:bg-gray-300 
                     transition-colors duration-300"
              >
                {lang.toUpperCase()} ▼
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50">
                  <button
                    onClick={() => {
                      toggleLanguage("th");
                      setIsLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm 
                         hover:bg-gray-100 dark:hover:bg-gray-700 
                         transition-colors duration-300
                         ${lang === "th"
                        ? "font-bold text-green-600"
                        : "text-gray-700 dark:text-gray-200"
                      }`}
                  >
                    TH
                  </button>
                  <button
                    onClick={() => {
                      toggleLanguage("en");
                      setIsLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm 
                         hover:bg-gray-100 dark:hover:bg-gray-700 
                         transition-colors duration-300
                         ${lang === "en"
                        ? "font-bold text-green-600"
                        : "text-gray-700 dark:text-gray-200"
                      }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* เมนู Desktop */}
          <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-green-300 transition-colors duration-300"
              >
                {translations[lang][item] || item}
              </a>
            ))}
          </nav>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            {!isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-green-400 focus:outline-none text-2xl"
              >
                ☰
              </button>
            )}
          </div>
        </div>
      </header>


      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}   // เริ่มโปร่งใส + เลื่อนขึ้น
          animate={{ opacity: 1, y: 0 }}     // ค่อยเลื่อนลงมา
          exit={{ opacity: 0, y: -50 }}      // เวลาออกก็หายกลับขึ้นไป
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center
               bg-white/70 dark:bg-black/70 backdrop-blur-md"
        >
          {/* ปุ่มปิด */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl 
                 text-green-600 hover:text-green-500 dark:text-green-400 dark:hover:text-green-300 transition-transform duration-200 hover:rotate-90"
          >
            ✕
          </button>

          {/* เมนู */}
          <nav className="flex flex-col gap-8 text-2xl font-bold">
            {menuItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}  // สไลด์ลงทีละหัวข้อ
                className="text-green-600 dark:text-green-400 
                     hover:text-green-500 dark:hover:text-green-300
                     transition-all duration-300 relative"
                whileHover={{ scale: 1.1 }} // ขยายตอน hover
              >
                {translations[lang][item] || item}

                {/* เส้นขีดใต้วิ่งเวลา hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}


      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-screen relative text-center">
        {/* Floating Tech Icons */}
        <motion.div className="absolute top-20 left-10 text-6xl text-blue-400"
          animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
          <FontAwesomeIcon icon={faReact} />
        </motion.div>
        <motion.div className="absolute bottom-20 right-16 text-6xl text-green-400"
          animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          <FontAwesomeIcon icon={faNode} />
        </motion.div>
        <motion.div className="absolute top-40 right-32 text-6xl text-sky-500"
          animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
          <FontAwesomeIcon icon={faDocker} />
        </motion.div>
        <motion.div className="absolute bottom-32 left-24 text-6xl text-yellow-400"
          animate={{ x: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 7 }}>
          <FontAwesomeIcon icon={faJsSquare} />
        </motion.div>

{/* Profile + Name + Title (กล่องเดียวกัน) */}
<div className="flex flex-col items-center justify-center">
  <motion.img
    src="/asset/NongMo-0608.jpg"
    alt="Oatthaphon Khamphon"
    className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-green-400 object-cover mb-6 z-10 shadow-xl"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1 }}
  />

  {/* 🔥 ชื่อแบบเรืองแสง */}
<motion.h1
  className="text-4xl md:text-6xl font-extrabold tracking-wide text-green-400 
             drop-shadow-[0_0_20px_rgba(34,197,94,0.9)]"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1.2 }}
>
  OATTHAPHON KHAMPHON
</motion.h1>


  {/* Title */}
  <motion.p
    className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 
               text-2xl mt-4 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.3 }}
  >
    Software Developer
  </motion.p>
</div>

      </section>


{/* About Me */}
<section
  id="about"
  className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 bg-gradient-to-r from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black"
>
  <motion.div
    className="w-full md:w-1/2 max-w-3xl mx-auto"   // 👈 เพิ่ม max-w และ mx-auto
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold mb-6 text-green-400">
      {translations[lang].about}
    </h2>
    <p className="text-gray-800 dark:text-gray-300 leading-relaxed mb-6">
      {translations[lang].aboutText}
    </p>

{/* ✅ ช่องทางการติดตาม */}
<div className="mt-6">
  <h3 className="text-xl font-semibold text-green-400 mb-4 text-left">
    {lang === "en" ? "Follow Me" : "ช่องทางการติดตาม"}
  </h3>
  <div className="flex gap-6 text-4xl">
    <a
      href="https://www.facebook.com/share/1A1vAQGmCe/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-400 transition-transform transform hover:scale-125 
                 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
    >
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a
      href="https://line.me/ti/p/lifDdgLufu"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 hover:text-green-400 transition-transform transform hover:scale-125 
                 drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]"
    >
      <FontAwesomeIcon icon={faLine} />
    </a>
    <a
      href="https://github.com/Oattha"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black dark:text-white hover:text-green-400 
                 transition-transform transform hover:scale-125 
                 drop-shadow-[0_0_12px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.instagram.com/oatthaphon.__?igsh=MW1rZDJmenJuMmxjaA=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-pink-500 hover:text-purple-400 
                 transition-transform transform hover:scale-125 
                 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)] 
                 hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.9)]"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a
      href="https://www.tiktok.com/@oatthaphon_uuykae?is_from_webapp=1&sender_device=pc"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black dark:text-white hover:text-pink-400 
                 transition-transform transform hover:scale-125 
                 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]"
    >
      <FontAwesomeIcon icon={faTiktok} />
    </a>
  </div>

</div>
  </motion.div>

  <motion.div
    className="md:w-1/3 flex justify-center max-w-sm mx-auto"  // 👈 ดันภาพให้ไม่ชิดขอบ
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <img
      src="/asset/NongMo-0608.jpg"
      alt="About"
      className="rounded-2xl shadow-lg border-4 border-green-400"
    />
  </motion.div>
</section>


      {/* Hard Skills */}
      <section
        id="skills"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 
             bg-gradient-to-r from-gray-100 via-white to-gray-100 
             dark:from-gray-900 dark:via-black dark:to-gray-900 overflow-hidden"
      >
        {/* พื้นหลังลายวงกลมโปร่งใส */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0,transparent_70%)]"></div>

        {/* เอฟเฟกต์วงกลมเบลอ */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <motion.h2
          className="text-4xl font-bold mb-10 text-green-400 relative z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hard Skills
        </motion.h2>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { icon: faReact, color: "text-blue-400", top: "15%", left: "20%" },
            { icon: faNode, color: "text-green-400", top: "30%", left: "70%" },
            { icon: faDocker, color: "text-sky-400", top: "60%", left: "25%" },
            { icon: faJsSquare, color: "text-yellow-400", top: "70%", left: "60%" },
            { icon: faPython, color: "text-indigo-400", top: "45%", left: "40%" },
            { icon: faDatabase, color: "text-pink-400", top: "20%", left: "55%" },
            { icon: faCloud, color: "text-white", top: "80%", left: "35%" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute text-6xl ${item.color}`}
              style={{ top: item.top, left: item.left }}
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <FontAwesomeIcon icon={item.icon} />
            </motion.div>
          ))}
        </div>

{/* skill list จริง */}
{/* skill list จริง */}
<motion.div
  className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
{[
  {
    title: "⚡ Programming",
    detail: "TypeScript, JavaScript, Dart, Python, Java, C++, React.js, Vue.js, Node.js, HTML, PHP, Django",
  },
  {
    title: "⚡ Specialized Tech",
    detail: "Advanced Debugging, Bug Fixing, API Security Hardening, Regression Testing, JWT, RBAC (Roles & Permissions), KYC System Logic",
  },
  {
    title: "⚡ Cloud & DevOps",
    detail: "AWS Cloud, Render, Railway, Vercel, Firebase, Netlify, Nginx, System Deployment, Workflow Design, Supabase Auth/DB",
  },
  {
    title: "⚡ Full-Stack & Real-time",
    detail: "React, Django REST Framework, Socket.io (WebSockets), Node JS, .NET, Flutter, Tailwind, Bootstrap",
  },
  {
    title: "⚡ DataBase & Caching",
    detail: "MySQL, PostgreSQL, MongoDB, Redis (Advanced Caching), Prisma ORM",
  },
  {
    title: "⚡ Tools & Integration",
    detail: "Git, GitHub, Figma, Postman, JMeter, Docker, Google APIs (OAuth/Maps), Facebook Graph API, SMTP Service (Load-Balanced)",
  },
    {
    title: "⚡ Data Engineering & ETL",
    detail: "Apache Airflow (Workflow Orchestration), ETL Pipelines, Data Transformation, Automated Scheduling, Tableau, Power BI",
  },
  
  ].map((skill, i) => (
    <div
      key={i}
      className="p-4 rounded-xl border border-green-400/40 backdrop-blur-sm 
                 bg-white/5 dark:bg-black/20 hover:shadow-green-400/40 transition-all duration-300"
    >
      {/* เฉพาะหัวข้อเบลอ+หนา */}
      <h3 className="font-bold text-green-400 mb-2">{skill.title}</h3>
      {/* รายละเอียดตัวธรรมดา */}
      <p className="text-gray-800 dark:text-gray-300">{skill.detail}</p>
    </div>
  ))}
</motion.div>

      </section>


{/* Hobbies */}
<section
  id="hobbies"
  className="relative min-h-screen flex flex-col items-center justify-center px-6 
             bg-gradient-to-br from-white via-gray-100 to-white 
             dark:from-gray-900 dark:via-black dark:to-gray-900 
             text-center overflow-hidden"
>
  {/* 🔮 พื้นหลังแสงวิ่ง */}
  <motion.div
    className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
    animate={{ x: [0, 200, -200, 0], y: [0, -150, 100, 0] }}
    transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
    style={{ top: "20%", left: "10%" }}
  />
  <motion.div
    className="absolute w-80 h-80 bg-green-400/30 rounded-full blur-3xl"
    animate={{ x: [50, -180, 120, 50], y: [-100, 120, -80, -100] }}
    transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
    style={{ bottom: "15%", right: "10%" }}
  />
  <motion.div
    className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
    animate={{ x: [-120, 150, -150, -120], y: [80, -120, 100, 80] }}
    transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
    style={{ top: "50%", left: "50%" }}
  />

  {/* เนื้อหา */}
  <motion.h2 
    className="relative z-10 text-4xl font-bold mb-10 
               text-pink-500 dark:text-pink-400 drop-shadow-lg"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {translations[lang].hobbies}
  </motion.h2>

  <motion.p 
    className="relative z-10 
               text-gray-700 dark:text-gray-300 
               max-w-2xl"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    {translations[lang].hobbiesText}
  </motion.p>

  <motion.div 
    whileHover={{ scale: 1.15 }} 
    className="relative z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    <Link
      to="/hobbies"
      className="mt-10 inline-block px-10 py-3 text-lg font-bold rounded-full 
                 bg-gradient-to-r from-green-400 to-blue-500 text-black shadow-lg 
                 hover:shadow-green-400/70 transition-all"
    >
      {translations[lang].viewHobbies}
    </Link>
  </motion.div>
</section>


{/* Experience */}
<section
  id="experience"
  className="relative min-h-screen flex flex-col items-center justify-center px-6 
             bg-gray-100 dark:bg-gray-900 text-center overflow-hidden"
>
  {/* 🌌 พื้นหลังแสงใสเบลอ (เคลื่อนที่แบบหมุนวน) */}
  <motion.div
    className="absolute w-96 h-96 bg-green-400/30 rounded-full blur-3xl"
    animate={{ x: [0, 200, -150, 0], y: [0, -150, 200, 0], rotate: [0, 180, 360, 0] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  />
  <motion.div
    className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
    animate={{ x: [100, -200, 150, 100], y: [200, -100, 50, 200] }}
    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
    animate={{ x: [-150, 250, -100, -150], y: [150, -200, 100, 150] }}
    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* เนื้อหา */}
  <motion.h2 
    className="relative z-10 text-4xl font-bold mb-10 text-green-400 drop-shadow-lg"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {translations[lang].experience}
  </motion.h2>

  <motion.p 
    className="relative z-10 text-gray-800 dark:text-gray-300 max-w-2xl"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    {translations[lang].experienceText}
  </motion.p>

  <motion.div 
    whileHover={{ scale: 1.1, rotate: 1 }} 
    className="relative z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    <Link
      to="/experience"
      className="mt-10 inline-flex items-center gap-2 px-10 py-3 text-lg font-bold rounded-full 
                 bg-green-500 text-black shadow-lg hover:bg-green-600 transition-all"
    >
      {translations[lang].viewExperience}
    </Link>
  </motion.div>
</section>


{/* Certificates */}
<section
  id="certificate"
  className="relative min-h-screen flex flex-col items-center justify-center px-6 
             bg-gradient-to-tr from-white to-gray-100 dark:from-black dark:to-gray-900 
             text-center overflow-hidden"
>
  {/* ✨ พื้นหลังแสงวิบวับ */}
  <motion.div
    className="absolute w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl"
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"
    animate={{ x: [0, 150, -150, 0], y: [0, -100, 100, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-56 h-56 bg-white/20 rounded-full blur-2xl"
    animate={{ opacity: [0.2, 0.8, 0.2] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* เนื้อหา */}
  <motion.h2
    className="relative z-10 text-4xl font-bold mb-10 text-yellow-400 drop-shadow-lg"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {translations[lang].certificates}
  </motion.h2>

  <motion.p
    className="relative z-10 text-gray-800 dark:text-gray-300 max-w-2xl"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    {translations[lang].certificatesText}
  </motion.p>

  <motion.div
    whileHover={{ scale: 1.2 }}
    className="relative z-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    <Link
      to="/certificates"
      className="mt-10 inline-block px-10 py-3 text-lg font-bold rounded-full 
                 bg-gradient-to-r from-yellow-400 to-orange-500 text-black 
                 shadow-lg hover:shadow-yellow-400/70 transition-all"
    >
      {translations[lang].viewCertificates}
    </Link>
  </motion.div>
</section>



{/* Education */}
<section
  id="education"
  className="min-h-screen flex flex-col items-center justify-center px-6 
             bg-gray-100 dark:bg-gray-800 text-center relative overflow-hidden"
>
  <motion.h2 className="text-4xl font-bold mb-6 text-green-400 relative z-10">
    {translations[lang].education}
  </motion.h2>

  {/* กล่อง Glassmorphism */}
  <motion.div
    className="relative z-10 bg-white/10 dark:bg-gray-900/30 
               backdrop-blur-lg border border-white/20 dark:border-gray-700/50 
               p-8 rounded-2xl shadow-2xl max-w-xl"
    whileHover={{ scale: 1.02 }}
  >
    <p className="font-semibold">
      Phanomthuanchanupatham School (2015 - 2021)
    </p>
    <p>GPX : 3.46</p>

    <p className="mt-4 font-semibold">
      FACULTY OF LIBERAL ARTS & SCIENCE — IT<br />
      Kasetsart University • Kamphaeng Saen Campus
    </p>
    <p>GPA : 3.20 (7 Semesters)</p>

    {/* ปุ่มดาวน์โหลดเรืองแสง
    <motion.a
      href="/asset/grad/สารสนเทศนิสิต มก_.pdf"
      download
      whileHover={{ scale: 1.1, boxShadow: "0 0 25px #22c55e" }}
      className="mt-6 inline-block rounded-lg 
                 bg-green-500 text-white font-bold 
                 px-8 py-3 transition-all duration-300
                 shadow-[0_0_20px_rgba(34,197,94,0.6)] 
                 hover:shadow-[0_0_40px_rgba(34,197,94,0.9)]"
    >
      {translations[lang].downloadTranscript}
    </motion.a> */}
  </motion.div>

  {/* แสงเบลอพื้นหลังให้ใส ๆ */}
  <motion.div
    className="absolute w-80 h-80 bg-green-400/20 rounded-full blur-3xl -z-0"
    animate={{ x: [0, 100, -100, 0], y: [0, -80, 80, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-3xl top-40 -z-0"
    animate={{ x: [50, -50, 50], y: [30, -60, 30] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
  />
</section>


{/* Contact */}
<section
  id="contact"
  className="min-h-screen flex flex-col items-center justify-center px-6 
             bg-white dark:bg-black text-center relative overflow-hidden"
>
  <motion.h2 className="text-4xl font-bold mb-6 text-green-300 relative z-10">
    {translations[lang].contact}
  </motion.h2>

  {/* กล่องโปรไฟล์ + ข้อมูล */}
  <motion.div
    className="relative z-10 bg-white/10 dark:bg-gray-900/30 
               backdrop-blur-lg border border-white/20 dark:border-gray-700/50 
               p-6 rounded-2xl shadow-2xl max-w-2xl flex flex-col items-center"
    whileHover={{ scale: 1.01 }}
  >
    {/* รูปโปรไฟล์แบบสี่เหลี่ยม */}
    <img
      src="/asset/openhoues/image (1).png"   // 👈 เปลี่ยนเป็น path รูปจริงของคุณ
      alt="My Profile"
      className="w-full max-h-[400px] object-cover shadow-lg mb-6 rounded-xl"
    />

    {/* Email & Phone */}
    <p className="text-gray-800 dark:text-gray-300 mb-2">
      📧 Email:{" "}
      <a
        href="mailto:oatthaphon.kham@gmail.com"
        className="text-green-400 hover:underline"
      >
        oatthaphon.kham@gmail.com
      </a>
    </p>
    <p className="text-gray-800 dark:text-gray-300">
      📱 Phone:{" "}
      <a
        href="tel:+66934942312"
        className="text-green-400 hover:underline"
      >
        +66 93-494-2312
      </a>
    </p>
  </motion.div>

  {/* แสงเบลอวิ่งพื้นหลัง */}
  <motion.div
    className="absolute w-80 h-80 bg-green-400/20 rounded-full blur-3xl -z-0"
    animate={{ x: [0, 120, -120, 0], y: [0, -100, 100, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl top-40 -z-0"
    animate={{ x: [60, -60, 60], y: [40, -70, 40] }}
    transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
  />
</section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-700 dark:text-gray-500 bg-gray-200 dark:bg-gray-900">
        © 2025 OATTHAPHON.K - All Rights Reserved
      </footer>

{/* Floating Info Button */}
<a
  href="https://drive.google.com/drive/folders/19QbmzNR_WdYMxxZ30qgCu4GEdU_vgpFn?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="group fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center 
             rounded-full bg-green-600 text-white text-2xl shadow-lg 
             hover:bg-green-700 transition z-50 
             shadow-green-400/60 hover:shadow-green-400/90"
>
  {/* ไอคอน + pulse glow */}
  <FontAwesomeIcon
    icon={faInfoCircle}
    className="animate-pulse drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
  />

  {/* Tooltip */}
  <span className="absolute bottom-16 right-1/2 translate-x-1/2 whitespace-nowrap 
                   bg-gray-900/90 text-white text-sm px-3 py-1 rounded-md 
                   opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
    {lang === "th" ? "ไปที่ไดรฟ์ของฉัน" : "Go to My Drive"}
  </span>
</a>

    </div>
  );
}
