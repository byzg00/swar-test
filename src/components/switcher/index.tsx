import React, { useState } from 'react'

import { LanguageSwitcher, RadioButton } from './styled'

type Props = {
  defaultValue: string
  onChange: (value: string) => void
  values: string[]
}

export const Switcher = (props: Props) => {
  const { defaultValue, onChange, values } = props
  const [value, setValue] = useState<string>(defaultValue)

  return (
    <LanguageSwitcher>
      {values.map((_value) => (
        <RadioButton checked={value === _value} key={_value}>
          <input
            type="radio"
            value="ru"
            checked={value === _value}
            onChange={() => {
              onChange(_value)
              setValue(_value)
            }}
          />
          {_value}
        </RadioButton>
      ))}
    </LanguageSwitcher>
  )
}
