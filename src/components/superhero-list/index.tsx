import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Superheroes } from "../../store/ducks/superheroes/types";
import { ApplicationState } from "../../store";

import * as SuperheroesActions from "../../store/ducks/superheroes/actions";
import * as SuperheroActions from "../../store/ducks/superhero/actions";
import "./styles.scss";

import SuperheroItem from "../base/SuperheroItem";
import HeroLoading from "../base/HeroLoading";
import SuperheroHeader from "./superhero-header";

interface StateProps {
  superheroes: Superheroes[];
  loading: boolean;
  searchDone: boolean;
  loadingHero: boolean;
  error: boolean;
}

interface DispatchProps {
  loadHeroRequest(id: string): void;
}

type Props = StateProps & DispatchProps;

function SuperheroList({
  superheroes,
  loading,
  loadingHero,
  loadHeroRequest,
  searchDone,
}: Props) {
  return (
    <div className="superheroes-list">
      <HeroLoading show={loading || loadingHero} />
      <SuperheroHeader />
      {superheroes.length ? (
        <div className="list-container">
          {superheroes.map((hero) => (
            <div
              key={hero.id}
              className="list-item"
              onClick={() => loadHeroRequest(hero.id)}
            >
              <SuperheroItem superhero={hero} />
            </div>
          ))}
        </div>
      ) : searchDone ? (
        <>
          <div className="no-hero">
            Nenhum herói ou heroína encontrado com a busca...
          </div>
          <div className="title">Superheroes</div>
        </>
      ) : (
        <div className="title">Superheroes</div>
      )}
    </div>
  );
}

const mapStateToProps = ({ superheroes, superhero }: ApplicationState) => ({
  superheroes: superheroes.data,
  loading: superheroes.loading,
  searchDone: superheroes.searchDone,
  loadingHero: superhero.loading,
  error: superheroes.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  const actions = { ...SuperheroesActions, ...SuperheroActions };
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroList);
