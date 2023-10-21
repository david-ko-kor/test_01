import React from 'react'
import ReactDOM  from 'react-dom';
import classess from './Modal.module.css';
console.log(classess)
const Backdrop = props =>{

    return <div  onClick={props.modal} className={classess.background}/>
}
const ModalOverlay = (props) =>{
    return <div className={classess.modal}>
        <div>{props.children}</div>
        <button onClick={props.modal}>canceld</button>
         </div>

}
const portalElement = document.getElementById('overlay')
export default function Modal(props) {
    console.log(props)
  return (
    <>
        {ReactDOM.createPortal(<Backdrop modal={props.modal}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay modal={props.modal}>{props.children}</ModalOverlay>,portalElement)}
    </>
  )
}
