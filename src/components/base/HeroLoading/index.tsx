import "./styles.scss";

type Props = {
  show: boolean;
};

const HeroLoading = ({ show }: Props) =>
  show ? (
    <div className="loading">
      <div></div>
    </div>
  ) : (
    <></>
  );

export default HeroLoading;
