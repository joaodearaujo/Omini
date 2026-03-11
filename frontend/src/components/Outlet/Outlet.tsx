import type { OutletProps } from "./Outlet.type"

const Outlet = ({ children }: OutletProps) => {
  return (
    <div className="w-[95%] h-full flex justify-between items-center">
      {children}
    </div>
  )
}

export default Outlet
