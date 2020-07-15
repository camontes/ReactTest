import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input';
import { Link } from 'react-router-dom'

const Converter = () => {
    const [currency, setCurrency] = useState("$ - Dolares");
    const [criptoCurrency, setCriptoCurrency] = useState("Ethereum");
    const [value, setValue] = useState(0);
    const [active, setActive] = useState(false);
    const [result, setResult] = useState(0);

    const validateValue = () => {
        if ((active && value === 0) || (value === "$0" || value === "€0" || value === "£0")) {
            return true;
        }
        return false;
    }

    const converterToCriptoCurrency = (value, criptoCurrency) => {

        const valueToConverter = value;
        const valueInput = valueToConverter.substring(1);
        const valueString = valueInput.split(",").join("");

        return (Number.parseInt(valueString, 10) * criptoCurrency);

    }

    const renderButton = () =>{
        if(result !== 0){
            return(
                <>
                    <Link to = {`/Request/${currency}/${criptoCurrency}/${value}/${result.toFixed(7)}`} className = "btn btn-primary">
                        Generar Solicitud
                    </Link>
                </>
            )
        }
    }

    const handleConverter = () => {
        setActive(true);
        if (value !== "$0" && value !== "€0" && value !== "£0" && value !== 0) {
            if (currency === "$ - Dolares") {
                if (criptoCurrency === "Ethereum") {
                    const ethereum = 0.0042;
                    const ans = converterToCriptoCurrency(value, ethereum)
                    setResult(ans);
                }
                else if (criptoCurrency === "Ripple") {
                    const ripple = 5.02;
                    const ans = converterToCriptoCurrency(value, ripple)
                    setResult(ans);
                }
                else if (criptoCurrency === "Dash") {
                    const dash = 0.013888;
                    const ans = converterToCriptoCurrency(value, dash)
                    setResult(ans);
                }
                else if (criptoCurrency === "Bitcoin") {
                    const bitcoin = 0.00011;
                    const ans = converterToCriptoCurrency(value, bitcoin)
                    setResult(ans);
                }
            }
            else if (currency === "€ - Euros") {
                if (criptoCurrency === "Ethereum") {
                    const ethereum = 0.0047;
                    const ans = converterToCriptoCurrency(value, ethereum)
                    setResult(ans);
                }
                else if (criptoCurrency === "Ripple") {
                    const ripple = 5.71;
                    const ans = converterToCriptoCurrency(value, ripple)
                    setResult(ans);
                }
                else if (criptoCurrency === "Dash") {
                    const dash = 0.015959;
                    const ans = converterToCriptoCurrency(value, dash)
                    setResult(ans);
                }
                else if (criptoCurrency === "Bitcoin") {
                    const bitcoin = 0.00012;
                    const ans = converterToCriptoCurrency(value, bitcoin)
                    setResult(ans);
                }
            }
            else if (currency === "$ - Pesos") {
                if (criptoCurrency === "Ethereum") {
                    const ethereum = 0.0000012;
                    const ans = converterToCriptoCurrency(value, ethereum)
                    setResult(ans);
                }
                else if (criptoCurrency === "Ripple") { 
                    const ripple = 0.001388888;
                    const ans = converterToCriptoCurrency(value, ripple)
                    setResult(ans);
                }
                else if (criptoCurrency === "Dash") {
                    const dash = 0.00000384615;
                    const ans = converterToCriptoCurrency(value, dash)
                    setResult(ans);
                }
                else if (criptoCurrency === "Bitcoin") {
                    const bitcoin = 0.00000002988;
                    const ans = converterToCriptoCurrency(value, bitcoin)
                    setResult(ans);
                }
            }
            else if (currency === "£ - Libra Esterlina") {
                if (criptoCurrency === "Ethereum") {
                    const ethereum = 0.0052;
                    const ans = converterToCriptoCurrency(value, ethereum)
                    setResult(ans);
                }
                else if (criptoCurrency === "Ripple") { 
                    const ripple = 6.325;
                    const ans = converterToCriptoCurrency(value, ripple)
                    setResult(ans);
                }
                else if (criptoCurrency === "Dash") {
                    const dash = 0.0175;
                    const ans = converterToCriptoCurrency(value, dash)
                    setResult(ans);
                }
                else if (criptoCurrency === "Bitcoin") {
                    const bitcoin = 0.00014;
                    const ans = converterToCriptoCurrency(value, bitcoin)
                    setResult(ans);
                }
            }
        }
    }

    const renderError = () => {
        if (validateValue()) {
            return (
                <h4>Debes de ingresar un valor</h4>
            )
        }
    }

    const handleCurrency = (e) => {
        setValue(0);
        setResult(0);
        setActive(false);
        setCurrency(e.target.value);
    }

    const handleValue = (maskedvalue) => {
        setValue(maskedvalue);
        if(value === "$0" || value === "€0" || value === "£0" || value === 0){
            setResult(0);
        }
    }

    return (
        <div>
            <label>
                Seleccione una moneda:
            <select value={currency} onChange={(e) => handleCurrency(e)}>
                    <option value="$ - Dolares">$ - Dolares</option>
                    <option value="€ - Euros">€ - Euros</option>
                    <option value="$ - Pesos">$ - Pesos</option>
                    <option value="£ - Libra Esterlina">£ - Libra Esterlina</option>
                </select>
            </label>
            <label>
                Seleccione una criptomoneda:
            <select value={criptoCurrency} onChange={(e) => setCriptoCurrency(e.target.value)}>
                    <option value="Ethereum">Ethereum </option>
                    <option value="Ripple">Ripple </option>
                    <option value="Dash">Dash</option>
                    <option value="Bitcoin">Bitcoin</option>
                </select>
            </label>
            <CurrencyInput
                id="value"
                name="value"
                precision="0"
                prefix={currency.substr(0, 1)}
                value={value}
                allowDecimals={false}
                onChange={(maskedvalue) => handleValue(maskedvalue)}
            />
            {renderError()}
            {result.toFixed(7)}
            {renderButton()}
            <input type="button" value="Convertir" onClick={handleConverter} />
        </div>
    )
}

export default Converter;