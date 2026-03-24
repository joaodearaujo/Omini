import Sidebar from "./features/Sidebar/Sidebar";
import MainContainer from "./features/MainContainer/MainContainer";
import Overview from "./pages/Overview/Overview";
import MyCards from "./pages/MyCards/MyCards";
import { createBrowserRouter, RouterProvider} from 'react-router';

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
          element: <MyCards/>   
        },
        {
          path: '/goals',
          element: <MyCards/>   
        },
        {
          path: '/settings',
          element: <MyCards/>   
        },
      ]
    },
  ]
)

  return <RouterProvider router={router}/>
}

export default App
