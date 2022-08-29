import React, { useState } from 'react'


export default function Search() {
    const [search, setSearch] = useState("");
const handleChange :React.ChangeEventHandler<HTMLInputElement>= ({target:{value}}) => {
    setSearch(value);
    
    }
    
console.log(search)

  return (
      <input type="text" value={search} onChange={handleChange} />
  )
}
