
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className= "container">   
      <Weather defaultCity ='Tallinn' />
     <footer>
      This app was coded by Helen Heidemaa and is{" "} 
     <a href= "https://github.com/helenheidemaa/reactweatherapp" 
     target="_blank">open-sourced on GidHub
   </a>
    </footer>
    </div>
    </div>
  );
}


