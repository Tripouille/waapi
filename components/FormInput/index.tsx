import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Input,
  InputGroup,
  InputProps,
  InputRightAddon,
} from '@chakra-ui/react';
import { FC } from 'react';

export type FormInputProps = FormControlProps &
  Pick<InputProps, 'type' | 'placeholder' | 'value' | 'onChange' | 'onKeyDown' | 'step'> & {
    label: FormLabelProps['children'];
    rightAddon?: string;
  };

const FormInput: FC<FormInputProps> = ({
  type,
  label,
  placeholder,
  rightAddon,
  value,
  onChange,
  onKeyDown,
  step,
  ...formControlProps
}) => {
  return (
    <FormControl {...formControlProps}>
      <FormLabel fontWeight="medium">{label}</FormLabel>
      <InputGroup>
        <Input
          type={type}
          placeholder={placeholder}
          bgColor="glass"
          borderWidth={2}
          borderColor="border"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          step={step}
        />
        {rightAddon?.length && <InputRightAddon>{rightAddon}</InputRightAddon>}
      </InputGroup>
    </FormControl>
  );
};

export default FormInput;
