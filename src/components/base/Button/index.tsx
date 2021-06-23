import './styles.scss';

type Props = {
  label: string;
  click(): any;
  type: "primary" | "secondary";
};

const Button = ({ label, click, type }: Props) => (
  <button className={`btn-${type}`} onClick={click}>
    {label}
  </button>
);

export default Button;
