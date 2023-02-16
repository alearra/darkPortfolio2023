import React from "react";
import "../assets/styles/Services.css";

export const Services = () => {
  return (
    <section className="services">
      <div className="service-title">
        <h3>
          <b>SOLUTIONS</b>
        </h3>
      </div>
      <br />
      <div className="services-items">
        <article className="items">
          <p>
            <b>Web development</b>, design and programming of custom websites,
            e-commerce solutions and mobile applications. Management and
            efficiency to deliver projects on time and within budget.
          </p>
        </article>
        <article className="items">
          <p>
            <b>Project Management</b> to ensure the success. Focus on detailed
            planning, monitoring and evaluation ensures efficient delivery, on
            time and on budget. Working closely with your team to achieve your
            objectives.
          </p>
        </article>
        <div className="items">
          <p>
            <b>Scrum Master</b> Scrum Master for Agile project management.
            Ensure that the objectives set in the sprint are achieved and that
            the guidelines set in the scrum model are followed.
          </p>
          <br/>
        </div>
      </div>
    </section>
  );
};
