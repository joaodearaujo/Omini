import { Outlet } from "react-router";

const MainContainer = () => {
  return (

    <main className="w-full max-h-full min-w-0 min-h-0 flex justify-center items-start p-4 mx-8 animate-in fade-in duration-700">
      <Outlet />
    </main>
  );
};

export default MainContainer;