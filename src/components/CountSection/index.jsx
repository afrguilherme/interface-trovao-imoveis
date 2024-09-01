import { DetailsSection, OptionsWrap, CountButton, Title } from "./styles"

const CountSection = ({ title, selectedValue, onSelect }) => {
  const countOptions = ["1", "2", "3", "4+"]

  return (
    <DetailsSection>
      <Title>{title}</Title>
      <OptionsWrap>
        {countOptions.map((option, index) => (
          <CountButton
            key={index}
            onClick={() => onSelect(option)}
            selected={selectedValue === option}
          >
            {option}
          </CountButton>
        ))}
      </OptionsWrap>
    </DetailsSection>
  )
}

export default CountSection
