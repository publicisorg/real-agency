import React, { useState, useEffect } from 'react'
import Modal from './Modal'

const videoGallery = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const gallery = [
    {
      type: "gallery",
      subcategories: [
        {
          name: "video1",
          description: "",
          youtube: "https://www.youtube.com/embed/dicnld63dsY?rel=0&showinfo=0&mute=1&muted=1&enablejsapi=1",
          image: "gallery/mercedez.jpeg",
        },

        {
          name: "video2",
          description: "",
          youtube: "8uYBLU9gco8",
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
                  <><div key={index} className="overflow-hidden 2xl:h-64 xl:h-48 lg:h-40 md:h-28 sm:h-40 h-60 justify-center">
                    <div className="flex">
                      <div className="rounded">
                        <img src={item.image} alt="" className="w-max" onClick={handleOpenModal} />
                      </div>
                    </div>
                  </div></>
                );
              })}

            </div>
          );
        })}
        {/* <div className={`${openModal === true ? 'block' : 'hidden'} modal-terms`}>
          <div className="modal-terms-content">
            <div
              className="closeModal"
              onClick={() => {
                setOpenModal(!openModal)
              }}
            >

            </div>
            {openModal && (<Modal isOpen={open} onClose={onclose} data={item.youtube} />)}


          </div>
        </div> */}
      </div>

    </div>
  )
}
export default videoGallery;
