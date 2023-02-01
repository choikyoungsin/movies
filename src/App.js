
// import React from 'react';
// import axios from "axios";
// import Movie from "./components/Movie";


// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   }

//   getMovies= async () => {
//     const {
//       data :{
//         data: {movies},
//     },
//    } =await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
//     this.setState({movies, isLoading:false })
//   }
//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const {isLoading, movies} = this.state;
//     return (
//       <section className='container'>
//         {
//           isLoading ? (
//           <div className='loader'><span className='loader_text'>'Loading...'</span></div>
//           ) : ( 
//           <div className='movies'>
//               {movies.map( movie => (
          
//                <Movie 
//                   key={movie.id}  
//                   id={movie.id} 
//                   year={movie.year} 
//                   title={movie.title} 
//                   summary={movie.summary} 
//                   poster={movie.medium_cover_image}
//                   genres={movie.genres}
//                />
//               ))
//             }
//           </div>
//         )
//         }
//       </section>
//     );
//   }
// }

// export default App;


import React from 'react';
import Home from './routes/Home'
import Navigation from "./components/Navigation"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './routes/about'
import Detail from './routes/Detail'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="/detail/:id"  element={<Detail />} />
            
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;