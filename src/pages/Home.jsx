import '../styles/Home.css';

import Search from '../components/Search';
import Section from '../components/Section';
import LayoutTypes from '../enums/LayoutTypes';
import { useLocation, useSearchParams } from 'react-router-dom';

function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    let sections;
    if (location.pathname === "/search") {
        let searchText = searchParams.get("query");
        const text = `Search results "${searchText}"`;

        sections = (
            <Section 
                title={text} 
                endpoint={`search/movie?query=${searchText}`}
                layout={LayoutTypes.Grid}     
            />
        );
    } else {
        sections = (
            <div>
                <Section title="Up Coming" endpoint="movie/upcoming" />
                <Section title="Most Popular" endpoint="movie/popular" />
                <Section title="Top Rated" endpoint="movie/top_rated" />
            </div>
        )
    }
    
    return (
        <div className="Home">
            <main>
                <Search />
                {sections}
            </main>
        </div>
    );
}

export default Home;