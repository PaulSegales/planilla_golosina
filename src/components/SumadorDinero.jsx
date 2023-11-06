import { useEffect, useRef, useState } from "react"
import { isNumber } from "../helpers/isNumber"
import { Accordion } from "react-bootstrap"
import "./SumadorDinero.css"

const SumadorDinero = ({ titulo, index, agregarMontoRestante }) => {

  const [inputDinero, setInputDinero] = useState('')
  const [montos, setMontos] = useState([])
  const [totalMonto, setTotalMonto] = useState(0)
  const inputRef = useRef(null)


  const extraerValor = (e) => {
    const inputValue = e.target.value
    if (isNumber(inputValue) || inputValue === '') {
      setInputDinero(inputValue)
    }
  }

  const agregarMonto = () => {
    if (inputDinero === '') return
    setMontos([...montos, parseFloat(inputDinero)])
    setInputDinero('')
    inputRef.current.focus()
  }

  const sumarMontos = () => {
    const total = montos.reduce((acc, monto) => acc + monto, 0)
    setTotalMonto(total.toFixed(2))
  }

  useEffect(() => {
    sumarMontos()
  }, [montos])

  useEffect(()=> {
    agregarMontoRestante(index,totalMonto)
  },[totalMonto])

  const eliminarMonto = (indexEliminar) => {
    const listaMontos = [...montos]
    listaMontos.splice(indexEliminar, 1)
    setMontos(listaMontos)
  }

  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header className="">
        <div className="row w-100">
          <h6 className="col-6">{titulo}: </h6>
          <h6 className="col-6">{totalMonto}</h6>
        </div>
      </Accordion.Header>
      
      <Accordion.Body>
        
        <div className="row gap-3">
          <input
            ref={inputRef}
            onChange={extraerValor}
            value={inputDinero}
            type="number"
            className="input-planilla col-3"
            placeholder="Monto"
          />
          <button 
            onClick={agregarMonto}
            className="btn btn-planilla col-3"
          >
            Agregar
          </button>
        </div>
        <ul className="contenedor-montos">
          {
            montos.map((monto, index) => (
              <li
                className="monto-acumulado"
                key={index}
                onClick={() => eliminarMonto(index)}
              >
                {monto}
              </li>))
          }
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default SumadorDinero