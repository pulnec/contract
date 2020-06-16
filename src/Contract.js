import React, { useState, useEffect } from 'react';
import Drawer from 'react-drag-drawer';
import Axios from 'axios';
import './App.css';
import MultiSelect from "react-multi-select-component";


function Contract() {

  const options = [
    { label: "Curso de Bartender", value: "1" },
    { label: "Curso de Barismo y Arte Latte", value: "2" },
    { label: "Curso de Cerveza artesanal", value: "3", },
    { label: "Diplomado en Gerencia de Bares y Restaurantes", value: "4"},
    { label: "Diplomado en Marketing Gastronómico", value: "5"},
    { label: "Diplomado en Vino", value: "6"},
    { label: "Sommelier", value: "7"},
  ];
 

  const [selected, setSelected] = useState([]);


  const [open, setOpen] = useState(false);
  const [openEr, setOpenEr] = useState(false);
  const [initPage, setInitPage] = useState(true);
  const [courses, setCourses] = useState([]);

  const toggle = () => {
    setOpen(!open)
  }

  const toggleEr = () => {
    setOpenEr(!openEr)
  }

  const toggleErX = () => {
    window.location = '/';
  }


  const [pay, setPay] = useState({ load: false, error: false });
  const [sign, setSign] = useState(true);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const [form, setform] = useState({
    name_client: '',
    phone: '',
    email: '',
    email_repeat: '',
    phone_confirm: '',
  })

  const signCheck = () => {
    setSign(!sign)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let passed = true;
    if (form.name_client.trim() === '') {
      passed = false;
    } 
    if (form.phone.trim() === '' || form.phone !== form.phone_confirm) {
      passed = false;
    } 
    if (form.email.trim() === '' || form.email_repeat.trim() === '' || form.email !== form.email_repeat) {
      passed = false;
    } 
    if (!selected.length) {
      passed = false;
    }
 
    if (passed) {
      const payload = {
        ...form,
        cursos: JSON.stringify(selected),
      }
      toggle();
      Axios.post('https://serverapvps.mooo.com:7645/api/vp1/flow/onbar', payload).then((res) => {
        if (res.status === 200) {
          setPay({load: true, error: false});
        }
      }, () => {
        setPay({load: true, error: true});
      })
    } else {
     setOpenEr(true);
    }
  }

  const onChangeTextEvent = (e) => {
    const formValues = {...form};
    formValues[e.target.name] = e.target.value
    setform(formValues);
  } 

  return(
    <React.Fragment>
    {initPage && 
    <div className="container mt-5 mb-5">
    <form onSubmit={onSubmit}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <img src="images/onbarclasslogo.png" alt="alternative" style={{ width: 200 }}/>
       <h3>Registro Solicitud de información </h3>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-12 text-center">
        Estimado cliente estamos trabajando en una plataforma única en el mercado y estamos próximos a realizar el lanzamiento por todo lo alto.
        Para una vez tengamos habilitada toda la información nueva y detallada que traemos para ustedes este 2020 de todos nuestros programas y certificaciones. Complete la información solicitada para su ingreso en la base de datos, asi seras  de los primeros en enterarte y recibir diferentes promociones.

        </div>
      </div>
      <div className="row">
         <div className="col-lg-12 col-xs-12">
            <label>Selecciona los cursos que te interesan</label>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              overrideStrings={{ selectSomeItems: 'Seleccione los cursos de su interes...'}}
              hasSelectAll={false}
              disableSearch={true}
            />
         </div>
      </div>
      <div className="row">
         <div className="col-lg-6 col-xs-12">
         <label>Nombre Completo</label>
            <input onChange={onChangeTextEvent} name="name_client" className="form-control" type="text" />
         </div>
         <div className="col-lg-3 col-xs-12">
         <label>Telefono</label>
            <input onChange={onChangeTextEvent} name="phone" className="form-control" type="text" />
         </div>
         <div className="col-lg-3 col-xs-12">
         <label>Confirmar telefono</label>
            <input onChange={onChangeTextEvent} name="phone_confirm" className="form-control" type="text" />
         </div>
      </div>
      <div className="row">
         <div className="col-lg-4 col-xs-12">
            <label>Correo</label>
           <input onChange={onChangeTextEvent} name="email" className="form-control" type="email" />
         </div>
         <div className="col-lg-4 col-xs-12">
         <label>Confirmar correo</label>
            <input onChange={onChangeTextEvent} name="email_repeat" className="form-control" type="email" />
         </div>
      </div>

      <div className="row">
         <div className="col-lg-12 col-xs-12 text-center mt-3">
             <button onClick={toggleEr} className="btn-solid-lg mt-2">Registrarme</button>
         </div>
      </div>
   
      <Drawer
        open={open}
        onRequestClose={toggle}
        allowClose={false}
      >
      <div style={{ backgroundColor: 'white', width: '100%',  padding: 20, minHeight: 400, padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
              <h3>Gracias!</h3> <p style={{ margin: 0}}>Próximamente uno de nuestros ejecutivos se contactará con usted para</p> enviarle toda la información solicitada y lo nuevo que traemos para ti este 2020 
              <button onClick={toggleErX} className="btn-solid-lg mt-5">Regresar</button>
          </div>
      </div>
    </Drawer>

    <Drawer
        open={openEr}
        onRequestClose={toggleEr}
        allowClose={false}
      >
      <div style={{ backgroundColor: 'white', width: '100%', minHeight: 400, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
                <b>Ups!</b> falta o existe algun error en los datos ingresados, revisalos nuevamente.
                <button onClick={toggleEr} className="btn-solid-lg mt-2">Volver al formulario</button>
            </div>
      </div>
    </Drawer>

      </form>
    </div>
    }
    </React.Fragment>
  )
};

export default Contract;
