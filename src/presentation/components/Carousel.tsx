import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Carousel () {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };


    let slides = [
        "../../../public/tienda-bolsa.jpg",
        "../../../public/tienda-donas.jpg",
        "../../../public/tienda-productos.jpg",
        "../../../public/tienda-ropa.jpg",
        "../../../public/tienda-telefono.jpg"
    ]

    return (
        <div className="overflow-hidden relative my-10 pb-10 md:mx-10 h-3/4">
          <div
            className={`flex transition ease-out duration-40 mb-80 pb-5 mx-auto`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s) => {
              return <img src={s} key={"img" + s} />;
            })}
          </div>
    
          <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-6 text-2xl">
            <button onClick={previousSlide}>
              <FaArrowCircleLeft />
            </button>
            <button onClick={nextSlide}>
              <FaArrowCircleRight />
            </button>
          </div>
    
          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s: any, i) => {
              return (
                <div
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={"circle" + i}
                  className={`rounded-full w-5 h-5 cursor-pointer  ${
                    i == current ? "bg-white" : "bg-gray-500"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      );
    }