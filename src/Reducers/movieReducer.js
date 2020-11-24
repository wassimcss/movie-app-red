import { v4 as uuidv4 } from 'uuid'
import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_KEYWORD, GET_RATING } from '../Actions/Types';

const initialState = {
  movies: [
    {
      id: uuidv4(),
      title: "Black Sails",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZmExNzU1M2YtNGUzOC00MmM0LWEwYzYtZWJiYjYxNDcwY2E0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
      rate: 7.8,
      description: "Follows Captain Flint and his pirates twenty years prior to Robert Louis Stevenson's classic novel Treasure Island",
      trailer: "https://www.youtube.com/embed/rT2Y5jjBNpQ"
    },
    {
      id: uuidv4(),
      title: "Black List",
      posterUrl: "https://i2.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2018/11/203AD589-D9BC-4842-BE7A-3FAC786F49EA.jpeg?fit=750%2C947&ssl=1",
      rate: 7.6,
      description: "A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
      trailer: "https://www.youtube.com/embed/XihA6GWIBdM"
    },
    {
      id: uuidv4(),
      title: "The Walking deads",
      posterUrl: "https://fr.web.img2.acsta.net/c_216_288/medias/nmedia/18/78/35/82/20303823.jpg",
      rate: 8.1,
      description: "Series overview. The Walking Dead takes place after the onset of a worldwide zombie apocalypse. The zombies, colloquially referred to as walkers, shamble towards living humans and other creatures to eat them; they are attracted to noise, such as gunshots, and to different scents, e.g. humans",
      trailer: "https://www.youtube.com/embed/sfAc2U20uyg"
    },
  ],
  keyword: "",
  rating: 1
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_MOVIE: {
      return { ...state, movies: [...state.movies, action.payload] }
    }

    case DELETE_MOVIE: {
      return { ...state, movies: state.movies.filter(el => el.id !== action.payload) }
    }

    case EDIT_MOVIE : {
      return {...state,movies:state.movies.map(el => el.id ===action.payload.id ? {...el,...action.payload.value} : el)}
    }

    case GET_KEYWORD:
      return { ...state, keyword: action.payload }
    case GET_RATING:
      return {...state,rating:action.payload}
    default:
      return state
  }
}
export default movieReducer;