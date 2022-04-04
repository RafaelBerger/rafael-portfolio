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
            <h3>UX/UI Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Basic knowledge in UX/UI Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Knowledge of prototyping tools like Figma and AdobeXD.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I can collaborate and interact with UX/UI Designers teams at
                work.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UX/UI */}
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
              <p>Static Pages and Landing Pages.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API REST.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborative work using Git.</p>
            </li>
          </ul>
        </article>
        {/* END OF WebDev */}
      </div>
    </section>
  );
};

export default Services;
