import { useEffect, useRef } from "react"
import "./Reporte.css"


const Reporte = ({resultadosPlanilla}) => {

  const DINERO_PLANILLA = resultadosPlanilla[0]
  const DINERO_RESTANTE = resultadosPlanilla[1]
  const DINERO_FISICO = resultadosPlanilla[0] - resultadosPlanilla[1]
  const DINERO_RECOLECTADO = resultadosPlanilla[2]
  const DINERO_EXCEDENTE_FALTANTE = DINERO_RECOLECTADO - DINERO_FISICO

  console.log(resultadosPlanilla)
  const refDinero = useRef(null)

  useEffect(()=> {
    if(DINERO_EXCEDENTE_FALTANTE !== undefined) {
      const color = DINERO_EXCEDENTE_FALTANTE >= 0 ? 'green': 'red'
      refDinero.current.style.color = color
    }
  },[resultadosPlanilla])

  return (
    <div className="contenedor_reporte ">
      <div className="reporte-dinero">
        <span>Dinero en Planilla:</span>
        <span className="monto-final">S/. {parseFloat(DINERO_PLANILLA).toFixed(2)}</span> 
      </div>
      <div className="reporte-dinero">
        <span>Dinero Restante: </span>
        <span className="monto-final">S/. {parseFloat(DINERO_RESTANTE).toFixed(2)}</span>
      </div>
      <div className="reporte-dinero">
        <span>Dinero en Físico: </span>
        <span className="monto-final">S/. {parseFloat(DINERO_FISICO).toFixed(2)}</span>
      </div>
      <div className="reporte-dinero">
        <span>Dinero Recolectado: </span>
        <span className="monto-final">S/. {parseFloat(DINERO_RECOLECTADO).toFixed(2)}</span>
      </div> 
      <div className="reporte-dinero">
        <span>Dinero Excedente o Faltante: </span>
        <span ref={refDinero} className="monto-final">S/.  {(DINERO_EXCEDENTE_FALTANTE).toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Reporte