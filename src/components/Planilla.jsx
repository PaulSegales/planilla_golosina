import { useEffect, useState } from "react"
import { isNumber } from "../helpers/isNumber"
import "./Planilla.css"

const Planilla = ({i, extraerResultado}) => {

  const [dineroPlanilla, setDineroPlanilla] = useState('0.00')
  const [cantidadDinero, setCantidadDinero] = useState('')

  const valorDinero  = (e) => {
    setCantidadDinero(e.target.value)
  }

  const actualizarDineroPlanilla = () => {
    if(isNumber(cantidadDinero)) {
      setDineroPlanilla(parseFloat(cantidadDinero).toFixed(2))
    } else {
      alert("El valor tiene que ser un numero")
    }
  }

  useEffect(() => {
    extraerResultado(i, dineroPlanilla)
  },[dineroPlanilla])

  return (
    <div className="contenedor">
      <h6>Dinero en Planilla:</h6>
      <h4 className="monto">S/. {dineroPlanilla}</h4>
      <input
        className="input-planilla"
        onChange={valorDinero }
        type="number"
        placeholder="Ingrese el total de la planilla"
      />
      <button 
        onClick={actualizarDineroPlanilla}
        className="btn btn-planilla"
      >
        Actualizar Monto
      </button>
    </div>
  )
}

export default Planilla