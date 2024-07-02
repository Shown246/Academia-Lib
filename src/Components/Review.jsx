import { Carousel, IconButton } from "@material-tailwind/react";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Review() {
  return (
    <div className="bg-genoa rounded-xl">
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-200 shadow-none mx-auto my-10">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-200 shadow-none">
          <IoPersonCircleOutline size={60} />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Sarah M.
                </h5>
                <div className="5 flex items-center gap-0">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Absolutely loved the selection of books on this website. The ordering process was smooth, and delivery was quick. Will definitely be coming back for more!
            </p>
          </div>
        </div>
        </div>
        <div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-200 shadow-none mx-auto my-10">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-200 shadow-none">
          <IoPersonCircleOutline  size={60} />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                John D.
                </h5>
                <div className="5 flex items-center gap-0">
                 
                </div>
              </div>
              
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Great website with a wide variety of books. Found exactly what I was looking for. The checkout process was easy, and the books arrived on time. Highly recommended!
            </p>
          </div>
        </div>
        </div>
        <div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-200 shadow-none mx-auto my-10">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-200 shadow-none">
          <IoPersonCircleOutline  size={60} />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Emily W.
                </h5>
                <div className="5 flex items-center gap-0">
                 
                </div>
              </div>
              
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Fantastic service! The website is easy to navigate, and the selection of books is amazing. The books arrived well-packaged and in perfect condition. Will be ordering again soon!
            </p>
          </div>
        </div>
        </div>
        <div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-200 shadow-none mx-auto my-10">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-200 shadow-none">
          <IoPersonCircleOutline  size={60}/>
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  David S.
                </h5>
                <div className="5 flex items-center gap-0">
                
                </div>
              </div>
              
            </div>
          </div>
          <div className="mb-6 p-0">
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          I had a great experience shopping on this website. The prices are competitive, and the delivery was fast. The books were exactly as described. Will definitely recommend to friends and family!
            </p>
          </div>
        </div>
        </div>
        
      </Carousel>
    </div>
  );
}
