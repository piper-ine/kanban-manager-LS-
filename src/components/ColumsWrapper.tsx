import Column from "./Column";
import useInitial from "../hooks/useInitial";
import { DragDropProvider } from "@dnd-kit/react";
import { useEffect, useState } from "react";
import NewItemForm from "./NewItemForm";
import ReserveDropZone, { RESERVE_ID } from "./ReserveDropZone";

const ColumsWrapper = () => {
    const inital = useInitial()
    const [items, setItems] = useState(inital.items)
    const [columns] = useState(inital.columns)

    const handleAddItem = (text: string) => {
        setItems((prevItems) => [
            ...prevItems,
            {
                id: `${Date.now()}-${text}`,
                text,
                columnId: columns[0]?.id ?? RESERVE_ID,
            },
        ])
    }

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
                setItems((prevItems) =>
                    prevItems.map((item) =>
                        item.id === String(source.id)
                            ? { ...item, columnId: String(target.id) }
                            : item
                    )
                )
            }}
        >


            <div className="flex min-h-0 flex-1 flex-col">
                <div className="flex min-h-0 flex-1 gap-4 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950 p-3 md:gap-8 md:p-4 md:justify-center">
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
                <ReserveDropZone />
                <NewItemForm onAddItem={handleAddItem} />
            </div>
        </DragDropProvider>
    );
}

export default ColumsWrapper;
