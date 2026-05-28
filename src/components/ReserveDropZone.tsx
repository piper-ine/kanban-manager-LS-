import { useDroppable } from "@dnd-kit/react";

const RESERVE_ID = "reserve";

const ReserveDropZone = () => {
    const { ref, isDropTarget } = useDroppable({
        id: RESERVE_ID,
    });

    return (
        <div
            ref={ref}
            className={`my-4 flex min-h-20 w-full max-w-md items-center justify-center rounded-lg border border-dashed p-4 text-sm font-medium transition-all duration-200 ${isDropTarget
                ? "border-red-400 bg-red-500/10 text-red-200"
                : "border-zinc-700 bg-zinc-900/60 text-zinc-500"
                }`}
        >
            Положи сюда чтобы удалить
        </div>
    );
}

export { RESERVE_ID };
export default ReserveDropZone;
