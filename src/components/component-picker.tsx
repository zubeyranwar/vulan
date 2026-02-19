import { Node, type NodeType } from "../util/engine"
import { useEngineState } from "./engine-state"

export default function ComponentPicker() {
    const { setNodes, setSelectedNodeId } = useEngineState()

    const handleAddComponent = (type: NodeType) => {
        const node = new Node(type)
        setNodes(prev => [...prev, node])
        setSelectedNodeId(node.id)
    }

    return (
        <div className="w-full">
            <div className="w-1/4 flex items-center gap-8">
                <button onClick={() => handleAddComponent("frame")}>Frame</button>
                <button onClick={() => handleAddComponent("stack")}>Stack</button>
                <button onClick={() => handleAddComponent("text")}>Text</button>
            </div>
        </div>
    )
}