import { useDroppable } from "@dnd-kit/react";
import type { ColumnProps } from "../lib/constants";
import Item from "./Item";

const colorClasses = {
    BLUE: "border-blue-500 text-blue-300",
    GREEN: "border-green-500 text-green-300",
    RED: "border-red-500 text-red-300",
    PURPLE: "border-purple-500 text-purple-300",
} as const;

const Column = ({ id, name, color = "BLUE", items }: ColumnProps) => {
    const { ref, isDropTarget } = useDroppable({
        id: id
    })

    return (
        <section ref={ref} className={`flex h-full min-h-0 w-72 shrink-0 flex-col rounded-lg border bg-zinc-900 p-3 shadow-lg shadow-black/20 transition-opacity ${isDropTarget ? "opacity-60" : "opacity-100"} ${colorClasses[color]}`}>
            <header className="mb-3 flex items-center justify-between border-b border-zinc-800 pb-3">
                <h2 className="truncate text-base font-semibold">{name}</h2>
                <span className="rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs font-semibold text-zinc-300">
                    {items.length}
                </span>
            </header>
            {items.length !== 0 ? (
                <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
                    {items.map((item) => (
                        // <div key={item} className="rounded-md border border-zinc-700 bg-zinc-950 p-3 text-sm text-zinc-100">
                        //     {item}
                        // </div>
                        <Item key={item.id} text={item.text} id={item.id} columnId={item.columnId} />
                    ))}
                </div>
            ) : <h1>
                Пока тут пусто :(
            </h1>}
        </section>
    );
}

export default Column;
