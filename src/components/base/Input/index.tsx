import './styles.scss';

type Props = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
};

const Input = ({ placeholder, value, setValue }: Props) => (
  <input
    placeholder={placeholder}
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);

export default Input;
