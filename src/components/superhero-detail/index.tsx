import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Superhero } from "../../store/ducks/superhero/types";
import { ApplicationState } from "../../store";

import * as SuperheroActions from "../../store/ducks/superhero/actions";
import "./styles.scss";

interface StateProps {
  superhero: Superhero | null;
  loading: boolean;
  error: boolean;
}

interface DispatchProps {
  clearHero(): void;
}

type Props = StateProps & DispatchProps;

function SuperheroDetail({ superhero, clearHero }: Props) {
  const formatNull = (value: string) => value && value !== 'null' ? value : '';

  return (
    superhero && (
      <div className="backdrop">
        <div className="superhero-detail">
          <div className="close" onClick={clearHero}>
            <div></div>
            <div></div>
          </div>
          <div className="image">
            <img src={superhero.image.url} alt="" />
          </div>
          <div className="info">
            <h1>{superhero.name}</h1>
            <div className="block">
              <h2>Pessoal</h2>
              <div className="info-line">
                <div className="label">Nome completo</div>
                <div className="value">{formatNull(superhero.biography["full-name"])}</div>
              </div>
              <div className="info-line">
                <div className="label">Editora</div>
                <div className="value">{formatNull(superhero.biography.publisher)}</div>
              </div>
            </div>
            <div className="block">
              <h2>Aparência</h2>
              <div className="info-line">
                <div className="label">Gênero</div>
                <div className="value">{formatNull(superhero.appearance.gender)}</div>
              </div>
              <div className="info-line">
                <div className="label">Raça</div>
                <div className="value">{formatNull(superhero.appearance.race)}</div>
              </div>
              <div className="info-line">
                <div className="label">Altura</div>
                <div className="value">{formatNull(superhero.appearance.height)}</div>
              </div>
              <div className="info-line">
                <div className="label">Peso</div>
                <div className="value">{formatNull(superhero.appearance.weight)}</div>
              </div>
            </div>
            <div className="block">
              <h2>Poderes</h2>
              <div className="info-line">
                <div className="label">Inteligência</div>
                <div className="value">{formatNull(superhero.powerstats.intelligence)}</div>
              </div>
              <div className="info-line">
                <div className="label">Força</div>
                <div className="value">{formatNull(superhero.powerstats.strength)}</div>
              </div>
              <div className="info-line">
                <div className="label">Velocidade</div>
                <div className="value">{formatNull(superhero.powerstats.speed)}</div>
              </div>
              <div className="info-line">
                <div className="label">Resistência</div>
                <div className="value">{formatNull(superhero.powerstats.durability)}</div>
              </div>
              <div className="info-line">
                <div className="label">Poder</div>
                <div className="value">{formatNull(superhero.powerstats.power)}</div>
              </div>
              <div className="info-line">
                <div className="label">Combate</div>
                <div className="value">{formatNull(superhero.powerstats.combat)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

const mapStateToProps = ({ superhero }: ApplicationState) => ({
  superhero: superhero.data,
  loading: superhero.loading,
  error: superhero.error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SuperheroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroDetail);
