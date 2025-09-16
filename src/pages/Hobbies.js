import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FaArrowLeft } from "react-icons/fa";

export default function Hobbies() {
  const { lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const translations = {
    en: { back: "", pageTitle: "Work & Hobbies" },
    th: { back: "", pageTitle: "งาน & งานอดิเรก" },
  };

  const hobbiesList = [
    {
      title: "NRC",
      description: {
        en: "Worked in the assembly department constructing power plants with Namruean Construction Company Limited (บริษัท นามเรือน คอนสตรัคชั่น จำกัด) during every school break from 2022 to present.",
        th: "ทำงานในฝ่ายช่างประกอบสร้างโรงไฟฟ้ากับบริษัท นามเรือน คอนสตรัคชั่น จำกัด (Namruean Construction Company Limited) ทุกช่วงปิดภาคเรียน ตั้งแต่ปี 2022 จนถึงปัจจุบัน"

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
        en: "Served as the head of the IT18 program at Kasetsart University Kamphaeng Saen Campus starting from the first year, but stepped down in the third year due to family responsibilities, allowing someone more available to take over the role.",
        th: "ดำรงตำแหน่งหัวหน้ารุ่น IT18 ที่มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน ตั้งแต่ชั้นปีที่ 1 แต่ได้ลาออกในชั้นปีที่ 3 เนื่องจากมีเหตุจำเป็นต้องกลับไปช่วยงานครอบครัว จึงมอบหมายให้ผู้ที่พร้อมกว่ารับหน้าที่ต่อ"

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
        en: "Formed a band with friends named VODKA in 2022, starting from a shared passion that grew into both valuable experiences and income. Participated in various competitions and won several first-place awards, while also regularly performing at university events.",
        th: "ฟอร์มวงดนตรีร่วมกับเพื่อนๆชื่อว่า VODKA ตั้งแต่ปี 2022 จากความชอบจนกลายเป็นสิ่งที่สร้างทั้งประสบการณ์และรายได้ เข้าประกวดในงานต่าง ๆ และคว้ารางวัลชนะเลิศหลายครั้ง อีกทั้งยังได้มีโอกาสขึ้นแสดงในงานต่าง ๆ ของมหาวิทยาลัยเป็นประจำ"
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
        en: "Participated in the IT Open House event by creating a 3D game for younger students, featuring custom characters made from their own likeness. Deployed the games online so that the students could take them back and play anytime.",
        th: "เข้าร่วมงาน Open House IT ทำเกม 3 มิติให้น้อง ๆ โดยใส่ตัวละครที่สร้างจากน้อง ๆ เองเข้าไปอยู่ในเกม และนำเกมของน้อง ๆ ไป deploy ออนไลน์ เพื่อให้น้อง ๆ สามารถนำกลับไปเล่นได้",
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
        en: "I am passionate about traditional outdoor movies in central Thailand, frequently participating in sound system competitions. I have practiced building amplifiers, repairing speakers, and working closely with various electronic equipment, which has enabled me to confidently use basic tools.",
        th: "มีความชื่นชอบในหนังกลางแปลงภาคกลาง เข้าร่วมการประกวดเครื่องเสียงอยู่บ่อยครั้ง และได้ฝึกประกอบแอมป์ ซ่อมลำโพง รวมถึงคลุกคลีอยู่กับอุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ ทำให้สามารถใช้งานเครื่องมือพื้นฐานได้อย่างมั่นใจ",
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

  // reset scroll
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

            {/* Fix 3 คอลัมน์ (แกน X) แล้วดันลงล่าง (แกน Y) */}
            <div className="grid grid-cols-3 gap-3">
              {hobby.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${hobby.title} ${i + 1}`}
                  className="w-full h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Modal รูปเต็มจอ */}
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
