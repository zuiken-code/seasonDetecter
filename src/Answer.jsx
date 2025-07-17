import React from 'react'
import konan from "./Data/konan.json";

export const Answer = ({selected,episode}) => {
    var all_season = konan.length;

    function detectAnswer(episode){
        if(episode = "コナン"){
            return detect(konan);
        }
    }

    function detect(data){
        var num=0;
        var canDetect = false;
        for(let season = 1; season <= all_season; season++){
            if(data[season-1]["start"] <= episode & episode <= data[season-1]["end"]){
                num = season;
                canDetect = true;
                break;
            }
        }
        if(canDetect){
            return num;
        }else{
            if(episode > all_season+1){
                return all_season+1;
            }else{
               return 0; 
            }
            
        }
    }
  return (
    <div className="answer-box">
        <p>{episode}話は{detectAnswer(episode)}シーズンです</p>
    </div>
  )
};
