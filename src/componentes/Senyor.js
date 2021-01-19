import { memo } from "react";
import { FaCheck } from "react-icons/fa";

export const Senyor = memo(({ senyor, inicial, toggleMarcado }) => {
    console.log("Se ha llamado al componente Senyor");
    return (
        <article className="col-8 col-offset-2" onClick={() => toggleMarcado(senyor.id)}>
            <div className="row">
                {/* <!-- Añadir clase CSS "marcado" para que la imagen se invierta --> */}
                <div className={`avatar col-3${senyor.marcado ? " marcado" : ""}`}>
                    <img className="img-fluid" src={`img/${senyor.imagen}`} alt="" />
                    <i>{inicial(senyor.nombre)}</i>
                </div>
                <div className="datos col-9">
                    <h2>{senyor.nombre}</h2>
                    <div>
                        <label>Profesión:</label> {senyor.profesion}
                    </div>
                    <div>
                        <label>Estado:</label> {senyor.estado}
                    </div>
                    <div>
                        <label>Twitter:</label> {senyor.twitter}
                    </div>
                </div>
                {senyor.marcado && <FaCheck className="icono" />}
            </div>
        </article>
    )
});