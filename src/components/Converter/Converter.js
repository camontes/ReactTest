import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input';

const Converter = () => {
    const [currency, setCurrency] = useState("$ - Dolares");
    const [criptoCurrency, setCriptoCurrency] = useState("ethereum");
    const [value, setValue] = useState(0);
    const [active, setActive] = useState(false);
    const [result, setResult] = useState(0);

    const validateValue = () => {
        if((active && value === 0) || (value === "$0" || value === "€0" || value === "£0")){
            return true;
        }
        return false;
    }

    const handleConverter = () => {
        setActive(true);
        if(value !== "$0" && value !== "€0" && value !== "£0" && value !== 0){
            if(currency === "$ - Dolares"){
                const ethereum = 0.0042;
                const valueInput = value.substring(1);
                const valueString = valueInput.split(",").join("");
                alert(valueString);
                setResult(Number.parseInt(valueString,10) * ethereum);
            }
        }
    }

    const renderError = () => {
        if(validateValue()){
            return(
                <h4>Debes de ingresar un valor</h4>
            )
        }
    }

    const handleCurrency = (e) => {
        setValue(0);
        setActive(false);
        setCurrency(e.target.value);
    }

    return(
        <div>
            <label>
            Seleccione una moneda:
            <select value={currency} onChange = { (e) => handleCurrency(e)}>
                <option value="$ - Dolares">$ - Dolares</option>
                <option value="€ - Euros">€ - Euros</option>
                <option value="$ - Pesos">$ - Pesos</option>
                <option value="£ - Libra Esterlina">£ - Libra Esterlina</option>
            </select>
            </label>
            <label>
            Seleccione una criptomoneda:
            <select value={criptoCurrency} onChange = { (e) => setCriptoCurrency(e.target.value)}>
                <option value="Ethereum ">Ethereum </option>
                <option value="Ripple">Ripple </option>
                <option value="Dash">Dash</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>
            </label>
            <CurrencyInput
                id="value"
                name="value"
                precision="0"
                prefix = {currency.substr(0, 1)}
                value = {value}
                allowDecimals = {false}
                onChange={(maskedvalue) => setValue(maskedvalue)}
            />
            {renderError()}
            {result.toFixed(2)}
            <input type="button" value="Convertir" onClick = {handleConverter}/>
        </div>
    )   
}

export default Converter;