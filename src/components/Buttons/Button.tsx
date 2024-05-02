import React from "react"
import styled from "styled-components"
import { useAtom } from "jotai"
import { inputAtom } from "../Input"

const ButtonItem = styled.button`
    width: 100%;
    height: 80px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    margin: 5px;
    background: #929292;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #cecece;
    }
    &:active {
      background: #b8b8b8;
    }
`

interface ButtonProps {
  children: string
}

const Button: React.FC<ButtonProps> = ({children}) => {

  const [, setInputValue] = useAtom(inputAtom)

  const handleBtnClick = () => {
    setInputValue((prevValue: string) => prevValue + children)
  }

  return (
    <ButtonItem onClick={handleBtnClick}>
      {children}
    </ButtonItem>
  )
}

export default Button
