import { useState } from 'react';
import { PriceRangeContext } from './priceRangeContenxt';



function PriceRangeProvider({ children }) {
    const [priceRange, setPriceRange] = useState(0);

    return (
        <PriceRangeContext.Provider value={{ priceRange, setPriceRange }}>
            {children}
        </PriceRangeContext.Provider>
    );
}


export default PriceRangeProvider;
