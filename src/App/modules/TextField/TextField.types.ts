export interface TextFieldProps {
  placeholder: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean
  type?: string;
}