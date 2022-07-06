import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                FrontEnd development using libraries <br /> and frameworks like
                React and NextJS.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Interface development using frameworks like Tailwind/Bootstrap.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborative work using Git.</p>
            </li>
          </ul>
        </article>
        {/* END OF Front */}
        <article className="service">
          <div className="service__head">
            <h3>Back-End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>MVC Design Pattern.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>REST API and GRAPHQL.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SQL and NoSQL Databases.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
