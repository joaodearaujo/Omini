import type { OutletProps } from "./Outlet.type"

const Outlet = ({ children }: OutletProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center p-4 ">
      {children}
    </div>
  )
}

export default Outlet
