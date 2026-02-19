import NavPanel from "./components/nav-panel"
import VulanComposer from "./components/vulan-composer"
import LayoutPanel from "./components/layout-panel"
import PropertiesPanel from "./components/properties-panel"
import EngineStateProvider from "./components/engine-state"

function App() {
  return (
    <EngineStateProvider>
      <main className="flex flex-col h-screen">
        <NavPanel />
        <div className="bg-red-400 flex flex-1 w-full mt-10">
          <LayoutPanel />
          <VulanComposer />
          <PropertiesPanel />
        </div>
      </main>
    </EngineStateProvider>
  )
}

export default App
