'use client'

// import Select from 'react-select'
import dynamic from "next/dynamic";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const ReactSelectNoSSR = dynamic(() => import('react-select'), {
    loading: () =>
    <input type = "text" />,
    ssr: false
});

const SelectSearchInput = () => (
    <ReactSelectNoSSR options={options} isSearchable />
)

export default SelectSearchInput