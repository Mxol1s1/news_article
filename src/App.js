import { useEffect, useState } from 'react';
import './App.css';
import {Header, NavBar, Content} from "./components/index"
import axios from 'axios';

function App() {

  const API_URL = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"

  //stores article state
  const [articles, setArticles] = useState([])

  //hanlde loading state while fetching data
  const [loading, setLoading] = useState(true)

  //handle error state for fetching  data from api
  const [fetchError, setFetchError] =  useState(false) 
  useEffect(() => {
    try{
        axios.get(API_URL)
      .then((response) =>{

        setArticles(response.data)
      }).catch((error) =>{
         setFetchError(error.message)
      })
    }finally{
        setLoading(false)
    }

}, [])


 


  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <main>
        {fetchError && <p style={{
          color:"red" ,textAlign:"center" }} >
          Error: Please try and reload page</p>
        }
        {loading && <p>Loading Articles...</p>}

        {!fetchError && !loading &&
          <Content articles={articles}/>
          }
      </main>
     
    </div>
  );
}

export default App;
