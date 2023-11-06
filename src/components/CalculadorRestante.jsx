import { useEffect, useState } from "react"
import SumadorDinero from "./SumadorDinero"
import { Accordion } from "react-bootstrap"

const CalculadorRestante = ({i, extraerResultado}) => {

  const [montosRestantes, setMontosRestantes] = useState([])
  const [totalRestante, setTotalRestante] = useState(0)

  const agregarMontoRestante = (index, monto) => {
    const listRestantes = [...montosRestantes]
    if (listRestantes[index] === undefined) {
      listRestantes[index] = 0
    }
    listRestantes[index] = parseFloat(monto)
    setMontosRestantes(listRestantes)
  }

  const sumarMontosRestantes = () => {
    const total = montosRestantes.reduce((acc, monto) => {
      if (!isNaN(monto)) {
        return acc + monto
      }
      return acc
    }, 0)
    setTotalRestante(total)
  }

  useEffect(()=> {
    sumarMontosRestantes()
  }, [montosRestantes])

  useEffect(() => {
    extraerResultado(i, totalRestante)
  },[totalRestante]) 

  return (
    <div className="contenedor">
      <h6>Dinero Restante:</h6>
      <h4 className="monto">S/. {isNaN(totalRestante) ? "0.00" : totalRestante.toFixed(2)}</h4>
      <Accordion defaultActiveKey="0">
        <SumadorDinero titulo={'Anulados'} index={0} agregarMontoRestante={agregarMontoRestante} />
        <SumadorDinero titulo={'N/C'} index={1} agregarMontoRestante={agregarMontoRestante} />
        <SumadorDinero titulo={'Crédito'} index={2} agregarMontoRestante={agregarMontoRestante} />
        <SumadorDinero titulo={'Depósito'} index={3} agregarMontoRestante={agregarMontoRestante} />
        <SumadorDinero titulo={'Yape'} index={4} agregarMontoRestante={agregarMontoRestante} />
        <SumadorDinero titulo={'Acuenta'} index={5} agregarMontoRestante={agregarMontoRestante} />
      </Accordion>
    </div>
  )
}

export default CalculadorRestante