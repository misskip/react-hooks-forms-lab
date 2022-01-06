import React, {useState} from 'react'
export default Dropdown;


function Dropdown({
    id,
    items, 
    prompt,
    value,
    onChange,
}) {
    
    
const [display, setDisplay] = useState(false); 
const [query, setQuery] = useState("");

function filter(items) {
    return items.filter((item) =>
            item[id] > -1)
}

function displayValue() {
    if(query.length > 0) return query;
    if(value) return value[id];
    return "";
}

return (
        
    
<div className="Dropdown">
    <div className=" control" onClick={()=> setDisplay(prev =>!prev)}>
        <div className="selected-value">
            <input type="text"
            placeholder={value ? value[id] : prompt}
            value={displayValue}
            onChange={e => {
                setQuery(e.target.value)
                onChange(null)
            }}
            onClick={()=> setDisplay(prev => !prev)}/>
            <div className={`arrow ${display ? "display" : null}`}/>
    </div>
    <div className ={`items ${items ? "items" : null}`}>
        {filter(items).map((item) => (
            <div
            key={item[id]}
            className={`item ${
                value === item ? "selected" : null
            }`}
        
        onClick={() => {
            setQuery("");
            onChange(item);
            setDisplay(false);
        }}>

            </div>
        ))}
    </div>
    </div>
</div>
)}  
       


