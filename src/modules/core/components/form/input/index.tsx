import { TextField } from "@mui/material";
import { inputSx } from "@/modules/core/components/form/input/styles";

type InputProps = {
  error?: boolean;
  errorMessage?: string;
  id: string;
  autoFocus?: boolean;
};

const Input = ({
  error,
  errorMessage,
  id,
  autoFocus,
  ...props
}: InputProps) => {
  return (
    <TextField
      {...props}
      id={id}
      error={!!error}
      helperText={errorMessage}
      size="small"
      autoFocus={autoFocus}
      sx={inputSx.input}
    />
  );
};

export default Input;
