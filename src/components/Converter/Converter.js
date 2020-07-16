import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input';
import { Link } from 'react-router-dom'
import './Converter.css'

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

    const renderButton = () => {
        if (result !== 0) {
            return (
                <>
                    <Link to={`/Request/${currency}/${criptoCurrency}/${value}/${result.toFixed(7)}`} className="btn btn-primary">
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
                <div className="error-message">
                    <i className="d-inline fas fa-exclamation-circle"></i>
                    <p className="d-inline ml-2">Debes ingresar un valor</p>
                </div>
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
        if (value === "$0" || value === "€0" || value === "£0" || value === 0) {
            setResult(0);
        }
    }

    return (
        <div className="row render-div">
            <div className="col-12">
                <h1>Conversor de monedas</h1>
                <hr></hr>
            </div>
            <div className="col-lg-6  form-group">
                <label>
                    Seleccione una moneda
                </label>
                <select value={currency} onChange={(e) => handleCurrency(e)} className="form-control">
                    <option value="$ - Dolares">$ - Dolares</option>
                    <option value="€ - Euros">€ - Euros</option>
                    <option value="$ - Pesos">$ - Pesos</option>
                    <option value="£ - Libra Esterlina">£ - Libra Esterlina</option>
                </select>
            </div>
            <div className="col-lg-6 form-group">
                <label>
                    Seleccione una criptomoneda
                </label>
                <select value={criptoCurrency} onChange={(e) => setCriptoCurrency(e.target.value)} className="form-control">
                    <option value="Ethereum">Ethereum </option>
                    <option value="Ripple">Ripple </option>
                    <option value="Dash">Dash</option>
                    <option value="Bitcoin">Bitcoin</option>
                </select>
            </div>
            <div className="col-lg-12">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 mt-2 form-group">
                        <label>Valor</label>
                        <CurrencyInput
                            id="value"
                            name="value"
                            precision="0"
                            prefix={currency.substr(0, 1)}
                            value={value}
                            allowDecimals={false}
                            onChange={(maskedvalue) => handleValue(maskedvalue)}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
                {renderError()}
            </div>
            <div className="col-lg-12 mt-3 d-flex justify-content-center align-items-center">
                <input type="button" className="btn btn-success" value="Convertir" onClick={handleConverter} />
            </div>
            <div className="col-lg-12 mt-4 d-flex justify-content-center">
                <h4>El resultado de la conversión es:</h4>
            </div>
            <div className="col-lg-12 mt-2 d-flex justify-content-center">
                <span className="d-block">{result.toFixed(7)}</span>
            </div>
            <div className="col-lg-12 mt-4 d-flex justify-content-center">
                {renderButton()}
            </div>
        </div>
    )
}

export default Converter;