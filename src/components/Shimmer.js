const Shimmer = () => {
  return (
    <div className="m-auto w-10/12">
      <div className="flex flex-wrap">
        {Array.from({ length: 10 }).map((item, i) => (
          <div
            key={i}
            className="w-[250px] p-4 m-6 h-[300px] bg-gray-200 shadow-md">
            <div className="w-full h-44 bg-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shimmer;
