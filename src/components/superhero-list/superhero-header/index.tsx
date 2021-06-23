import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Superheroes } from "../../../store/ducks/superheroes/types";
import { ApplicationState } from "../../../store";

import * as SuperheroesActions from "../../../store/ducks/superheroes/actions";
import "./styles.scss";
import { useState } from "react";
import Input from '../../base/Input';
import Button from '../../base/Button';

interface StateProps {
  superheroes: Superheroes[];
  loading: boolean;
  error: boolean;
}

interface DispatchProps {
  loadRequest(search: string): void;
}

type Props = StateProps & DispatchProps;

function SuperheroHeadedr({ loadRequest }: Props) {
  const [search, setSearch] = useState<string>("");

  const handleKeyUp = (key: string) => {
    if (key === 'Enter') {
      loadRequest(search);
    }
  }

  return (
    <div className="superheroes-header">
        <Input
            placeholder="Pesquise um herói ou heroína"
            value={search}
            setValue={setSearch}
            handleKeyUp={handleKeyUp}
        />
        <Button
            click={() => loadRequest(search)}
            label="Buscar"
            type="primary"
        />
    </div>
  );
}

const mapStateToProps = ({ superheroes }: ApplicationState) => ({
  superheroes: superheroes.data,
  loading: superheroes.loading,
  error: superheroes.error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SuperheroesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroHeadedr);
