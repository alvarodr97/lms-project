import "../styles/globalLoader.css";

export const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center z-30">
      <span className="loader"></span>
    </div>
  );
};
