import React from 'react'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@material-ui/icons/Close';

export default function ModalService({openModal, setOpenModal, children, parentNode}) {
    return (
        <Modal
            center
            open={openModal}
            onClose={()=>setOpenModal(false)}
            styles={{modal:{height:'90%', width:'90%', padding:'2rem'}, root:{zIndex:100000}}}
            container={document.getElementById(parentNode)}
            blockScroll={true}
            closeIcon={<CloseIcon/>}
        >
            {children}
        </Modal>
    )
}
