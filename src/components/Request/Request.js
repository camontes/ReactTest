import React from 'react'
import { Field, reduxForm } from 'redux-form';
import './Request.css'

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
                <label className="label-request">{label}</label>
                <input {...input} autoComplete="off" placeholder="Ingrese un nombre" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderInputAge = ({ input, label, meta, type }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label className="label-request">{label}</label>
                <input {...input} type={type} autoComplete="off" placeholder="Ingrese la edad" />
                {this.renderError(meta)}
            </div>
        );
    }

    renderErrorDate = () => {
        if (this.state.date === null && this.state.active) {
            return (
                <div className="field error">
                    <div className="mt-2 error-message">
                        <i className="d-inline fas fa-exclamation-circle"></i>
                        <p className="d-inline ml-2">Campo obligatorio</p>
                    </div>
                </div>
            )
        }
    }

    onSubmit = (formValues) => {
        this.setState({ active: true })

        if (this.state.date !== null) {
            const { currency, criptoCurrency, value, result } = this.props;
            const date = this.state.date;
            this.props.onclickSubmitRequest({ ...formValues, date, currency, criptoCurrency, value, result });
        }
    }
    render() {
        const { pristine, submitting } = this.props

        return (
            <>
                <div className="row render-request">
                    <div className="col-12">
                        <h1>Generar Solicitud</h1>
                        <hr></hr>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                                <Field name="name" component={this.renderInputName} label="Nombre" />
                                <Field name="age" type="number" component={this.renderInputAge} label="Edad" />
                                <label>Fecha de Nacimiento</label>
                                <div className={`field ${this.state.date === null && this.state.active ? 'error' : ''}`}>
                                    <input onChange={e => this.setState({ date: e.target.value })} value={this.state.date} type="date" id="date" name="date" />
                                </div>
                                {this.renderErrorDate()}
                                <label>Tipo de Moneda</label>
                                <input type="text" value={this.props.currency} disabled />
                                <label className="mt-2">Tipo de cripto-moneda</label>
                                <input type="text" value={this.props.criptoCurrency} disabled />
                                <label className="mt-2">Valor a convertir</label>
                                <input type="text" value={this.props.value} disabled />
                                <label className="mt-2">Resultado conversión</label>
                                <input type="text" value={this.props.result} disabled />
                                <button type="submit" className="btn btn-success mt-2 mb-4" disabled={pristine || submitting}>
                                    Guardar
                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const validate = (formValues) => {

    const errors = {};
    if (!formValues.name) {
        errors.name = 'Campo obligatorio'
    }
    if (!formValues.age) {
        errors.age = 'Campo obligatorio'
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