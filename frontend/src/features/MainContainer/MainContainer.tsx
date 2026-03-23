import { Outlet } from "react-router";

const MainContainer = () => {
  
  return (
    <main className="w-full h-full min-w-0 flex justify-center items-start p-4">
      <Outlet />
    </main>
  )
}

export default MainContainer;
