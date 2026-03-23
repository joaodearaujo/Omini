import { Outlet } from "react-router";

const MainContainer = () => {
  
  return (
    <main className="w-full h-full flex justify-center items-center">
      
      <Outlet />
    </main>
  )
}

export default MainContainer;
