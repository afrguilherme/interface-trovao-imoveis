import { Button } from "./styles"

const DefaultButton = ({ children, $primary, ...rest }) => {
  return (
    <Button $primary={$primary} {...rest}>
      {children}
    </Button>
  )
}

export default DefaultButton
