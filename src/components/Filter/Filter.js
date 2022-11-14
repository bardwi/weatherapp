import React from "react";
import "./Filter.css";

const Filter= ({ filter, setFilter}) => {
    return (
        <div className="search-box"> 
            <i className="fa fa-search fa-lg"></i>
            <input value={filter || ''} onChange={(e)=> setFilter(e.target.value)} className="filter-search"/>
        </div>
    )
}

export default Filter;