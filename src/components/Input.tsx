import styled from "styled-components"
import { useAtom } from "jotai"
import { atom } from 'jotai'

export const inputAtom = atom('')

const InputItem = styled.input`
    width: 100%;
    height: 20%;
    background: #c9c9c9;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 50px;
    color: #ffffff;
    text-align: right;
    padding: 30px;
`

export default function Input() {

  const [inputValue, setInputValue] = useAtom(inputAtom)
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  return (
    <InputItem
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      disabled
    />
  )
}
