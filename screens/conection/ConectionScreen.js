import React, { Fragment, useState } from 'react';
import { HeaderLogin } from '../../components/HeaderLogin';
import { SideBar } from '../../components/sidebar/SideBar';
import { ConnectionCard } from './ConnectionCard';
import facebook from '../../images/logofacebook.png';
import instagram from '../../images/logoinstagram.png';
import twitter from '../../images/logotwitter.png';
import youtube from '../../images/logoyoutube.png';
import { AuthorizeCard } from '../../components/authorizeCard/AuthorizeCard';
import Modal from '@mui/material/Modal';
import LoginInstagram from '../../components/instagram/LoginInstagram';
import LoginFacebook from '../../components/LoginFacebook';
import LoginYoutube from '../../components/youtube/AuthYoutube';

const { FacebookConnect } = LoginFacebook();
const { YoutubeConnect } = LoginYoutube();
const { InstagramConnect } = LoginInstagram();


export const ConectionScreen = () => {
  const background = "you`re using 1 of 5 profiles available on your current plan. To unlock additional profile and feacture, upgrade your plan."
  const [showModal, setShowModal] = useState(false);
  const [currentModalpage, setCurrentModalpage] = useState(null);
  const handleClose = () => setShowModal(false)


  const connections = [
    {
      id: 1,
      name: "Facebook",
      img: facebook,
      card: 'card1',
      h1: "Authorize Social Metric on Facebook",
      background,
      p: "SocialMetric needs permission to access content in Facebook on your behalf. To grand permission, you must be an admin for brand’s Facebook page.",
      onClickHandler: () => {
        setCurrentModalpage("Facebook");
        setShowModal(true);
        console.log('estoy funcionando fac')
      },
      loginConnection: FacebookConnect
    },
    {
      id: 2,
      name: "Youtube",
      img: youtube,
      card: 'card2',
      h1: "Authorize Social Metric on Youtube",
      background,
      p: "Social metrics needs permission to access and publish content to Twitter on your behalf.",
      onClickHandler: () => {
        setCurrentModalpage("Youtube")
        setShowModal(true);
        console.log('estoy funcionando you')
      },
      loginConnection: YoutubeConnect

    },
    {
      id: 3,
      name: "Instagram",
      img: instagram,
      card: 'card3',
      h1: "Authorize Social Metric on Facebook for Instagram",
      background,
      p: "Social metrics needs permission from Facebook in orde to access and publish content to INstagram on your behalf. To grant permission, you must be and admin for your brand`s Facebook page.",
      onClickHandler: () => {
        setCurrentModalpage("Instagram")
        setShowModal(true);
      },
      loginConnection: InstagramConnect
    },
    {
      id: 4,
      name: "Twitter",
      img: twitter,
      card: 'card4',
      h1: "Authorize Social Metric on Twitter",
      background,
      p: "Social metrics needs permission to access and publish content to Twitter on your behalf. Add your Twitter profile to monitor activity and send tweets.",
      onClickHandler: () => {
        setCurrentModalpage("Twitter")
        setShowModal(true);
      },
      loginConnection: () => function () { }
    }
  ]

  function renderModal() {
    if (!showModal || !currentModalpage) return null
    const connectionData = connections.find((item) => item.name === currentModalpage);
    return (
      <Modal
        open={showModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AuthorizeCard {...connectionData} handleClose={handleClose} />
      </Modal>
    )
  }

  function renderCards() {
    const connectionsMapped = connections.map((item) =>
      <Fragment>
        <ConnectionCard {...item} />
      </Fragment>
    );

    return connectionsMapped;
  }

  return (
    <Fragment>
      <HeaderLogin />
      <SideBar />
      <div className="body-conect">
        <div className='content-card'>
          <div className="row">
            {renderCards()}
          </div>
        </div>
      </div>
      {renderModal()}
    </Fragment>
  )
}
