import { useCallback, useEffect, useMemo, useState } from "react";
import { Acciones } from "./componentes/Acciones";
import { BotonIncrementar } from "./componentes/BotonIncrementar";
import { Info } from "./componentes/Info";
import { Senyor } from "./componentes/Senyor";

const senyoresAPI = [
  {
    id: 1,
    nombre: "El Fary",
    profesion: "Influencer",
    estado: "RIP",
    twitter: "pendiente",
    imagen: "fary.jpg"
  },
  {
    id: 2,
    nombre: "Julio Iglesias",
    profesion: "Youtuber",
    estado: "Vivo",
    twitter: "@JulioIglesias",
    imagen: "julio.jpg"
  },
  {
    id: 3,
    nombre: "Bertín Osborne",
    profesion: "Java Developer",
    estado: "Vivo",
    twitter: "@BertinOsborne",
    imagen: "bertin.jpg"
  }
]

function App() {
  const [senyores, setSenyores] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setSenyores(senyoresAPI.map(senyor => ({ ...senyor, marcado: false })));
  }, []);

  const incrementa = useCallback(
    (e) => {
      e.preventDefault();
      setContador((cont) => cont + 1);
    }, []);

  const inicial = useCallback(
    (nombre) => {
      const partesNombre = nombre.split(" ");
      return partesNombre[0].length > 2 ? partesNombre[0].charAt(0) : partesNombre[1].charAt(0);
    }, []);

  const senyoresMarcados = useMemo(() => senyores.filter((senyor) => senyor.marcado), [senyores]);

  const textoBoton = senyoresMarcados.length === senyores.length ? "Desmarcar" : "Marcar";

  const toggleMarcado = useCallback(
    (idSenyor) => {
      setSenyores(senyores.map((senyor) => senyor.id === idSenyor ? ({ ...senyor, marcado: !senyor.marcado }) : senyor));
    }, [senyores]);

  const marcarTodos = () => {
    setSenyores(senyores.map((senyor) => ({ ...senyor, marcado: true })));
  }

  const desmarcarTodos = () => {
    setSenyores(senyores.map((senyor) => ({ ...senyor, marcado: false })));
  }

  const onMarcarDesmarcar = (e) => {
    e.preventDefault();
    if (senyoresMarcados.length === senyores.length) {
      desmarcarTodos();
    } else {
      marcarTodos();
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12 text-center">Señores que te apuntan con el dedo</h1>
        <Info nSenyoresMarcados={senyoresMarcados.length} />
        <BotonIncrementar incrementa={incrementa} contador={contador} />
        <Acciones contador={contador} textoBoton={textoBoton} incrementa={incrementa} onMarcarDesmarcar={onMarcarDesmarcar} />
        {
          senyores.map(senyor => (
            <Senyor key={senyor.id} senyor={senyor} inicial={inicial} toggleMarcado={toggleMarcado} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
