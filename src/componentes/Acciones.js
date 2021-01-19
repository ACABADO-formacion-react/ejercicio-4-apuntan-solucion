export const Acciones = ({ contador, textoBoton, onMarcarDesmarcar, incrementa }) => {
    return (
        <div className="col-12 text-center marcar">
            <a href="marcar-desmarcar" className="btn btn-default" onClick={onMarcarDesmarcar}>{textoBoton} todos</a>
        </div>
    )
}