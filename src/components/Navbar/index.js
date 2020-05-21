import React, { useState } from 'react';
import './style.css';

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        sessionStorage.setItem('key', e.target.searchInput.value.toLowerCase().trim());
        console.log(e.target.searchInput.value)
        if (e.target.searchInput.value !== '') {
            toggleSearch();
        }
    }

    const toggleSearch = () => {
        setSearch(!search);
        const searchInput = document.querySelector('#searchInput');
        if (search && searchInput.value !== '') {
            sessionStorage.setItem('key', searchInput.value.toLowerCase().trim());
            searchInput.parentElement.submit();
        }
        searchInput.value = '';
        searchInput.focus();
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><a href="/contacto#subscribirse">Subscribirse</a></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch} action="/resultados-busqueda">
                    <input id='searchInput' name='searchInput' type="text" className={searchClass} placeholder="Buscar" />
                    <img onClick={toggleSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Buscar" />
                </form>
            </div>
        </div>
    )
}

export default Navbar