import { Outlet } from "react-router";

const STYLE =  {
  container: 'w-full max-h-full min-w-0 min-h-0 flex justify-center items-start p-4 mx-8 animate-in fade-in duration-700',
}

const MainContainer = () => {
  return (
    <div className={STYLE.container}>
      <Outlet />
    </div>
  );
};

export default MainContainer;