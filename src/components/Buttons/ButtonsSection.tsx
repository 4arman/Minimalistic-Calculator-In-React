import styled from "styled-components"
import Button from "./Button"
import OperationButton from "./OperationButton"

const ButtonsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ButtonsBlock = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function ButtonsSection() {
  return (
    <ButtonsContainer>

        <ButtonsBlock>

          <OperationButton
          operation={(value: string) => value = ''}
          >
            AC
          </OperationButton>

          <OperationButton
          operation={(value: string) => value.slice(0, -1)}
          >
            CE
          </OperationButton>
          
          <Button>.</Button>
          <Button>/</Button>
        </ButtonsBlock>

        <ButtonsBlock>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </ButtonsBlock>

        <ButtonsBlock>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>+</Button>
        </ButtonsBlock>

        <ButtonsBlock>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>-</Button>
        </ButtonsBlock>

        <ButtonsBlock>
          <Button>0</Button>
          <Button>00</Button>

          <OperationButton 
          operation={(value: string) => eval(value)}
          >
            =
          </OperationButton>

        </ButtonsBlock>

    </ButtonsContainer>
  )
}
