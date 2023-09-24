import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import { useEffect, useState } from "react";
function App() {
  const [result,setResult] = useState([])
  useEffect(()=>{
    var res = []
    fetch("./static/projects.json")
    .then((data)=>data.json())
    .then(
      (data)=>{
        var cnt = data.length
        for(let i=0;i<Math.ceil(cnt/3);i++){
        var cards = []
        for(let j=0;j<3 && i*3+j<cnt;j++){
          cards.push(<Card {...data[i*3+j]}/>)
        }
        res.push(<div class="row">{cards}</div>)
      }
      setResult(res)}
    )
  },[])
  return (
    <>
    <Header />
    <main>
        <h1>Project Experience</h1>
        <article>
          {result}
        </article>
        <Footer />
    </main>
    <footer>
        @copyrights 2023
    </footer></>
  );
}

export default App;
