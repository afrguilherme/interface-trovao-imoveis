import { Container, Title } from "./styles"

const SelectSection = ({ title, children, ...props }) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}

export default SelectSection
