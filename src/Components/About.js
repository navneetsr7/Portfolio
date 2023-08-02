import React from 'react'

function About() {
  return (
    <div>
      <div className="container">
        <div className="card col-12 row ">
          <div className="card-header fw-bold text-center bg-info "><h2>About Us</h2></div>
          <div className="card-body">
            <h4>Name : Navneet Srivastav </h4>
            <h4>Phone : 9889325556</h4>
            <h4></h4>
            <p><b>A full stack web developer is a person who can develop both client and server software. <br /> In addition to mastering HTML and CSS, he/she also knows how to: Program a browser <br /> (like using JavaScript, jQuery, React, or Vue) Program a server (like using PHP, ASP, Python, or Node)</b></p>
            <p><b>The front end, also known as client-side or customer-facing side, refers to all the elements of a computer application that users interact with directly. By contrast, the back end encompasses all the behind-the-scenes tech that computes business logic, fulfills user requests, and permanently stores sensitive data.

              You can think of the front end as the tip of an iceberg,<br /> while the bulk of the unseen back end extends far below the water’s surface.

              Front end developers create and optimize visible parts of a website, making components responsive to different viewing environments, such as smartphones, tablets, and desktops. <br /> They use client-facing programming languages, like HTML, CSS, and JavaScript, to render an engaging site.

              On the other hand, back end development requires programmers to build and refine the internal software that operates a company’s databases, servers, and proprietary software. Back end developers are responsible for creating the pathways to deliver information to and from users who operate front end interfaces.</b></p>
            <a href="https://drive.google.com/file/d/1fzqsyhkrA-8-pcOJWDqjY5YxQDnigJE6/view?usp=sharing" className='btn btn-primary'>Resume</a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
