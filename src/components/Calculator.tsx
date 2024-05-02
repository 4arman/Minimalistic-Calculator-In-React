import styled from "styled-components"
import Input from "./Input"
import ButtonsSection from "./Buttons/ButtonsSection"

const CalculatorContainer = styled.div`
    width: 500px;
    height: 600px;
    background: #eaeaea;
    border-radius: 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    /* box-shadow: 3px 4px 8px #a0a0a0; */
`

export default function Calculator() {
  return (
    <CalculatorContainer>
        <Input />
        <ButtonsSection />
    </CalculatorContainer>
  )
}
