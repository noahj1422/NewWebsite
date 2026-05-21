import TfLogo from "../assets/TF logo.png";
import NewLogo from "../assets/NewLogo.png";

const skills = [
  {
    name: "Adobe Premiere Pro/Photoshop",
    focus: "Video editing, Graphic assests, compositing",
    logoSrc: "",
  },
  {
    name: "Web Development",
    focus: "JavaScript, React, HTML/CSS, responsive design",
    logoSrc: "",
  },
  {
    name: "Figma",
    focus: "Wireframes, UI prototypes, design systems",
    logoSrc: "",
  },
  {
    name: "React",
    focus: "Component-driven frontend development",
    logoSrc: "",
  },
];

export default function PortfolioPage() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-2 text-center text-white">Portfolio Showcase</h2>
      <p className="text-white/90 text-center mb-6">Featured work, media, and experience:</p>

      <div className="mb-10 rounded-2xl border border-white/15 bg-black/30 p-5 sm:p-6">
        <div className="mb-4 text-left">
          <h3 className="text-xl font-semibold text-white">Programs & Experience</h3>
          <p className="text-white/80">
            Add your tools, years of experience, and each platform logo below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skills.map((skill) => {
            const initials = skill.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <article
                key={skill.name}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/40 p-4"
              >
                {skill.logoSrc ? (
                  <img
                    src={skill.logoSrc}
                    alt={`${skill.name} logo`}
                    className="h-12 w-12 rounded-md bg-white/10 object-contain p-1"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/15 text-sm font-bold text-white">
                    {initials}
                  </div>
                )}

                <div className="text-left">
                  <h4 className="text-base font-semibold text-white">{skill.name}</h4>
                  <p className="text-sm text-white/70">{skill.focus}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
        {/* Embedded YouTube Videos */}
        <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/bRryg0_ECC8?si=n00jgArIlgrzxENQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/qqpjtZPAyzA?si=zhlVvTP19Ke6wkw-&start=9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/TUlsMHJ78Gc?si=JGlsJ0LZi7mVfnYA&start=10" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <div className="rounded-lg border border-white/15 bg-black/30 p-4 shadow-lg flex flex-col justify-center items-center gap-10">
          {/* Linked Images */}
          <a href="https://truefan.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 max-w-[600px] px-10 py-8 rounded-lg border border-blue-200/30 bg-white/10 shadow-md hover:border-blue-200 hover:shadow-[0_0_22px_rgba(147,197,253,0.7)] transition-all duration-300">
            <img src={TfLogo} alt="Visit first website" className="h-24 w-auto block" />
            <h3 className="text-white text-xl font-semibold">Artist Search Tool</h3>
          </a>
          <a href="https://truefanplaylists.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 max-w-[600px] px-10 py-8 rounded-lg border border-blue-200/30 bg-white/10 shadow-md hover:border-blue-200 hover:shadow-[0_0_22px_rgba(147,197,253,0.7)] transition-all duration-300">
            <img src={NewLogo} alt="Visit second website" className="h-24 w-auto block" />
            <h3 className="text-white text-xl font-semibold">Playlist Curator Tool</h3>
          </a>
        </div>
      </div>
    </section>
  );
}