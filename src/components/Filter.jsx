import { useState, useContext } from 'react';
import Select from 'react-select'
import { FilterContext } from '../context/MyContext';

function Filter() {
    //context
    const { filterV, setFilterV } = useContext(FilterContext);


    //select-options
    const options = [
        { value: '', label: 'All' },
        { value: 'Africa', label: 'Africa' },
        { value: 'America', label: 'America' },
        { value: 'Asia', label: 'Asia' },
        { value: 'Europe', label: 'Europe' },
        { value: 'Oceania', label: 'Oceania' },
    ];

    //render
    return (
        <div className="h-11 md:w-auto flex items-center md:justify-center rounded-md">
            <Select
                className="w-full md:w-auto px-1 rounded"
                id='select'
                options={options}
                placeholder="Filter by Region"
                onChange={(e) => setFilterV(e.value)}
            />
        </div>
    )
}
export default Filter