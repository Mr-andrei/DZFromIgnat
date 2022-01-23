import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

   const  onChangeRange = (num:number) => {
       setValue1(num)
   }
    const  onChangeRange2 = (num:number) => {
        setValue2(num)
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange2={onChangeRange2}

                />
                <span>{value2}</span>
            </div>
        </div>
    )
}

export default HW11
