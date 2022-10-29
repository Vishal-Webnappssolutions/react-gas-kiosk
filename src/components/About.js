import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <img src="https://media.istockphoto.com/photos/rusty-pressure-regulator-and-operating-valve-of-cooking-gas-tanks-lpg-picture-id1175459823?s=612x612" alt="" />
        </div>
        <div className="about-para">
         <Link to='/about'> <h1>About Us</h1></Link>
          <p>We, The Gas Kiosk, Situated at Malad West, Mumbai, Mahrastra, are one of the most popular & reliable gas agencies in the vicinity that provide gas cylinders and other gas cookies gas connectins to residence  as and when required. We ensure that our clients do not complain about untimely meals and skipping lunches and thus are their back and all. Our staff is exteremly determind in making it a smooth and easy going experience for you. </p>
        </div>
      </div>
    </>
  )
}

export default About