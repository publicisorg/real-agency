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
          name: "1",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/mercedez.jpeg",
        },

        {
          name: "2",
          description: "",
          youtube: "https://www.youtube.com/embed/lJPiU-s4oiI",
          image: "gallery/rugby.png",
        },
        {
          name: "3",
          description: "",
          youtube: "https://www.youtube.com/embed/gMNNago-pXI?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/models.jpeg",
        },
        {
          name: "4",
          description: "",
          youtube: "https://www.youtube.com/embed/oJeFz4KZfU8?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/forever.png",
        },
        {
          name: "5",
          description: "",
          youtube: "https://www.youtube.com/embed/6cdN7N8ntcY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/mercedes2.jpeg",
        },
        {
          name: "6",
          description: "",
          youtube: "https://www.youtube.com/embed/0-SaD3Lxae4?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/golf.jpeg",
        },
        {
          name: "7",
          description: "",
          youtube: "https://www.youtube.com/embed/8uYBLU9gco8?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/visa.png",
        },
        {
          name: "8",
          description: "",
          youtube: "https://www.youtube.com/embed/bV7ignLwBOo?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/flybondi.png",
        },
        {
          name: "9",
          description: "",
          youtube: "https://www.youtube.com/embed/lxap1sVIrAk?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
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
