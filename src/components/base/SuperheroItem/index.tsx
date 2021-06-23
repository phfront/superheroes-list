import { Superheroes } from '../../../store/ducks/superheroes/types';
import './styles.scss';

import Button from '../Button';

type Props = {
  superhero: Superheroes
};

const SuperheroItem = ({ superhero }: Props) => (
  <div className="superhero-item" style={{
    backgroundImage: `url(${superhero.image.url})`
  }}>
    <div>
      {superhero.name}
    </div>
  </div>
);

export default SuperheroItem;
