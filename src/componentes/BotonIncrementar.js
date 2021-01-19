import { memo } from "react";

export const BotonIncrementar = memo(({ contador, incrementa }) => {
    console.log("Se ha llamado al componente BotonIncrementar");
    return (
        <>
            <a href="incrementa" onClick={incrementa}>Incrementa</a> ({ contador})
        </>
    )
});