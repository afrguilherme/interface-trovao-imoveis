import { ErrorMessage } from "./styles"

const Errors = ({ children, $error }) => {
  return <ErrorMessage error={$error}>{children}</ErrorMessage>
}

export default Errors
