import Menu from "@/components/Menu";

function NotFound() {
  return (
    <div className="relative flex flex-row justify-center ">
      <Menu />
      <div className="text-center text-yellow-500 mt-20">
        <i className="ri-error-warning-fill text-center text-5xl"></i>
        <p className=" text-xl mt-2 text-gray-600">The page you are looking for doesn't exist!</p>
      </div>
    </div>
  );
}

export default NotFound;
