export const Episode = ({episode, setepisode}) => {

  return (
    <div>
      <input type="number" id="num1" min="1" max="5" value={episode} onChange={(event)=>setepisode(event.target.value)}/>
    </div>
    
  )
};