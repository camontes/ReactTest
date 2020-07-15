import React from 'react'

const ShowRequest = ({ request }) => {

    console.log(request.name);
    const renderData = () => {
        if (!request) {
            return (
                <div>
                    Loading.....
                </div>
            )
        }
        return (
            <>
                <div className="row">
                    <div className="col-12">
                        <h1>Información de la Solicitud</h1>
                        <hr></hr>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <h4>Nombre: </h4> <span className = "ml-2"> {request.name} </span>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <h4>Edad: </h4> <span className = "ml-2">{request.age}</span>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <h4>Fecha de nacimiento: </h4> <span className = "ml-2">{request.date}</span>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <h4>Tipo de moneda: </h4> <span className = "ml-2">{request.currency}</span>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <h4>Tipo de cripto-moneda: </h4> <span className = "ml-2">{request.criptoCurrency}</span>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <h4>Valor a convertir: </h4> <span className = "ml-2">{request.value}</span>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <h4>Resultado de la conversión: </h4> <span className = "ml-2">{request.result}</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            {renderData()}
        </>
    )
}

export default ShowRequest;