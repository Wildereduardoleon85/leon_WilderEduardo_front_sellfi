import { StyledInputBase, Search, SearchIconWrapper } from './SearchInputMUI'


const SearchInput = () => {

    return (
        <Search style={{marginLeft: 'auto'}}>
            <SearchIconWrapper>
                <i className="fas fa-search"/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    )
}

export default SearchInput
