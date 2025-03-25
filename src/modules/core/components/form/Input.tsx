import { SxProps, TextField } from "@mui/material";

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
  const inputSx: SxProps = {
    ".MuiOutlinedInput-root": {
      borderRadius: 3,
    },
    label: { color: "text.primary" },
  };

  return (
    <TextField
      {...props}
      id={id}
      error={!!error}
      helperText={errorMessage}
      size="small"
      autoFocus={autoFocus}
      sx={inputSx}
    />
  );
};

export default Input;
