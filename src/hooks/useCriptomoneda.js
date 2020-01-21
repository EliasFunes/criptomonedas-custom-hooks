import React, {Fragment, useState} from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;  
`;

const Select2 = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {

    const [state, setState] = useState(stateInicial);

    const Selcripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select2
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">- Seleccione Cripto -</option>
                {opciones.map(op => {
                    const {Id, Name, FullName} = op.CoinInfo;
                    return <option key={Id} value={Name}>{FullName}</option>;
                })}
            </Select2>
        </Fragment>
    );

    //Retornar state, interfaz y fn que modifica el state
    return [state, Selcripto, setState]
};

export default useCriptomoneda;