import { useState } from "react"
import Planilla from "./Planilla"
import CalculadorRestante from "./CalculadorRestante"
import ContadorDinero from "./ContadorDinero"
import { Tab, Tabs } from "react-bootstrap"
import Reporte from "./Reporte"

const Administrador = () => {

  const [resultadosPlanilla, setResultadosPlanilla] = useState([])

  
  const extraerResultado = (i, totalCalculado) => {
    const listRestantes = [...resultadosPlanilla]
    if (listRestantes[i] === undefined) {
      listRestantes[i] = 0
    }
    listRestantes[i] = parseFloat(totalCalculado)
    setResultadosPlanilla(listRestantes)
  }

  return (
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
    )
  }

export default Administrador