import { mockColumns, mockItems, type ColumnDTO, type ItemDTO } from "../lib/constants"

function getFromStorage<T>(key: string, fallback: T): T {
    try {
        const raw = localStorage.getItem(key)
        if (!raw) {
            localStorage.setItem(key, JSON.stringify(fallback))
            return fallback
        }
        return JSON.parse(raw) as T
    } catch {
        return fallback
    }
}

function useInitial(): { items: ItemDTO[], columns: ColumnDTO[] } {
    return {
        items: getFromStorage<ItemDTO[]>("items", mockItems),
        columns: getFromStorage<ColumnDTO[]>("columns", mockColumns),
    }
}

export default useInitial