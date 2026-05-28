import useInitial from "../hooks/useInitial";

const Header = () => {
    useInitial()
    return (
        <div className='shrink-0 py-6'>
            <span className='header_prev'>Kanban manager</span>
            <h1 className='text-3xl text-white font-bold'>Добро пожаловать</h1>
            <p className='text-xl text-white font-semibold py-2'>Управляйте задачами с помощью Drag&drop</p>
        </div>
    );
}

export default Header;
