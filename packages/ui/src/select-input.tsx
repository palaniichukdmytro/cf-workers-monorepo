'use client'

import React from 'react'


import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const SelectSearchInput = () => (
    <Select options={options} />
)

export default SelectSearchInput