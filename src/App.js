import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  const [movie, setMovie] = useState([]);
  const [param, setParam] = useState("");
  // let movie = [];

  const ketikaKlik = () => {
    // console.log(`aku di klik sebanyak ${get} kali`);
    // set(get + 1);
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=397031c0&s=" + param)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.Search);
        console.log(movie);
      });

    // (async () => {
    //   const fetchPromise = await fetch(
    //     "http://www.omdbapi.com/?i=tt3896198&apikey=397031c0&s=" + param
    //   );
    //   const hasilJson = await fetchPromise.json();
    //   const arrayObject = hasilJson.Search;
    //   setMovie(arrayObject);
    //   console.log(movie);
    // })();
  };

  return (
    <div className="py-12 px-14">
      <div className="w-full bg-[url('./img/banner.jpg')] rounded-lg p-10">
        <h1 className="w-full text-3xl font-bold text-white">OMDB Movie</h1>
        <div className="py-10 space-x-5">
          <Input
            placeholder="Search Movie"
            onChange={(e) => {
              setParam(e.target.value);
            }}
          ></Input>
          <Button onClick={() => ketikaKlik()}>Search</Button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-5 items-start justify-evenly py-10">
        {movie ? (
          movie.map((elements, index) => (
            <Card
              key={index}
              src={elements.Poster}
              title={elements.Title}
              year={elements.Year}
            />
          ))
        ) : (
          <h1>Data Tidak ditemukan</h1>
        )}
      </div>
    </div>
  );
}

export default App;
