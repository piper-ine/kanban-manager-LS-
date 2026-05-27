import { useDraggable } from "@dnd-kit/react";
import type { ItemDTO } from "../lib/constants";

const Item = ({ id, text, columnId }: ItemDTO) => {
    const { ref } = useDraggable({
        id: id,
        data: {
            columnId, text, id
        }
    })
    return (
        <div className="rounded-md border border-zinc-700 bg-zinc-950 p-3 text-sm text-zinc-100" ref={ref}>
            {text}
        </div>
    );
}

export default Item;
