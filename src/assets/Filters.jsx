import '../css/filters.css'
import { useState, useId } from 'react'

export function Filters( {onChange}) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeMinCategory = (event) => {        
        onChange(prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceId}>Precio a partir de:</label>
                <input
                    type="range"
                    id={minPriceId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice} />
                    <span>${minPrice}</span>

            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeMinCategory}>
                    <option value="all">Todas</option>
                    <option value="smartphones">Móviles</option>
                    <option value="laptops">Laptops</option>
                </select>
            </div>
        </section>
    )
}