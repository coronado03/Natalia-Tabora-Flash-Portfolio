import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export default function Home() {
  const notify = () =>
    toast("Fullscreen is recommended for a good experience!");

  useEffect(() => {
    notify();
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          style: {
            border: "2px solid #174CF9",
            padding: "16px",
            color: "#FF2EDD",
          },
        }}
      />
      <div className="portfolio-background1" />
      <div className="portfolio-background2" />
      <div className="portfolio-background3" />
      <div className="portfolio-background4" />
      <div className="portfolio-background5 relative">
        <div className="absolute top-[60 %] left-[25.2%] max-w-[17%]">
          <img className="contain" src="OJITO-.gif" />
        </div>
      </div>

      <div className="portfolio-background6">
        <div>
          <img src="magical.gif" />
        </div>
      </div>
      <div className="portfolio-background7" />
    </>
  );
}
