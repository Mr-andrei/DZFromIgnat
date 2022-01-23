import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    onChangeRange2: (num: number) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange2, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeRange2 && onChangeRange2(+e.currentTarget.value)
    }
    return (
        <>
            <input type={'range'}
                   onChange={onChangeCallback}
            />
        </>
    )
}

export default SuperDoubleRange
