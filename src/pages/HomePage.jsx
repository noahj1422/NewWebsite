import MainBackground from "../assets/DSC00668.jpeg";
import Snowflake from "../Snowflake";

export default function HomePage() {
  return (
    <section
      className="relative overflow-hidden min-h-[85vh] px-4 text-center bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${MainBackground})` }}
    >
      <Snowflake id="home-snow" />
      <div className="relative z-20 ml-48 max-w-6xl rounded-xl bg-black/60 px-12 py-8 motion-fade-up">
        <h2 className="text-4xl font-semibold mb-2 text-white">Welcome To My Website!</h2>
        <p className="text-white/90 text-lg">Explore my portfolio and projects</p>
      </div>
    </section>
  );
}