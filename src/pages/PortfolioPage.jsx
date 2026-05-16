import TfLogo from "../assets/TF logo.png";
import NewLogo from "../assets/NewLogo.png";


export default function PortfolioPage() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">Portfolio Showcase</h2>
      <p className="text-gray-600 text-center mb-6">Featured work and media:</p>
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {/* Embedded YouTube Videos */}
        <iframe className="rounded-lg shadow-lg" width="350" height="197" src="https://www.youtube.com/embed/bRryg0_ECC8?si=n00jgArIlgrzxENQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className="rounded-lg shadow-lg" width="350" height="197" src="https://www.youtube.com/embed/qqpjtZPAyzA?si=zhlVvTP19Ke6wkw-&start=9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe className="rounded-lg shadow-lg" width="350" height="197" src="https://www.youtube.com/embed/TUlsMHJ78Gc?si=JGlsJ0LZi7mVfnYA&start=10" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="flex gap-8 justify-center mt-8">
        {/* Linked Images */}
        <a href="https://truefan.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-900 shadow-md hover:bg-gray-800 transition-colors">
          <img src={TfLogo} alt="Visit first website" className="h-11 w-auto block mr-3" />
          <h3 className="text-white text-lg font-semibold">Artist Search Tool</h3>
        </a>
        <a href="https://truefanplaylists.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gray-900 shadow-md hover:bg-gray-800 transition-colors">
          <img src={NewLogo} alt="Visit second website" className="h-11 w-auto block mr-3" />
          <h3 className="text-white text-lg font-semibold">Playlist Curator Tool</h3>
        </a>
      </div>
    </section>
  );
}