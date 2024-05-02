import React from 'react'
import styled from 'styled-components'
import { useAtom } from 'jotai'
import { inputAtom } from '../Input'

const OperationButtonItem = styled.button`
    width: 100%;
    height: 80px;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    background: #b9d852;
    color: #fff;
    margin: 5px;
    cursor: pointer;
    &:hover {
      background: #78d852;
    }
    &:active {
      background: #6cc249;
    }
`

interface OperationButtonProps {
    children: string,
    operation: any
}

const OperationButton: React.FC<OperationButtonProps> = ({
    children, operation
}) => {

  const [, setInputValue] = useAtom(inputAtom)

  const handleOperationBtnClick = () => {
    setInputValue(operation)
  }

  return (
    <OperationButtonItem 
    onClick={handleOperationBtnClick}
    >
      {children}
    </OperationButtonItem>
  )
}

export default OperationButton
