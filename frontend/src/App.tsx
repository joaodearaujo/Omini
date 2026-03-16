import Sidebar from "./features/Sidebar/Sidebar"
import Header from "./features/Header/Header"
import Outlet from "./features/Outlet/Outlet"
import Overview from "./pages/Overview/Overview"

function App() {

  return (
  <div className="bg-white w-full h-screen flex gap-4">                   
      <Sidebar/>

      <div className="w-px h-full bg-black/10"/>

      <div className="h-full flex-1 flex-col p-4 gap-6 flex bg-blue " >
        <Header/>

        <Outlet>
          <Overview/>
        </Outlet>
      </div>

  </div>
  )
}

export default App
