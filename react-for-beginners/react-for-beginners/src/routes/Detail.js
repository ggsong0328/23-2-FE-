import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(details);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Movie
          id={details.id}
          coverImg={details.medium_cover_image}
          title={details.title}
          summary={details.summary}
          genres={details.genres}
        />
      )}
    </div>
  );
}

export default Detail;
