import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps, useState} from 'react'
import "./radio.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

//const [cheked, setCheked] = useState<boolean>(false)

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }


    const mappedOptions: any[] = options ? options.map((o, i) => (

        <label className={"container"} key={name + '-' + i}>{o}

            <input className={"custom-radio"}
                type={"radio"}
                name={name}
                onChange={onChangeCallback}
                checked={o === value}
                value={o}
                // name, checked, value, onChange
            />
            <span className={"checkmark"}></span>
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
