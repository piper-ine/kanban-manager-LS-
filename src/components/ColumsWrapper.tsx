import Column from "./Column";
import useInitial from "../hooks/useInitial";
import { DragDropProvider } from "@dnd-kit/react";
import { useEffect, useState } from "react";

const ColumsWrapper = () => {
    const inital = useInitial()
    const [items, setItems] = useState(inital.items)
    const [columns] = useState(inital.columns)
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])
    return (
        <DragDropProvider
            onDragEnd={(event) => {
                if (event.canceled) return
                const source = event.operation.source
                const target = event.operation.target
                if (!target || !source) return
                // target - col 
                // source - source
                // lol
                console.log(target.id);
                console.log(source.id);
                setItems((prevItems) =>
                    prevItems.map((item) =>
                        item.id === source.id
                            ? { ...item, columnId: String(target.id) }
                            : item
                    )
                )
            }}
        >


            <div className="flex min-h-[28rem] gap-4 md:gap-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-3 md:p-4 justify-center">
                {columns.map((col) => (
                    <Column
                        key={col.id}
                        id={col.id}
                        name={col.name}
                        color={col.color}
                        items={items.filter((i) => i.columnId === col.id)}
                    />
                ))}
            </div>
        </DragDropProvider>
    );
}

export default ColumsWrapper;
