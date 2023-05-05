function SearchBar({searchTerm,onSearchChange}){
return(
    /*I have styled the searchbar using its id*/
    <div className="search">
      <input
          className="searchbar" 
          type="text" 
          placeholder="Search Product..."
          value={searchTerm}
          onChange={onSearchChange}
      >
      
      </input>
    </div>
   

)
}
export default SearchBar;