import Sidebar from "./features/Sidebar/Sidebar";
import Header from "./features/Header/Header";
import MainContainer from "./features/MainContainer/MainContainer";
import Overview from "./pages/Overview/Overview";
import MyCards from "./pages/MyCards/MyCards";
import { createBrowserRouter, RouterProvider} from 'react-router';

const RootLayout = () => {
  return (
    <div className="bg-white w-full h-screen flex gap-4">                     
      <Sidebar/>

      <div className="w-px h-full bg-black/10"/>

      <div className="h-full flex-1 flex-col p-8 gap-4 flex bg-blue " >
        <Header />
        <MainContainer />
      </div> 
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
