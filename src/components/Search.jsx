import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/Search.css'

export default function Search () {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = ({ target }) => {
        setSearch(target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/search?query=${search}`, { replace: true });
    }

    return (
        <div className="Search">
            <form method="get" action="search" onSubmit={handleSubmit}>
                <div className="search-control">
                    <input 
                        id='search-input' 
                        type='text' 
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
            </form>
        </div>
    )
}