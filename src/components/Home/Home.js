import MovieList from '../MovieList/MovieList'
import { useState, useEffect } from 'react';
 
import axios from 'axios';
 
function Home(){
    const [data,setData]=useState([]);
    const getAllMovies = async() =>{
       
        return await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=b3b34c09a0a0dab7362de1241d19f508&`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    
    

 
useEffect(() => {
const getdata = async () => {
let data = await getAllMovies();
setData(data);
}
getdata();
},[]);

return(
<>

<MovieList data={data}/>

</>
);
}

export default Home;
                        
                        

 
 