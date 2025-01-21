import { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import axios from "axios";
import ImageCard from "./components/ImageCard";

function App() {
  const [query, setQuery] = useState(" ");
  const [images, setImages] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault(); // Previne trimiterea formularului
    axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: {
          query,
          client_id: import.meta.env.VITE_UNSPLASH_KEY, // Cheia API
          per_page: 12, // Limita de 12 imagini per pagină
        },
      })
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });

    setImages("");
  };

  useEffect(() => {
    if (images.length > 0) {
      document.body.classList.add("blurred");
    } else {
      document.body.classList.remove("blurred");
    }
  }, [images.length]);

  return (
    <>
      <header className="w-full h-52 bg-primary bg-opacity-95 flex flex-col justify-center items-center gap-5">
        <h2 className="font-bolder text-3xl text-secondary ">
          Search an image
        </h2>
        <SearchInput
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
      </header>
      <main className=" flex flex-col justify-center items-center gap-10">
        {images.length === 0 ? (
          <h2 className="mt-40 text-3xl font-bold text-shadow bg-black bg-opacity-50 text-white py-4 px-8">
            Geen resultaten gevonden...
          </h2>
        ) : (
          <>
            {/* <h1 className="mt-10 text-3xl font-bold text-shadow  bg-black bg-opacity-10 text-white py-2 px-6">Results</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-20">
              {images.map((image) => (
                <ImageCard image={image} key={image.id} />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
