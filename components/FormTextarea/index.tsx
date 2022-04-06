import {
  FormControl,
  FormControlProps,
  FormLabel,
  TextareaProps,
  Textarea,
  FormLabelProps,
} from '@chakra-ui/react';
import { FC } from 'react';

export type FormTextareaProps = Omit<FormControlProps, 'onChange'> &
  Pick<TextareaProps, 'placeholder' | 'value' | 'onChange' | 'onKeyDown' | 'resize'> & {
    label: FormLabelProps['children'];
  };

const FormTextarea: FC<FormTextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
  resize,
  ...formControlProps
}) => {
  return (
    <FormControl {...formControlProps}>
      <FormLabel fontWeight="medium">{label}</FormLabel>
      <Textarea
        placeholder={placeholder}
        bgColor="glass"
        borderWidth={2}
        borderColor="border"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        resize={resize}
      />
    </FormControl>
  );
};

export default FormTextarea;
