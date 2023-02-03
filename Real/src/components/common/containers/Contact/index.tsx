import React from 'react'

const Contact = () => {
  return (
    <div className='container py-9'>
        <h3 className='py-3'>CONTACT</h3>
        <form className='flex'>
        <input type="text" name="name" id="nameInput" placeholder='NOMBRE Y APELLIDO' className='flex-1 rounded-lg'/>
        <input type="text" name="name" id="nameInput" placeholder='E-MAIL' className='flex-1 rounded-lg mx-5'/>
        <input type="text" name="name" id="nameInput" placeholder='MESSEGE' className='flex-1 rounded-lg'/>
        <input type="submit" value="SEND" className='rounded-lg bg-white text-black px-5 ml-5' />
        </form>
    </div>
  )
}
export default Contact
