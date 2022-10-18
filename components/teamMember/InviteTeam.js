import React, { useState } from 'react'
import useStateForms from '../../hooks/useStateForms'
import edificio from "../../images/edificio.png"
import grupomas from "../../images/anadir-grupo.png"
import corona from "../../images/corona.png"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ModalInviteTeams } from '../teamMember/ModalInviteTeams'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const InviteTeam = () => {
  const { search, handleInputChange } = useStateForms();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function BasicModal() {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalInviteTeams />
          </Box>
        </Modal>
      </div>
    );
  }

  return (
    <div>
      <button className='memberAndProfile'>
        <div className='memberAndProfileDisplay'>
          <div><img src={edificio} alt="grupo" /></div>
          <div className='memberAndProfileText'>
            <strong>Colombo</strong>
            <p>Manage Grups and Profile</p>
          </div>
        </div>
      </button>
      <div>
        <input
          className='searchinput'
          type="text"
          name="search"
          label="Search"
          placeholder="Search"
          dataRegister={search}
          onChange={handleInputChange}
        >
        </input>
      </div>
      <div className='memberAndProfileDisplay'>
        <div className='memberAndProfileBackground'>TL</div>
        <div className='memberAndProfileText'>
          <strong>
            John Doe
          </strong>
          <p>
            example.colombo.com
          </p>
        </div>
        <div className='memberAndProfileicon'>
          <img src={corona} alt="corona" />
        </div>
      </div>
      <button className='inviteTeamBottom' onClick={handleOpen}>
        <span><img src={grupomas} alt="añadir" /></span>
        Invite a team member
      </button>
      {BasicModal()}
    </div>
  )
}
