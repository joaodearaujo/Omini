import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Outlet from "./components/Outlet/Outlet"
import Overview from "./pages/Overview/Overview"

function App() {

  return (
  <div className="bg-white w-full h-screen flex gap-4">                   
      <Sidebar/>

      <div className="h-full flex-1 flex-col gap-4 p-4 flex bg-blue" >
        <Header/>

        <main className="w-full flex-1 flex flex-col justify-between">
          <Outlet>
            <Overview/>
          </Outlet>
        </main>
      </div>

  </div>
  )
}

export default App
