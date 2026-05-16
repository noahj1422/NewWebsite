import Dragon from "../assets/DSC00741.jpeg";
import Grad from "../assets/IMG_6711.jpg";
import Art from "../assets/IMG_2828.jpg";
import Girl from "../assets/IMG_6798.jpg";
import Sing from "../assets/DSC00712.jpeg";

export default function AboutPage() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">About</h2>
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
        <p className="text-gray-600 leading-7 text-left">
          This website is a lightweight React foundation designed to grow with your portfolio and creative projects. The layout keeps navigation simple, highlights featured work, and makes space for richer storytelling as new content is added. As the site evolves, this section can be expanded with your mission, background, and the services or experiences you want visitors to remember most.
        </p>
      </div>
    </section>
  );
}