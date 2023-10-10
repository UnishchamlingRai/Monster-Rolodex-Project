import React, { useEffect, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import './App.css'

import CardList from "./components/CardList/CardList";
const App = () => {
  let [monster, setMonster] = useState([{name:"Unish"}]);
  let [searchField,setSearchField]=useState("")
  let [StringSearch,setStringSearch]=useState("")
  let [filteredMonster,setFilteredMonster]=useState(monster)
  useEffect(() => {
    // console.log("UseEffect")
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const newData = await response.json();
      setMonster(newData);
    };
    fetchData();
  }, []);

  useEffect(()=>{
    // console.log("Calling Filtered us effect")
    let newFilteredMonster=monster.filter((monster)=>{
      if(monster.name){
        return monster.name.toLocaleLowerCase().includes(searchField)
      }
    
    })
    setFilteredMonster(newFilteredMonster)

  },[searchField,monster])


const onStringChange=(event)=>{
  setStringSearch(event.target.value)

}
  
  const onChangeHandler=(event)=>{
    let searchValue=event.target.value.toLocaleLowerCase()
   setSearchField(searchValue)
  }

console.log("Render")

  return (
    <div>
   <SearchBox placeholder={"Monster Search"} className="monster-search" searchHandler={onChangeHandler}/>
      <input type="search" placeholder="Set  Search" onChange={onStringChange} />
      <CardList filteredMonster={filteredMonster} />
     
    </div>
  );
};

export default App;
