import SlideImages from "@/components/images/slide-images";
// import img1 from "@assets/images/banner-img1.png";
import img1 from "../../../assets/images/banner-img1.png";
import img2 from "../../../assets/images/banner-img2.jpg";
import img3 from "../../../assets/images/banner-img3.jpg";
export default function MainHeros() {
  return (
    <section className="grid md:grid-cols-2 translate-y-12 px-0 gap-10">
      <SlideImages images={[img1, img2, img3]} />
      <div className="text-color justify-center flex flex-col">
        <h1 className="text-3xl font-bold">
          Welcome to, <span className="text-gradient">NextJS</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet conLaborum, reprehenderit!sectetur.</p>
        <span className="my-2.5">
          <button
            className="inline-block mt-4 px-4 py-2 rounded-lg
             bg-gradient-to-r from-[#d9a066] to-[#8b4513]
             text-white font-bold no-underline
             hover:from-[#e2ac6f] hover:to-[#9c5930]
             hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
             active:from-[#e2ac6f] active:to-[#9c5930]
             active:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
             transition-all duration-300"
          >
            Take a sip now
          </button>
        </span>
      </div>
    </section>
  );
}
