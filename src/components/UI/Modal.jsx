import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

const Backdrop = props => {
	return <div className={styles.backdrop} onClick={props.hideTheModal}></div>
}

const ModalOverlay = ({ props }) => {
	return <div className={styles.modal}>{props.children}</div>
}

const portalElement = document.getElementById('overlays')

const Modal = props => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop hideTheModal={props.hideTheModal} />,
				portalElement,
			)}
			{ReactDOM.createPortal(<ModalOverlay props={props} />, portalElement)}
		</>
	)
}

export default Modal
