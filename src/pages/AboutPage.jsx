import Dragon from "../assets/DSC00741.jpeg";
import Grad from "../assets/IMG_6711.jpg";
import Art from "../assets/IMG_2828.jpg";
import Girl from "../assets/IMG_6798.jpg";
import Sing from "../assets/DSC00712.jpeg";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <img src={Dragon} alt="Brand logo variation" className="w-full h-120 object-cover rounded-xl shadow-md" />
            <img src={Grad} alt="NewWebsite logo" className="w-full h-80 object-cover rounded-xl shadow-md" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={Art} alt="True Fan logo" className="w-full h-60 object-cover rounded-xl shadow-md" />
            <img src={Girl} alt="Project mark" className="w-full h-50 object-cover rounded-xl shadow-md" />
            <img src={Sing} alt="Singing performance" className="w-full h-50 object-cover rounded-xl shadow-md" />
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-10 text-white ">Hello!</h2>
          <p className="text-white/90 text-lg leading-7 mb-6">
            My name is Noah Jacobs, and I am currently exploring employment options in the information technology field. I have recently graduated from the College of Communication Arts and Sciences at Michigan State University with a BA in Information Science. I am ready and willing to expand and offer my skills to employers willing to give me a chance. I have experience in web development and graphic design, but I am also open to other areas of the information science field as well. While my portfolio may not be expansive, I am a quick learner and can adapt and learn to fit your company’s needs. Feel free to reach out to me through the contact form below.
          </p>
          <Link
            to="/contact"
            className="mt-6 ml-80 inline-flex items-center justify-center rounded-lg border border-blue-200/30 bg-white/10 px-6 py-3 text-white font-semibold transition-all duration-300 hover:border-blue-200 hover:shadow-[0_0_22px_rgba(147,197,253,0.65)]"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}