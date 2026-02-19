import ComponentPicker from "./component-picker";

export default function NavPanel() {
  return (
    <nav>
      <div className="h-[40px] fixed top-0 left-0 z-10 bg-[#111111]/90 text-white w-full flex items-center px-2">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-[180px]">
            <h3 className="w-fit">Framer</h3>
            <ComponentPicker />
          </div>
          <div className="flex-1">
            <h3>Untitled</h3>
          </div>
          <div className="">
            <button className="flex justify-end">Publish</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
