import "./App.css";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <>
      <header className="w-full h-52 bg-primary bg-opacity-95 flex flex-col justify-center items-center gap-5">
        <h1 className="font-bold text-3xl text-secondary font-mono">
          Search an image
        </h1>
        <SearchInput />
        
      </header>
    </>
  );
}

export default App;
