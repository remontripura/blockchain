export const CustomPrevArrow = ({ onClick }) => (
    <button
      type='button'
      className='slick-prev -mb-7 -top-24 lg:-top-11 left-[calc(100%-80px)]  w-9 h-9 rounded-sm  bg-gray-400 hover:bg-black  focus:bg-black flex  place-items-center justify-center '
      onClick={onClick}
    >
      Previous
    </button>
  );
  
  export const SampleNextArrow = ({ onClick }) => (
    <button
      type='button'
      className='slick-next -top-24 lg:-top-11 right-0 rounded-sm  w-9 h-9 bg-gray-400 hover:bg-black text-black flex justify-center place-items-center focus:bg-black  '
      onClick={onClick}
    >
      Previous
    </button>
  );