export type ItemDTO = {
    id: string;
    text: string;
    columnId: string;
}

export type ColumnDTO = {
    id: string;
    name: string;
    color?: Colors;
}

export type ColumnProps = {
    id: string;
    name: string;
    color?: Colors;
    items: ItemDTO[]

}
type Colors = "GREEN" | "RED" | "BLUE" | "PURPLE"

export const mockColumns: ColumnDTO[] = [
    {
        id: "1",
        name: "Daily",
        color: "BLUE"
    },
    {
        id: "2",
        name: "Weekly",
        color: "RED"
    },
    {
        id: "3",
        name: "Monthly",
        color: "PURPLE"
    },
]


export const mockItems: ItemDTO[] = [
    {
        id: "Сходить в рестик с девушкой",
        text: "Сходить в рестик с девушкой",
        columnId: '2'
    },
    {
        id: "Выучить 10 слов на английском",
        text: "Выучить 10 слов на английском",
        columnId: '2'
    },
    {
        id: "Сделать 10 откликов",
        text: "Сделать 10 откликов",
        columnId: '1'
    },
]