import styled from "styled-components"
import Calculator from "./components/Calculator"

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  )
}
