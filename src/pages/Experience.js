import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FaArrowLeft } from "react-icons/fa";

export default function Experience() {
  const { lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const translations = {
    en: {
      pageTitle: "Experience",
      back: "",
      view: "View",
      example: "Example",
      techTitle: "Tech Stack",
    },
    th: {
      pageTitle: "ประสบการณ์",
      back: "",
      view: "ดูรายละเอียด",
      example: "ตัวอย่าง",
      techTitle: "เทคโนโลยีที่ใช้ (Tech Stack)",
    },
  };

  const experiences = [

    {
      title: "Featured Large-Scale Projects (Production Ready)",
      projects: [
        {
          name: "ThaiIoT Association Platform - Member & Event Management",
          techStack: {
            frontend: "React.js, JavaScript, Bootstrap, Axios",
            backend: "Python (Django), Django REST Framework (DRF)",
            services: "Redis (Caching), Docker, MySQL, Facebook Graph API, SMTP Account Pool",
          },
          description: {
            "en": "A comprehensive enterprise-grade platform developed for the Thai IoT Association. Due to corporate confidentiality, this summary covers only publicly disclosable features of this 'Mega Project'. It highlights a complex membership system with multi-tier registration, automated prorated fee calculation, and tiered expiration notifications. Key innovations include a Load-Balanced SMTP system for high-volume email broadcasting, automated background workers, and seamless Facebook API integration. The system emphasizes high performance via Redis caching and robust security through API Hardening.",

            "th": "แพลตฟอร์มระดับ Enterprise สำหรับสมาคมไทยไอโอที (ข้อมูลชุดนี้สรุปเฉพาะฟีเจอร์และนวัตกรรมที่ได้รับอนุญาตให้เผยแพร่ได้ตามนโยบายความเป็นส่วนตัวของบริษัท) เมกะโปรเจคนี้เน้นระบบจัดการสมาชิกที่ซับซ้อน รองรับการคำนวณค่าธรรมเนียมแบบแบ่งไตรมาส (Prorate) และระบบจัดการสิทธิ์ที่ละเอียด ชูจุดเด่นด้วยระบบส่งอีเมลแบบ Load Balance (SMTP Account Pool), ระบบ Automated Tasks และการเชื่อมต่อ Facebook Graph API โดยให้ความสำคัญกับการทดสอบประสิทธิภาพด้วย JMeter และการทำ Caching ด้วย Redis เพื่อรองรับปริมาณ Transaction สูง"
          },
          images: [
            "/asset/thaiiot/thaiiot.png",
            "/asset/thaiiot/thaiiot1.png",
            "/asset/thaiiot/thaiiot2.png",
            "/asset/thaiiot/thaiiot3.png",
            "/asset/thaiiot/thaiiot4.png",
            "/asset/thaiiot/thaiiot5.png",
            "/asset/thaiiot/thaiiot6.png",
            "/asset/thaiiot/thaiiot7.png",
            "/asset/thaiiot/thaiiot9.png",
          ],
          // แจ้งข้อจำกัดเรื่องการเผยแพร่ซอร์สโค้ดตามที่คุณต้องการ
          github: "https://worksiteweb.site/",
        },
        {
          name: "KU Trading - Dynamic Community Marketplace",
          techStack: {
            frontend: "React + Vite, TypeScript, Tailwind CSS, Zustand, React Hook Form, Framer Motion",
            backend: "Node.js + Express.js, Prisma ORM + PostgreSQL, JWT Authentication",
            services: "Socket.io (Real-time), Cloudinary (Image Hosting), Nodemailer",
          },
          description: {
            en: "A comprehensive Dynamic C2C community platform exclusively for KU KPS students, fully deployed at https://kutrading.onrender.com. Built on a Full-stack architecture, the platform features a Real-time system via WebSockets (Socket.io) with instant notifications, private and trade-specific chat rooms, read receipts, and multimedia support (emojis/videos). It includes a secure KYC identity verification system with integrated email notifications for approvals, along with core features such as item posting, user reporting, appointment scheduling, and a rating/review system. The project also features a robust Admin Dashboard with activity logs to monitor users and community safety. The entire ecosystem—frontend, backend, and database—is live.",
            th: "Dynamic แพลตฟอร์มคอมมูนิตี้แลกเปลี่ยนสิ่งของเฉพาะชาว KU kps เต็มรูปแบบที่ใช้งานจริงที่ https://kutrading.onrender.com พัฒนาด้วยโครงสร้าง Full-stack โดยมีจุดเด่นคือระบบ Real-time ผ่าน WebSockets (Socket.io) ที่รองรับการแจ้งเตือน การแลกของ การแชทแบบเรียลไทม์ แบ่งเป็นห้องแชทส่วนตัวกับห้องแชทแลกเปลี่ยน มีแสดงสถานะว่าอ่านหรือยัง ส่ง Emoji วิดีโอได้, ระบบยืนยันตัวตน (KYC), โพสต์ของ, รีพอร์ต, นัดหมาย, ให้คะแนนรีวิว, และหน้า Admin Dashboard สำหรับจัดการผู้ใช้และรายงานพฤติกรรม ตอบรับ/ปฏิเสธ KYC ทางอีเมลจริง, log ของแอดมิน ระบบทั้งหมดทั้งหน้าบ้าน หลังบ้าน และฐานข้อมูล ถูกดีพลอยและใช้งานได้จริง",
          },
          images: [
            "/asset/ITproj/ITproj1.png",
            "/asset/ITproj/ITproj2.png",
            "/asset/ITproj/ITproj3.png",
            "/asset/ITproj/ITproj4.png",
            "/asset/ITproj/ITproj5.png",
            "/asset/ITproj/ITproj6.png",
            "/asset/ITproj/ITproj7.png",
            "/asset/ITproj/ITproj8.png",
            "/asset/ITproj/ITproj9.png",
            "/asset/ITproj/ITproj10.png",
            "/asset/ITproj/ITproj11.png",
            "/asset/ITproj/ITproj12.png",
            "/asset/ITproj/ITproj13.png",
            "/asset/ITproj/ITproj14.png",
            "/asset/ITproj/ITproj15.png",
            "/asset/ITproj/ITproj16.png",
            "/asset/ITproj/ITproj17.png",
            "/asset/ITproj/ITproj18.png",
          ],
          github: "https://github.com/Oattha/KuTrading.git",
        },
      ],
    },

    {
      title: "IoT Development",
      projects: [
        {
          name: "IoT Motion Detection System",
          description: {
            en: "Developed an IoT-based motion detection system using ESP32, PIR sensor, and buzzer. The system connects to Wi-Fi and integrates with Google Sheets via HTTP, while also using MQTT (NETPIE) for real-time remote control of the PIR sensor. Motion events trigger alarms, are logged automatically, and displayed on a real-time dashboard.",
            th: "พัฒนา IoT Motion Detection System โดยใช้ ESP32, เซ็นเซอร์ PIR และ buzzer ระบบสามารถเชื่อมต่อ Wi-Fi และบันทึกข้อมูลลง Google Sheets ผ่าน HTTP พร้อมทั้งเชื่อมต่อกับ MQTT (NETPIE) เพื่อควบคุม PIR sensor แบบเรียลไทม์ การตรวจจับการเคลื่อนไหวจะทริกเกอร์สัญญาณเตือนและบันทึกข้อมูลแสดงผลบนแดชบอร์ดแบบเรียลไทม์",
          },
          images: [
            "/asset/ภาพหน้าจอ (1098).png",
            "/asset/ภาพหน้าจอ (1100).png",
            "/asset/image.png",
            "/asset/545668582_783186558014095_8675325045153080937_n.jpg",
            "/asset/547997274_1523467555757486_6212435790267256435_n.jpg",
            "/asset/548703398_776337918625598_7259626310134853920_n.jpg",
          ],
          github:
            "https://drive.google.com/drive/folders/1EHC55KaQWt7r75oi0H3ykCVhm55eI_OO?usp=drive_link",
        },
        {
          name: "Wokwi Simulation Examples",
          description: {
            en: "These are example IoT simulations created with Wokwi. They demonstrate different ESP32 and sensor-based projects as references.",
            th: "ตัวอย่างการจำลอง IoT ที่สร้างขึ้นด้วย Wokwi แสดงการทำงานของ ESP32 และเซ็นเซอร์ในหลายโครงการเพื่อเป็นแนวทาง",
          },
          wokwi: [
            "https://wokwi.com/projects/419869362716701697",
            "https://wokwi.com/projects/419898221788271617",
            "https://wokwi.com/projects/417634124736159745",
            "https://wokwi.com/projects/421477674708909057",
          ],
        },
      ],
    },
    {
      title: "Web Application Development",
      projects: [
        {
          name: "E-commerce App",
          description: {
            en: "Developed a full-stack e-commerce app for general merchandise featuring product CRUD, Google OAuth2 login, JWT-based authentication, Stripe payment, image upload with Cloudinary, and an admin dashboard built with React, Node.js, Express, and Prisma.",
            th: "พัฒนาเว็บแอป E-commerce แบบ full-stack สำหรับขายสินค้า มีระบบ CRUD สินค้า, ล็อกอินด้วย Google OAuth2, Authentication ด้วย JWT, ระบบจ่ายเงินผ่าน Stripe, อัปโหลดรูปภาพด้วย Cloudinary และแดชบอร์ดผู้ดูแลระบบที่สร้างด้วย React, Node.js, Express และ Prisma",
          },
          github: "https://github.com/Oattha/ecom-oat-main-main2.git",
        },
        {
          name: "Employee Check-in/Out App",
          description: {
            en: "Developed a containerized full-stack employee check-in/out web application using Node.js, PHP, and HTML, featuring RESTful APIs, Docker orchestration, and a dedicated admin dashboard.",
            th: "พัฒนาเว็บแอปสำหรับบันทึกเวลาเข้า-ออกงานของพนักงาน ใช้ Node.js, PHP และ HTML ออกแบบเป็นระบบ full-stack พร้อม RESTful API, จัดการ container ด้วย Docker และมีแดชบอร์ดผู้ดูแลระบบ",
          },
          github: "https://github.com/Oattha/employee-check-in-out.git",
        },
        {
          name: "KuShop E-commerce Web App",
          description: {
            en: "Developed a modern e-commerce web application using Next.js, TypeScript, and Tailwind CSS. Features include product listings, product detail pages, shopping cart functionality, and responsive UI design optimized for performance and scalability.",
            th: "พัฒนาเว็บ E-commerce สมัยใหม่โดยใช้ Next.js, TypeScript และ Tailwind CSS มีฟีเจอร์แสดงรายการสินค้า หน้ารายละเอียดสินค้า ระบบตะกร้าสินค้า และ UI ที่ responsive พร้อมปรับแต่งประสิทธิภาพให้รองรับผู้ใช้จำนวนมาก",
          },
          github: "https://github.com/Oattha/4-8-kushop-main.git",
        },
        {
          name: "Customer/Product API",
          description: {
            en: "Developed RESTful APIs for managing customers and products using Node.js, Express, and Prisma ORM, implementing full CRUD operations with proper error handling and data validation.",
            th: "พัฒนา RESTful API สำหรับจัดการลูกค้าและสินค้า โดยใช้ Node.js, Express และ Prisma ORM รองรับ CRUD ครบถ้วน พร้อมระบบตรวจสอบข้อมูลและจัดการ error",
          },
          github: "https://github.com/Oattha/full_project.git",
        },
      ],
    },
    {
      title: "Application Development",
      projects: [
        {
          name: "Book Tracking App",
          description: {
            en: "Developed a cross-platform mobile book tracking app using Flutter and Dart, featuring Firebase Authentication, external API integration for book data, user login system, and persistent storage using Cloud Firestore.",
            th: "พัฒนาแอปมือถือสำหรับติดตามหนังสือ โดยใช้ Flutter และ Dart รองรับหลายแพลตฟอร์ม มีระบบล็อกอินด้วย Firebase Authentication ดึงข้อมูลหนังสือจาก API ภายนอก และบันทึกข้อมูลถาวรด้วย Cloud Firestore",
          },
          github: "https://github.com/Oattha/book_tracker1.git",
        },
      ],
    },
    {
      title: "Game Development",
      projects: [
        {
          name: "Oat Survival",
          description: {
            en: "Developed using Unity with C#, building core game mechanics such as the quest system, character movement, enemy AI, and collision detection.",
            th: "พัฒนาเกมด้วย Unity และ C# มีระบบหลักของเกม เช่น ระบบเควส การเคลื่อนไหวของตัวละคร AI ศัตรู และการตรวจจับการชน",
          },
          github:
            "https://drive.google.com/drive/folders/1gi2PMVauMDvkt_g8BukN6YEjOTpicta6?usp=sharing",
        },
      ],
    },
    {
      title: "UX / UI Design",
      projects: [
        {
          name: "E-commerce Web App (Oat Ecom)",
          description: {
            en: "Designed UI/UX in Figma for a full e-commerce web application.",
            th: "ออกแบบ UI/UX ด้วย Figma สำหรับเว็บ E-commerce ครบวงจร",
          },
          github:
            "https://www.figma.com/design/hvtDr27giToYrtazdlRcfr/22-%E0%B8%AD%E0%B8%A3%E0%B8%A3%E0%B8%96%E0%B8%9E%E0%B8%A5_%E0%B8%84%E0%B8%B3%E0%B8%9E%E0%B8%A5-work2?node-id=1-32&t=xYB7dfI93znIoFOj-1",
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white p-6 relative transition-colors">
      {/* ปุ่มย้อนกลับ */}
      <Link
        to="/"
        className="fixed top-6 left-6 bg-green-400 hover:bg-green-500 
             text-black px-3 py-1 rounded-full font-semibold text-sm 
             flex items-center gap-2 transition-all shadow-md z-50"
      >
        <FaArrowLeft className="text-base" />
        {translations[lang].back}
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-center">
        {translations[lang].pageTitle}
      </h1>

      <div className="space-y-10">
        {experiences.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold text-green-500 dark:text-green-400 mb-4">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>

                    {/* แสดงรูปภาพ */}
                    {project.images && (
                      <div className="mb-4">
                        <div className="grid grid-cols-3 gap-3">
                          {project.images.map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={`${project.name} ${index + 1}`}
                              className="w-full h-28 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                              onClick={() => setSelectedImage(img)}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* หัวข้อ Tech Stack แยกออกมา */}
                    {project.techStack && (
                      <div className="mb-4 p-4 border-l-4 border-green-400 bg-gray-200 dark:bg-gray-900/50 rounded-r-lg shadow-inner">
                        <p className="text-green-500 font-bold mb-3 text-sm uppercase tracking-wider">
                          🚀 {translations[lang].techTitle}
                        </p>
                        <div className="space-y-3 text-xs leading-relaxed">
                          <p>
                            <span className="font-bold text-green-600 dark:text-green-400">Frontend:</span>
                            <br />
                            {project.techStack.frontend}
                          </p>
                          <p>
                            <span className="font-bold text-green-600 dark:text-green-400">Backend:</span>
                            <br />
                            {project.techStack.backend}
                          </p>
                          <p>
                            <span className="font-bold text-green-600 dark:text-green-400">Services:</span>
                            <br />
                            {project.techStack.services}
                          </p>
                        </div>
                      </div>
                    )}

                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 whitespace-pre-wrap">
                      {project.description[lang]}
                    </p>

                    {/* Wokwi Links */}
                    {project.wokwi && (
                      <div className="flex flex-col gap-2 mb-3">
                        {project.wokwi.map((link, idx) => (
                          <a
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-400 hover:bg-blue-500 text-black px-3 py-1 rounded-full font-semibold text-sm transition-all text-center"
                          >
                            {translations[lang].example} {idx + 1}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* GitHub / Drive / Figma Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-green-400 hover:bg-green-500 text-black px-3 py-1 rounded-full font-semibold text-sm transition-all text-center"
                    >
                      {translations[lang].view}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal สำหรับดูรูปเต็ม */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}