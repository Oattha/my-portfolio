import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FaArrowLeft } from "react-icons/fa";

export default function Certificates() {
  const { lang } = useLanguage();

  const translations = {
    en: { title: "Certificates", back: "", download: "Download PDF" },
    th: { title: "เกียรติบัตร", back: "", download: "ดาวน์โหลด PDF" },
  };

  const certificates = [
    { title: { en: "Full Stack Bootcamp - 2023", th: "บูทแคมป์ฟูลสแต็ก - 2023" }, img: "/asset/IMG_1757.jpg" },
    { title: { en: "AI AND CYBERSECURITY", th: "เอไอ และ ความปลอดภัยทางไซเบอร์" }, pdf: "/asset/เกียรติบัตรไซเบอร์.pdf" },
    { title: { en: "CSS Certificate", th: "เกียรติบัตร CSS" }, pdf: "/asset/css certificate.pdf" },
    { title: { en: "JavaScript Basic", th: "จาวาสคริปต์ เบื้องต้น" }, pdf: "/asset/javascript_basic certificate.pdf" },
    { title: { en: "JavaScript Intermediate", th: "จาวาสคริปต์ ระดับกลาง" }, pdf: "/asset/javascript_intermediate certificate.pdf" },
    { title: { en: "Node.js Basic", th: "โนดเจเอส เบื้องต้น" }, pdf: "/asset/nodejs_basic certificate.pdf" },
    { title: { en: "React Basic", th: "รีแอค เบื้องต้น" }, pdf: "/asset/react_basic certificate.pdf" },
    { title: { en: "REST API Intermediate", th: "REST API ระดับกลาง" }, pdf: "/asset/rest_api_intermediate certificate.pdf" },
    { title: { en: "SQL Advanced", th: "SQL ระดับสูง" }, pdf: "/asset/sql_advanced certificate.pdf" },
    { title: { en: "SQL Basic", th: "SQL เบื้องต้น" }, pdf: "/asset/sql_basic certificate.pdf" },
    { title: { en: "SQL Intermediate", th: "SQL ระดับกลาง" }, pdf: "/asset/sql_intermediate certificate.pdf" },
  ];

  // ✅ ตรวจว่าอยู่ localhost หรือไม่
  const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white p-6 relative transition-colors">
      <Link
        to="/"
        className="fixed top-6 left-6 bg-green-400 hover:bg-green-500 
             text-black px-3 py-1 rounded-full font-semibold text-sm 
             flex items-center gap-2 transition-all shadow-md z-50"
      >
        <FaArrowLeft className="text-base" />
        {translations[lang].back}
      </Link>


      <h1 className="text-4xl font-bold mb-6 text-center">{translations[lang].title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((c, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-2 transition-colors"
          >
            <p className="text-center font-semibold text-green-500 dark:text-green-400 mb-2">
              {c.title[lang]}
            </p>

            {/* รูปภาพ */}
            {c.img && (
              <img
                src={c.img}
                alt={c.title[lang]}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}

            {/* PDF */}
            {c.pdf && (
              <>
                {!isLocalhost ? (
                  // ✅ Production → แสดงผ่าน Google Docs Viewer inline
                  <iframe
                    src={`https://docs.google.com/viewer?url=${window.location.origin}${c.pdf}&embedded=true`}
                    title={c.title[lang]}
                    className="w-full h-64 rounded-lg"
                    frameBorder="0"
                  ></iframe>
                ) : (
                  // ✅ Localhost → ปุ่มดาวน์โหลดแทน
                  <div className="flex items-center justify-center w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg">
                    <a
                      href={c.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md"
                    >
                      {translations[lang].download}
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
