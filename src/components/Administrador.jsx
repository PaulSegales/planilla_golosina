import { useState } from "react"
import Planilla from "./Planilla"
import CalculadorRestante from "./CalculadorRestante"
import ContadorDinero from "./ContadorDinero"
import { Tab, Tabs } from "react-bootstrap"
import Reporte from "./Reporte"

const Administrador = () => {

  const [resultadosPlanilla, setResultadosPlanilla] = useState([])

  const DINERO_PLANILLA = resultadosPlanilla[0]
  const DINERO_RESTANTE = resultadosPlanilla[1]
  const DINERO_FISICO = resultadosPlanilla[0] - resultadosPlanilla[1]
  const DINERO_RECOLECTADO = resultadosPlanilla[2]
  const DINERO_EXCEDENTE_SOBRANTE = DINERO_RECOLECTADO - DINERO_FISICO

  const extraerResultado = (i, totalCalculado) => {
    const listRestantes = [...resultadosPlanilla]
    if (listRestantes[i] === undefined) {
      listRestantes[i] = 0
    }
    listRestantes[i] = parseFloat(totalCalculado)
    setResultadosPlanilla(listRestantes)
  }

  return (
    <>
      {/* <Planilla i={0} extraerResultado={extraerResultado} />
      <br />
      <hr />
      <hr />
      <CalculadorRestante i={1} extraerResultado={extraerResultado} />
      <ContadorDinero i={2} extraerResultado={extraerResultado} />

      <br />
      <hr />
      <div>{DINERO_PLANILLA}</div>
      <div>{DINERO_RESTANTE}</div>
      <div>{DINERO_FISICO}</div>
      <div>{DINERO_RECOLECTADO}</div> 
      <div>{DINERO_EXCEDENTE_SOBRANTE}</div>  */}
      <Tabs
        defaultActiveKey="planilla"
        className="px-3 pt-2 "
        transition={false}
      >
        <Tab eventKey="planilla" title="Planilla">
        <Planilla i={0} extraerResultado={extraerResultado} />
        </Tab>
        <Tab eventKey="restante" title="Restante">
        <CalculadorRestante i={1} extraerResultado={extraerResultado} />
        </Tab>
        <Tab eventKey="dinero" title="Dinero">
        <ContadorDinero i={2} extraerResultado={extraerResultado} />
        </Tab>
        <Tab eventKey="reporte" title="Reporte">
          <Reporte resultadosPlanilla={resultadosPlanilla} />
        </Tab>
      </Tabs>
    </>
    )
  }

export default Administrador