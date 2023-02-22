import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const videoGallery = () => {
  const [openModal, setOpenModal] = useState(false)
  const [galleryId, setModalIdentifier] = useState("");
  const [galleryURL, setModalURL] = useState("");
  const [galleryDesc, setModalDesc] = useState("");

  const handleOpenModal = (name: string, yturl: string, desc: string) => {
    setModalURL(yturl);
    setModalIdentifier(name);
    setModalDesc(desc);
    setOpenModal(!openModal);
  }

  const galleryAnim = {
    rest: {opacity: 1, scale: 1, transition: { duration: 0.25 }},
    hover: {scale: 1.07, transition: { type: "spring", stiffness: 360, damping: 13 }},
  }

  const gallery = [
    {
      type: "gallery",
      subcategories: [
        {
          name: "Mercedes Benz",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/mercedez.jpeg",
        },

        {
          name: "Rugby",
          description: "",
          youtube: "https://www.youtube.com/embed/mTkqNwDXsQI",
          image: "gallery/rugby.png",
        },
        {
          name: "video3",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/models.jpeg",
        },
        {
          name: "video4",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/forever.png",
        },
        {
          name: "video5",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/mercedes2.jpeg",
        },
        {
          name: "video6",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/golf.jpeg",
        },
        {
          name: "video7",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/visa.png",
        },
        {
          name: "video8",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/flybondi.png",
        },
        {
          name: "video9",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/vogue.jpeg",
        }
      ]
    }
  ];
  return (
    <div className="p-5 container">
      <div>
        {gallery.map((item, index) => {
          return (
            <div className="border h-9/12  rounded-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" key={index}>
              {item.subcategories.map((item, index) => {
                return (
                  <><motion.div variants={galleryAnim} initial="rest" whileHover="hover" key={index} layoutId={item.name} className="overflow-hidden 2xl:h-64 xl:h-48 lg:h-40 md:h-28 sm:h-40 h-60 justify-center">
                    <div className="flex">
                      <div className="rounded">
                        <motion.img  src={item.image} id={item.name} alt="" className="w-max" onClick={() => handleOpenModal(item.name, item.youtube, item.description)} />
                      </div>
                    </div>
                  </motion.div>
                  </>
                );
              })}

            </div>
          );
        })}
        <div className={`${openModal === true ? 'block' : 'hidden'} modal-terms`}>
          <div className="modal-terms-content">
            <div
              className="closeModal"
              onClick={() => {
                setOpenModal(!openModal)
              }}
            >

            </div>
            <AnimatePresence>
              {openModal && (<Modal isOpen={open} onClose={setOpenModal} data={galleryURL} name={galleryId} description={galleryDesc}/>)}
            </AnimatePresence>


          </div>
        </div>
      </div>

    </div>
  )
}
export default videoGallery;
