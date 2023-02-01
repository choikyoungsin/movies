import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./detail.scss";

    

const Detail = () => {
   const {id} =useParams();
   const [movie, setMovie] =useState();
   const [loading, setLoading] = useState(true);
   const getMovie = async () => {
      const json= await (
         await   fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
   }

   useEffect(() => {
      getMovie();
   }) 
   
    return (
        <div className="movie-detail">
         {loading ?  (
            <div className="loadings">
               <span className="loading">데이터 불러오는중</span>
            </div>
         ) : (
            <div className="movies">
               <h2 className="title">{movie.slug}</h2>   
               <div className="img-box">
                  <img src={movie.large_cover_image} alt={movie.title} />
               </div>
               <div className="content">
                  <div className="info">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-rating">별점 :{movie.rating}</div>
                    <div className="movie-runtime">상영시간 :{movie.runtime}</div>
                  </div>
                  <div className="genres">
                    <ul className="list">
                        {
                            movie.genres.map((genre, idx) =><li key={idx}>{genre}</li>)
                        }
                    </ul>
                  </div>
                  <div className="summarys">
                    <p className="summary">
                        {movie.description_full}
                    </p>
                  </div>
               </div>      
            </div>
         )}
      </div>
    )
}
export default Detail;