import { useState, type FormEvent } from "react";

const NewItemForm = () => {
    const [value, setValue] = useState("");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(value);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="my-4 flex w-full max-w-md items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 p-2 shadow-lg shadow-black/20 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900"
        >
            <input
                className="min-w-0 flex-1 rounded-md border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-50 outline-none transition-all duration-200 placeholder:text-zinc-600 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="New task"
            />
            <button
                className="h-10 rounded-md bg-green-500 px-4 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-400 active:translate-y-0 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
                disabled={!value.trim()}
                type="submit"
            >
                Add
            </button>
        </form>
    );
};

export default NewItemForm;
