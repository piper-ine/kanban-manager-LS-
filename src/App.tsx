import ColumsWrapper from "./components/ColumsWrapper";
import Header from "./components/Header";
import NewItemForm from "./components/NewItemForm";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <ColumsWrapper />
      <NewItemForm />
    </div>
  );
}

export default App;
