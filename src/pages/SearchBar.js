function SearchBar({searchTerm,onSearchChange}){
return(
    /*I have styled the searchbar using its id*/
   <>
      <label className="searchbar">Search</label>
      <input
          className="searchbar" 
          type="text" 
          placeholder="Search description..."
          value={searchTerm}
          onChange={onSearchChange}
      >
      
      </input>
   </>

)
}
export default SearchBar;