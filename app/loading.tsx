import PacmanLoader from "react-spinners/PacmanLoader";

const loading = () => {
  return (
    <>
      <div className="mt-72 flex h-full w-full items-center justify-center text-center text-2xl font-bold uppercase text-white md:text-5xl">
        loading
        <br />
        {/* <br /> */}
        {/* <PacmanLoader color="#fff" /> */}
        &gt;.&lt;
      </div>
    </>
  );
  // return (
  //   <div className="absolute flex items-center justify-center bg-black bg-opacity-50">
  //     <PacmanLoader color="#fff" />
  //   </div>
  // );
};

export default loading;
