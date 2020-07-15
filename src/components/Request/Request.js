import React from 'react'
import { Field, reduxForm } from 'redux-form';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            active: false
        };
    }
    renderError({ error, touched }) {

        if (touched && error) {
            return (
                <div className="mt-2 error-message">
                    <i className="d-inline fas fa-exclamation-circle"></i>
                    <p className="d-inline ml-2">{error}</p>
                </div>
            );
        }
    }

    renderInputName = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" placeholder="Ingrese un nombre" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderInputAge = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} autoComplete="off" placeholder="Ingrese la edad" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderErrorDate = () => {
        if (this.state.date === null && this.state.active) {
            return (
                <div className = "field error">
                    <div className="mt-2 error-message">
                        <i className="d-inline fas fa-exclamation-circle"></i>
                        <p className="d-inline ml-2">La fecha es Obligatoria</p>
                    </div>
                </div>
            )
        }
    }

    onSubmit = (formValues) => {
        this.setState({active: true})

        if(this.state.date !== null){
            const { currency, criptoCurrency, value, result } = this.props;
            const date = this.state.date;
            this.props.onclickSubmitRequest({...formValues,date, currency, criptoCurrency, value, result});
        }
    }
    render() {
        const { pristine, submitting } = this.props

        return (
            <>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="name" component={this.renderInputName} label="Nombre" />
                    <Field name="age" type="number" component={this.renderInputAge} label="Edad" />
                    <label><b>Fecha de Nacimiento</b></label>
                   <div className = {`field ${this.state.date === null && this.state.active ? 'error' : ''}`}>
                    <input onChange={e => this.setState({ date: e.target.value })} value={this.state.date} type="date" id="date" name="date" />
                   </div>
                    {this.renderErrorDate()}
                    <label><b>Tipo de Moneda</b></label>
                    <input type = "text" value = {this.props.currency} disabled/>
                    <label><b>Tipo de cripto-moneda</b></label>
                    <input type = "text" value = {this.props.criptoCurrency} disabled/>
                    <label><b>Valor a convertir</b></label>
                    <input type = "text" value = {this.props.value} disabled/>
                    <label><b>Resultado conversión</b></label>
                    <input type = "text" value = {this.props.result} disabled/>
                    <button type="submit" className="btn btn-success mt-2" disabled={pristine || submitting}>
                        Guardar
                    </button>
                </form>
            </>
        )
    }
}

const validate = (formValues) => {

    const errors = {};
    if (!formValues.name) {
        errors.name = 'campo obligatorio'
    }
    if (!formValues.age) {
        errors.age = 'campo obligatorio'
    }
    else if (isNaN(Number(formValues.age))) {
        errors.age = 'Debes de ingresar un número'
    }
    else if (Number(formValues.age) <= 0) {
        errors.age = 'La edad no puede ser negativa'
    }
    return errors;
}

export default reduxForm({
    form: 'FormRequest',
    validate
})(Request);