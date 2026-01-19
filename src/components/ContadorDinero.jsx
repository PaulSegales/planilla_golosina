import { useEffect, useState } from "react"
import MultiplicadorDinero from "./MultiplicadorDinero"
import "./ContadorDinero.css"

const ContadorDinero = ({i, extraerResultado}) => {

  const [montosDinero, setMontosDinero] = useState([])
  const [dineroTotal, setDineroTotal] = useState(0)
  const [billetes, setBilletes] = useState(0)
  const [monedas, setMonedas] = useState(0)
  
  const sumarMontos = () => {
    const total = montosDinero.reduce((acc, monto) => {
      if (!isNaN(monto)) {
        return acc + monto
      }
      return acc
    }, 0) 
    setDineroTotal(total.toFixed(2))
  }

  useEffect(()=> {
    let totalMonedas = 0
    let totalBilletes = 0
    montosDinero.map((monto, index) => {
      if (!isNaN(monto) && index < 6) {
        totalMonedas += monto
      } else if(!isNaN(monto) && index > 5) {
        totalBilletes += monto
      }
    })
    setMonedas(totalMonedas)
    setBilletes(totalBilletes)
  },[montosDinero])

  console.log("monedas: " + monedas + " --- billetes: " + billetes)

  const extraerMontoDinero = (index, monto) => {
    const listRestantes = [...montosDinero]
    if (listRestantes[index] === undefined) {
      listRestantes[index] = 0
    }
    listRestantes[index] = parseFloat(monto)
    setMontosDinero(listRestantes)
  }


  useEffect(() => {
    sumarMontos()
  },[montosDinero])

  useEffect(() => {
    extraerResultado(i, dineroTotal)
  }, [dineroTotal])

  return (
    <div className="contenedor_planilla-dinero px-3">
      <h6 className="pt-3">Dinero Contabilizado:</h6>
      <h5 className="monto">S/. {dineroTotal}</h5>
      <MultiplicadorDinero index={10}  nombre={'200.00'} valorMoneda={200} extraerMontoDinero={extraerMontoDinero}/>
      <MultiplicadorDinero index={9}  nombre={'100.00'} valorMoneda={100} extraerMontoDinero={extraerMontoDinero}/>
      <MultiplicadorDinero index={8}  nombre={'50.00'} valorMoneda={50} extraerMontoDinero={extraerMontoDinero}/>
      <MultiplicadorDinero index={7}  nombre={'20.00'} valorMoneda={20} extraerMontoDinero={extraerMontoDinero}/>
      <MultiplicadorDinero index={6}  nombre={'10.00'} valorMoneda={10} extraerMontoDinero={extraerMontoDinero}/> 
      <MultiplicadorDinero index={5}  nombre={'5.00'} valorMoneda={5} extraerMontoDinero={extraerMontoDinero}/>
      <MultiplicadorDinero index={4}  nombre={'2.00'} valorMoneda={2} extraerMontoDinero={extraerMontoDinero}/>
      <MultiplicadorDinero index={3}  nombre={'1.00'} valorMoneda={1} extraerMontoDinero={extraerMontoDinero}/> 
      <MultiplicadorDinero index={2}  nombre={'0.50'} valorMoneda={0.5} extraerMontoDinero={extraerMontoDinero}/>
      <MultiplicadorDinero index={1}  nombre={'0.20'} valorMoneda={0.2} extraerMontoDinero={extraerMontoDinero}/>
      <MultiplicadorDinero index={0}  nombre={'0.10'} valorMoneda={0.1} extraerMontoDinero={extraerMontoDinero}/> 
      <div className="moneda-billete">
        <label className="label-total">Monedas: </label><span className="valor-neto">S/.{monedas.toFixed(2)}</span><label className="label-total">Billetes: </label><span className="valor-neto">S/.{billetes.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default ContadorDinero