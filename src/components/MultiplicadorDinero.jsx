import { useEffect, useState } from "react"
import { isNumber } from "../helpers/isNumber"
import "./MultiplicadorDinero.css"

const MultiplicadorDinero = ({index, nombre ,valorMoneda, extraerMontoDinero}) => {

  const [totalMoneda, setTotalMoneda] = useState(0)
  const [inputCantidad, setInputCantidad] = useState('')

  const extraerValor = (e) => {
    const inputValue = e.target.value
    if (isNumber(inputValue) || inputValue === '') {
      setInputCantidad(inputValue)
    }
  }

  useEffect(() => {
    const total = valorMoneda * parseFloat(inputCantidad)
    setTotalMoneda(total.toFixed(2))
  },[inputCantidad])

  useEffect(()=> {
    extraerMontoDinero(index, totalMoneda)
    console.log('cambio la moneda_ ' + totalMoneda)
  },[totalMoneda])


  return (
    <div className="contenedor-dinero row  gap-2">
      <label className="col-3 " htmlFor="">S/.  {nombre}</label>
      <input
        onChange={extraerValor}
        value={inputCantidad}
        type="text" 
        placeholder="0"
        className="col-5"
      />
      <div 
        className="total-dinero col-3"
      >
        {isNaN(totalMoneda) ? 0: totalMoneda}
      </div>
    </div>
  )
}

export default MultiplicadorDinero