import { DetailsSection, OptionsWrap, CountButton, Title } from "./styles"

const CountSection = ({ title }) => {
  const countOptions = ["1", "2", "3", "4 +"]

  return (
    <DetailsSection>
      <Title>{title}</Title>
      <OptionsWrap>
        {countOptions.map((option, index) => (
          <CountButton key={index}>{option}</CountButton>
        ))}
      </OptionsWrap>
    </DetailsSection>
  )
}

export default CountSection
