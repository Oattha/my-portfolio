import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FaArrowLeft } from "react-icons/fa";

export default function Experience() {
  const { lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null); // 🟢 state สำหรับ modal

  const translations = {
    en: {
      pageTitle: "Experience",
      back: "",
      view: "View",
      example: "Example",
    },
    th: {
      pageTitle: "ประสบการณ์",
      back: "",
      view: "ดูรายละเอียด",
      example: "ตัวอย่าง",
    },
  };

  const experiences = [
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
        className="absolute top-6 left-6 bg-green-400 hover:bg-green-500 
             text-black px-3 py-1 rounded-full font-semibold text-sm 
             flex items-center gap-2 transition-all shadow-md"
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

                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
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