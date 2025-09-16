import { Link } from "react-router-dom";
import { useEffect } from "react";
// ⬇️ ใช้ LanguageContext
import { useLanguage } from "../contexts/LanguageContext";

export default function Hobbies() {
  const { lang } = useLanguage();

  const translations = {
    en: {
      back: "← Home",
      pageTitle: "Work & Hobbies",
    },
    th: {
      back: "← หน้าหลัก",
      pageTitle: "งาน & งานอดิเรก",
    },
  };

  const hobbiesList = [
    {
      title: "NRC",
      description: {
        en: "Worked in the assembly department building power plants with Namruan Construction Company during every school break from 2022 to present.",
        th: "ทำงานในฝ่ายประกอบโรงไฟฟ้ากับบริษัทน้ำรวยก่อสร้างทุกช่วงปิดภาคเรียน ตั้งแต่ปี 2022 จนถึงปัจจุบัน",
      },
      images: [
        "/asset/NRC/NRC1.jpg",
        "/asset/NRC/NRC2.jpg",
        "/asset/NRC/NRC3.jpg",
        "/asset/NRC/NRC4.jpg",
        "/asset/NRC/NRC5.jpg",
        "/asset/NRC/NRC6.jpg",
        "/asset/NRC/NRC7.jpg",
        "/asset/NRC/NRC8.jpg",
        "/asset/NRC/NRC9.jpg",
        "/asset/NRC/NRC10.jpg",
        "/asset/NRC/NRC11.jpg",
        "/asset/NRC/NRC12.jpg",
      ],
    },
    {
      title: "Head of IT18 KUKPS",
      description: {
        en: "Served as the head of the IT18 program at Kasetsart University Kamphaeng Saen Campus starting from the first year. Organized and coordinated various events and activities for the department. Stepped down in the third year to allow someone else to take over, as I frequently had to return home to help with family responsibilities and could not fully dedicate myself to the role.",
        th: "担任 IT18 รุ่นหัวหน้าภาควิชา ที่มหาวิทยาลัยเกษตรศาสตร์ กำแพงแสน ตั้งแต่ปีหนึ่ง ดูแลและจัดกิจกรรมต่าง ๆ ของสาขา พอถึงปีสามได้ลาออกเพื่อให้น้องรุ่นใหม่ขึ้นแทน เนื่องจากต้องกลับบ้านช่วยงานครอบครัวบ่อย ทำให้ไม่สามารถทุ่มเทได้เต็มที่",
      },
      images: [
        "/asset/head/_DSC0682.jpg",
        "/asset/head/486576369_1273531454183768_3374358013942777242_n.jpg",
        "/asset/head/486858545_1273531444183769_8754815315975133411_n.jpg",
        "/asset/head/Byenior_backdrop-282.jpg",
        "/asset/head/DSC_0003-2.JPG",
        "/asset/head/DSC_0167-2.JPG",
      ],
    },
    {
      title: "Music – VODKA Band",
      description: {
        en: "Formed a band named 'VODKA' in 2022, starting from passion for music and evolving into both experience and income opportunities. Competed in various events and won several championships, while also performing regularly at university events.",
        th: "ตั้งวงดนตรีชื่อ 'VODKA' ในปี 2022 จากความหลงใหลในดนตรี พัฒนาเป็นทั้งประสบการณ์และโอกาสสร้างรายได้ เข้าประกวดตามงานต่าง ๆ ได้รางวัลหลายรายการ และยังแสดงในงานมหาวิทยาลัยอย่างต่อเนื่อง",
      },
      images: [
        "/asset/music/music1.jpg",
        "/asset/music/music2.jpg",
        "/asset/music/music3.jpg",
        "/asset/music/IMG_2016.PNG",
        "/asset/music/DSC_0189.jpeg",
        "/asset/music/IMG_7012.JPG",
        "/asset/music/IMG_9165.JPG",
        "/asset/music/MOO_4724.jpg",
        "/asset/music/NongMo-0608.jpg",
        "/asset/music/NongMo-7857.jpg",
        "/asset/music/music4.jpg",
        "/asset/music/PP's-09437.jpg",
        "/asset/music/SPF_0013.JPG",
        "/asset/music/TXN_2473.jpg",
        "/asset/music/IMG_2015.PNG",
      ],
    },
    {
      title: "Open House IT",
      description: {
        en: "Participated in the IT Open House event to guide and introduce younger students to the field of game development. Created a custom 3D game featuring personalized avatars of the students themselves, allowing them to experience being inside the game.",
        th: "เข้าร่วมงาน Open House IT เพื่อแนะนำและแนะแนวให้นักเรียนรุ่นน้องด้านการพัฒนาเกม ทำเกม 3D ที่ใส่ตัวละครเป็นรูปนักเรียนเอง ให้ได้สัมผัสประสบการณ์เหมือนเข้าไปอยู่ในเกมจริง ๆ",
      },
      images: [
        "/asset/openhoues/โอเพ้นเฮ้าส์ 1.jpg",
        "/asset/openhoues/โอเพ้นเฮ้าส์ 2.jpg",
        "/asset/openhoues/โอเพ้นเฮ้าส์ 3.jpg",
        "/asset/openhoues/โอเพ้นเฮ้าส์ 4.jpg",
      ],
    },
    {
      title: "Cinema – Outdoor Movies",
      description: {
        en: "I am passionate about traditional outdoor movies (หนังกลางแปลง) in central Thailand and often attend sound system competitions. Frequently had the chance to practice building power amplifier circuits and repairing loudspeakers, which deepened my interest and skills in audio engineering.",
        th: "มีความหลงใหลในหนังกลางแปลงแบบดั้งเดิมในภาคกลางของไทย และชอบเข้าร่วมการประกวดเครื่องเสียงอยู่บ่อย ๆ ได้ฝึกประกอบวงจรเครื่องขยายเสียง และซ่อมลำโพง ทำให้ยิ่งสนใจและพัฒนาทักษะด้านวิศวกรรมเสียง",
      },
      images: [
        "/asset/cinema/cinema1.jpg",
        "/asset/cinema/cinema2.jpg",
        "/asset/cinema/cinema3.jpg",
        "/asset/cinema/cinema4.jpg",
        "/asset/cinema/cinema5.jpg",
        "/asset/cinema/cinema6.jpg",
        "/asset/cinema/cinema7.jpg",
        "/asset/cinema/cinema8.jpg",
        "/asset/cinema/cinema9.jpg",
        "/asset/cinema/cinema10.jpg",
        "/asset/cinema/cinema11.jpg",
        "/asset/cinema/cinema12.jpg",
        "/asset/cinema/cinema13.jpg",
      ],
    },
  ];

  // 🟢 reset scroll ทุกครั้งที่เข้าเพจนี้
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white p-6 relative transition-colors">
      {/* ปุ่มย้อนกลับมุมบนซ้าย */}
      <Link
        to="/"
        className="absolute top-6 left-6 bg-green-400 hover:bg-green-500 text-black px-3 py-1 rounded-full font-semibold text-sm transition-all shadow-md"
      >
        {translations[lang].back}
      </Link>

      <h1 className="text-4xl font-bold mb-6 text-center">
        {translations[lang].pageTitle}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hobbiesList.map((hobby, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg p-4 transition-colors"
          >
            <h3 className="font-bold text-2xl mb-2 text-center">{hobby.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
              {hobby.description[lang]}
            </p>

            {/* แสดงรูปหลายคอลัมน์ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {hobby.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${hobby.title} ${i + 1}`}
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}