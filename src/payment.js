import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  useParams
} from "react-router-dom";

function Payment() {

  let { uuid } = useParams();
  const [load, setPayment] = useState(true);
  const [response, setRes] = useState({
    success: false,
    buyer: ''
  });

  const checkPayment = () => {
    const payload = {
      uuid: uuid
    }

    Axios.post('http://serverapvps.mooo.com:4000/api/vp1/flow/check',payload).then((res) => {
        if (res.status === 200) {
          setRes({
            success: res.data.payment,
            buyer: res.data.buyer
          })
          setPayment(false);
        }
    }, () => {
      setRes({
        success: false,
      })
      setPayment(false);
    })
  }

  useEffect(() => {
    setTimeout(() => {
      checkPayment()
    }, 2000)
  },[]);

  return(
    <div className="container mt-5 mb-5">
      {load ?
       	<div>Cargando</div>
      :
        <div className="row">
            {response.success ?
              <div className="col-lg-12 col-xs-12 text-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1200px-Yes_Check_Circle.svg.png" style={{ width: 160, height: 160 }} />
                  <h3>Muchas gracias {response.buyer} su pago fue recibido correctamente</h3>
                  <p>Un ejecutivo de GrupoMJ se contactara con usted, para agendar su cita.</p>
              </div>
                :
              <div className="col-lg-12 col-xs-12 text-center">
                  <img src="https://asesoriaonlinemsr.es/wp-content/uploads/2018/04/blog1.png" style={{ width: 200, height: 200 }} />
                  <h3>Su pago no fue procesado</h3>
                  <p>Si existe algun debito de su cuenta, por favor pongase en contacto lo mas pronto posible.</p>
              </div>
            }
        </div>
      }
    </div>
  )
};

export default Payment;