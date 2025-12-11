import React, { useCallback, useState } from 'react'
import Title from './Title'
import Display from './Display'
import Button from './Button'

const Parent = () => {
    const [salary, setSalary] = useState(60000)
    const [age, setAge] = useState(20)

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])

    const incrementAge = useCallback(() => {
        setAge(age + 5)
    },[age])

    return (
        <div>
            <Title />
            <Display text="age" displayValue={age} />
            <Button handleClick={incrementAge} content="Increment Age" />
            <Display text="salary" displayValue={salary} />
            <Button handleClick={incrementSalary} content="Increment Salary" />
        </div>
    )
}

export default Parent
