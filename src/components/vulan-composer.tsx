import { useEffect, useRef } from "react"
import { Stage, Layer, Rect, Transformer, Text } from "react-konva"
import { useEngineState } from "./engine-state"

export default function VulanComposer() {
    const stageRef = useRef(null)

    const trRef = useRef(null)

    const { nodes, selectedNodeId, setSelectedNodeId } = useEngineState()

    useEffect(() => {
        console.log({ selectedNodeId })
        if (!stageRef.current || !trRef.current) return

        if (!selectedNodeId) {
            trRef.current.nodes([])
            return
        }

        const selectedNode = stageRef.current.findOne(`#${selectedNodeId}`)
        if (selectedNode) {
            trRef.current.nodes([selectedNode])
            trRef.current.getLayer().batchDraw()
        }
    }, [selectedNodeId, nodes])

    const displayNodes = () => {
        return nodes.map(node => {
            switch (node.type) {
                case "frame":
                    return (
                        <Rect
                            id={node.id}
                            key={node.id}
                            x={node.x}
                            y={node.y}
                            width={node.width}
                            height={node.height}
                            fill={node.color}
                            draggable
                            onClick={() => setSelectedNodeId(node.id)}
                        />
                    )
                case "text":
                    return (
                        <Text
                            id={node.id}
                            key={node.id}
                            x={node.x}
                            y={node.y}
                            text={node.text}
                            fontSize={node.fontSize}
                            fill="black"
                            draggable
                            onClick={() => setSelectedNodeId(node.id)}
                        />
                    )
                default:
                    return null
            }
        })
    }

    return (
        <div className="flex-1 bg-gray-200">
            <Stage
                ref={stageRef}
                width={window.innerWidth - 440}
                height={window.innerHeight - 40}
                onMouseDown={(e) => {
                    if (e.target == e.target.getStage()) {
                        setSelectedNodeId(null)
                    }
                }}
            >
                <Layer>
                    {displayNodes()}

                    <Transformer ref={trRef} />
                </Layer>
            </Stage>
        </div>
    )
}