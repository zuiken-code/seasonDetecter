export const Title = ({selected, setselected}) => {
  const handleChange = (event) => {
    setselected(event.target.value);
  };

  return (
    <div>
      <div>シーズンチェッカー</div>
      <div>
      <input list="fruits" placeholder="チェックしたいアニメを選んでね" onChange={handleChange} value={selected}/>
      <datalist id="fruits">
        <option value={selected} />
      </datalist>
      </div>
    </div>
    
  )
};
