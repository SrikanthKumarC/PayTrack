import Menu from "@/components/Menu";

function NotFound() {
  return (
    <div className="relative flex flex-row justify-center ">
      <Menu />
      <div className="text-center text-yellow-500 mt-20">
        <h1 className="text-8xl dark:text-gray-100 text-black mb-5">404</h1>
        <i className="ri-error-warning-fill text-center text-5xl"></i>
        <p className=" text-xl mt-4 text-gray-600 dark:text-gray-400 sm:px-0 px-4">The page you are looking for doesn't exist!</p>
      </div>
    </div>
  );
}

export default NotFound;
