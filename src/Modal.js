import { Fragment, useState } from 'react';
import './model.css'; 

const Modal=({ name, address, pincode, but,phoneNumber, setName, add, setAddress, setPincode, setPhoneNumber, buyNow })=> {
    let [isOpen, setIsOpen] = useState(true)


    function closeModal() {
        setIsOpen(false)
        add(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <Fragment>
            {isOpen && (
                <div className="modal-overlay">
                    <section className="modal">
                        <div className="modal-content">
                            <button className="close-button" onClick={closeModal}>&times;</button>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="name" className="modal-label">Enter Full Name</label>
                                        <input value={name} onChange={(e)=>setName(e.target.value)} type="name" name="name" id="name" className="modal-input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="address" className="modal-label">Enter Full Address</label>
                                        <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" name="address" id="address" className="modal-input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="pincode" className="modal-label">Enter Pincode</label>
                                        <input value={pincode} onChange={(e)=>setPincode(e.target.value)} type="text" name="pincode" id="pincode" className="modal-input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="mobileNumber" className="modal-label">Enter Mobile Number</label>
                                        <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="text" name="mobileNumber" id="mobileNumber" className="modal-input" required />
                                    </div>
                                </form>
                                <button onClick={()=>{buyNow();}} type="button" className="modal-button">Order Now</button>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </Fragment>
    )
}
export default Modal;