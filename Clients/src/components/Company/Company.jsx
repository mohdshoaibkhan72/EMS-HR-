import React from "react";
import "./Company.css"; // Import the CSS file

const Company = () => {
  return (
    <div className="company-details">
      <h1>Company Name</h1>
      <section className="company-description">
        <h2>About Us</h2>
        <p>
          We are a leading company in the industry, dedicated to providing
          top-notch services and solutions for our clients. Our commitment to
          excellence and customer satisfaction sets us apart.
        </p>
      </section>
      <section className="company-services">
        <h2>Our Services</h2>
        <ul>
          <li>Service 1: Brief description of the service</li>
          <li>Service 2: Brief description of the service</li>
          <li>Service 3: Brief description of the service</li>
        </ul>
      </section>

      <section className="company-location">
        <h2>Our Location</h2>
        <p>123 Business Street, City Name, State, Zip Code</p>
      </section>

      <section className="company-contact">
        <h2>Contact Us</h2>
        <p>Email: contact@company.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default Company;
