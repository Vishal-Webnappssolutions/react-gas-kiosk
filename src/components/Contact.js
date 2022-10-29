import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './index.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <div className="contact">
               
                   <Link to='/contact'> <h1> Contact Us</h1></Link>
                <div className="contact-wrapper">
                    <div className="box">
                        <div className="box-image">
                            <img src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-location-icon-png-image_957068.jpg" alt="" />
                        </div>
                        <h5>Our Office Address</h5>
                        <p>Plam Court Bldg M, 104/h,
                            %th floor,New link Road, Beside,Noida Gas Aggency,
                            Noida-121002
                        </p>
                    </div>
                    <div className="box">
                        <div className="box-image">

                            <img src="https://www.freeiconspng.com/thumbs/message-icon-png/message-icon-png-9.png" alt="" />
                        </div>
                        <h5>General Enquiries</h5>
                        <p>kiosk@gnail.com  </p>
                    </div>
                    <div className="box">
                        <div className="box-image">
                            <img src="https://png.pngtree.com/element_pic/17/03/22/0da1c6bd0e2e8a92f5753033969f1aa7.png" alt="" />
                        </div>
                        <h5>Call Us</h5>
                        <p>+91-7562939752</p>
                    </div>
                    <div className="box">
                        <div className="box-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyb98V0da50ixCLtbr5REKNMZ-npbkoRoM5g&usqp=CAU" alt="" />
                        </div>
                        <h5>Our Timings</h5>
                        <p>Mon - Sun: 10:00 AM -07:00 PM</p>
                    </div>
                </div>

                <div className="form-box">
                    <Form className="form-left">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="number" placeholder="Mobile Nunber" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="email" placeholder="Email ID" />
                        </Form.Group>

                    </Form>
                    <Form className="form-right">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control as="textarea" rows={5} placeholder='Message' />
                        </Form.Group>
                    </Form>
                </div>
                <span className='submit-box'>
                    <Button className='submit-button' type="submit" >
                        Submit
                    </Button>
                </span>

            </div>
        </>)
}

export default Contact