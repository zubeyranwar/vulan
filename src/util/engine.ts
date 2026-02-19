import type { CSSProperties } from "react"

export type NodeType = "frame" | "text" | "stack"

export class Node {
    id: string
    type: NodeType
    parent: Node | null = null
    children: Node[] = []

    x = 0
    y = 0
    width = 100
    height = 100
    rotation = 0
    color = "red"
    text = "Hello World"
    fontSize = 16

    style: CSSProperties = {}

    constructor(type: NodeType, x = 0, y = 0, w = 100, h = 100, color = "#99EEFF") {
        this.id = crypto.randomUUID()
        this.type = type
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.color = color
    }

    add(child: Node) {
        child.parent = this
        this.children.push(child)
    }
}
