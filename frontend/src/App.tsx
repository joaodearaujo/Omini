import Sidebar from "./features/Sidebar/Sidebar";
import MainContainer from "./features/MainContainer/MainContainer";
import Overview from "./pages/Overview/Overview";
import MyCards from "./pages/MyCards/MyCards";
import { createBrowserRouter, RouterProvider} from 'react-router';
import Transacitions from "./pages/Transactions/Transacitions";
import GoalsPage from "./pages/GoalsPage/GoalsPage";
import { Settings } from "lucide-react";

const RootLayout = () => {
  return (
    <div className="bg-[#fcfcfc] w-full h-screen flex ">                     
      <Sidebar/>

      <MainContainer />
    </div>
  )
}
  
function App() {

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />, 
      errorElement: <h1>404 Not Found</h1>,
      children:[
        {
          path: '/',
          element: <Overview/>   
        },
        {
          path: '/mycards',
          element: <MyCards/>   
        },
        {
          path: '/transactions',
          element: <Transacitions/>   
        },
        {
          path: '/goals',
          element: <GoalsPage/>   
        },
        {
          path: '/settings',
          element: <Settings/>   
        },
      ]
    },
  ]
)

  return <RouterProvider router={router}/>
}

export default App
