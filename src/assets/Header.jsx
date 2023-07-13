import { Filters } from './Filters.jsx';
import { FaCartPlus } from "react-icons/fa";
export function Header({changeFilters}) {
    return (
        <header>
            <h1>React Shop <FaCartPlus /> </h1>
            <Filters onChange={changeFilters} />
        </header>
    )

}