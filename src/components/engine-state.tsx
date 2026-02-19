import { createContext, useContext, useState } from "react";
import type { Node } from "../util/engine";

interface EngineState {
    nodes: Node[]
    setNodes: (nodes: Node[]) => void
    selectedNodeId?: string
    setSelectedNodeId?: (id: string) => void
}

const EngineStateContext = createContext<EngineState | null>(null)

export default function EngineStateProvider({ children }: { children: React.ReactNode }) {
    const [nodes, setNodes] = useState<Node[]>([])
    const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>(undefined)

    return (
        <EngineStateContext.Provider value={{ nodes, setNodes, selectedNodeId, setSelectedNodeId }}>
            {children}
        </EngineStateContext.Provider>
    )
}

export function useEngineState() {
    const context = useContext(EngineStateContext)
    if (!context) {
        throw new Error("useEngineState must be used within an EngineStateProvider")
    }
    return context
}