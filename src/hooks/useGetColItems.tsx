import type { ItemDTO } from "../lib/constants";
import useInitial from "./useInitial";

export function useGetColItems(colId: string): ItemDTO[] {
    const { items } = useInitial()
    return items.filter((item) => item.columnId === colId)
}