import './App.css';
import { Title } from './Title';
import {Episode} from './Episode';
import {Answer} from './Answer'
import { useState } from "react";

function App() {
  const [selected, setselected] = useState("コナン");
  const [episode, setepisode] = useState(0);
  const [ans, setans]  = useState(0)

  return (
    <div>
      <div className="app-container">
        <Title selected={selected} setselected={setselected} />
        <p>{selected}の話数をシーズンに変換します</p>
        <Episode episode={episode} setepisode={setepisode}/>
        <Answer selected={selected} episode={episode}/>
      </div>
    </div>
  )
}

export default App
