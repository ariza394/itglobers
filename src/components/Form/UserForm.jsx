import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';

//Redux
import {useSelector} from 'react-redux'

const UserForm = () => {
    //redux
    const airSelected = useSelector(state => state.airlines.airSelected);

    //states
    const [error,setError] = useState(null)
    const [user,setUser] = useState({
        fullName:'',
        email:'',
        cellPhone:'',
        ageRange:''
    })
    const [modalShow, setModalShow] = React.useState(false);

    const onSignUpChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSignUpClick = () => {
        var err = null;

        //validations
        user.ageRange === '' && (err = 'Por favor seleccione una edad');
        user.cellPhone.length !== 10 && (err = 'Por favor digite un celular valido');
        user.email.includes('@') === false && (err = 'Por favor escriba un email valido');
        user.fullName === '' && (err = 'Por favor escriba el nombre completo');

        if (err !== null){
            setError(err)
        }
        else{
            console.log('Nombre: ',user.fullName,' Email: ',user.email,' Celular: ',user.cellPhone, ' Edad: ',user.ageRange)
            setError(null)
            setModalShow(true)
            setUser({
                fullName:'',
                email:'',
                cellPhone:'',
                ageRange:''
            })
            setTimeout(function() {
                setModalShow(false)
            }, 5000);
        }
        
    }

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              <p className='text-center'>
                Tu información fue enviada con éxito, estaremos en contacto contigo
              </p>
            </Modal.Body>
          </Modal>
        );
      }

    return ( 
        <div style={{marginTop:'25px'}}>
            <h3 className='text-center'>Hola, bienvenido, sabemos que quieres viajar en un {airSelected.name} por favor            
            diligencia el siguiente formulario:</h3>
            <div className='row justify-content-center mt-5'>
                <div className="col-xs-11 col-sm-10 col-md-8 col-lg-6">
                    <div>
                        <div className="input-group mb-3">
                            <input 
                                name='fullName' 
                                type="text" 
                                className="form-control" 
                                placeholder="Nombre Completo"
                                onChange={onSignUpChange}
                                value={user.fullName}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input 
                                name='email' 
                                type="email" 
                                className="form-control" 
                                placeholder="Email"
                                onChange={onSignUpChange}
                                value={user.email}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input 
                                name='cellPhone' 
                                type="number" 
                                className="form-control" 
                                placeholder="Celular"
                                onChange={onSignUpChange}
                                value={user.cellPhone}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <label className="form-label">Edad: {user.ageRange}</label>
                            <input 
                                name='ageRange' 
                                type="range" 
                                className="form-range" 
                                min="18" max="100"
                                onChange={onSignUpChange}
                            />
                        </div>
                        <div style={{margin:0}} className="row w-100">
                            <button 
                                type='submit' 
                                className='btn btn-outline-primary btn-block'
                                onClick={onSignUpClick}
                            >Submit
                            </button>

                        </div>
                        {error !== null &&
                            <div className="alert alert-danger mt-3" role="alert">
                                {error}
                            </div>
                        }
                        <MyVerticallyCenteredModal
                            show={modalShow}
                        />
                    </div>
                </div>
            </div>            
        </div>
     );
}
 
export default UserForm;