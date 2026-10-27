import React from 'react';
import profileImg from "./assets/passport_size.jpg";
import dasPdf from "./assets/Das_resume.pdf";
import './App.css';
function Home() {
  return (
    <section className="py-5 ">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">

          {/* Left Side Text */}
          <div className="col-md-7 text-md-start text-center mt-4 mt-md-0">
            <h5 className="text-success">Hello, I'm</h5>
            <h1 className="fw-bold">Arul Das</h1>
            <h3 className="text-success">React.js Frontend Developer</h3>
            <p className="text-muted">
              I am a postgraduate student pursuing an MCA, with a solid foundation
              in HTML, CSS, JavaScript, Python, and Canva. I have a strong interest
              in web development and user interface design, with a focus on creating
              responsive and user-centric digital experiences. Known for being a quick
              learner and an effective team player, I am eager to contribute my
              technical and creative skills to impactful, real-world projects.
            </p>

            {/* Contact Info */}
            <p className='d-flex align-items-center'>
              <span className="material-icons text-success me-2">email</span>
              dhas12346@gmail.com
            </p>
            <p className='d-flex align-items-center'>
              <span className="material-icons text-success me-2">call</span>
              +91 8925356370
            </p>

            {/* Download CV Button */}
            <a
              href={dasPdf}
              download="Arul_Dhas_Resume.pdf"
              className="btn btn-success btn-lg rounded-pill shadow-sm mt-3"
            >
              Download CV
            </a>

          </div>

          {/* Right Side Image & Icons */}
          <div className="col-md-5 text-center">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-5 img-fluid mb-3 shadow-sm"
            />
            {/* Social Icons */}
            {/* Social Icons */}
            <div className="d-flex justify-content-center gap-3 mt-3">

              <a
                href="https://www.facebook.com/aratnasamy.aratnasamy"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#198754" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 
        1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 
        1.893-4.788 4.659-4.788 1.325 0 2.463.099 
        2.794.143v3.24l-1.918.001c-1.504 
        0-1.796.715-1.796 1.763v2.312h3.587l-.467 
        3.622h-3.12V24h6.116C23.403 24 
        24 23.403 24 22.674V1.326C24 
        .597 23.403 0 22.675 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dask___q/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#198754"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#198754"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.388 7.868 10.916.575.1.786-.25.786-.556 0-.274-.012-1.18-.012-2.14-3.2.588-4.04-.788-4.292-1.512-.13-.33-.692-1.512-1.18-1.816-.4-.212-.97-.73-.012-.743.9-.012 1.54.83 1.754 1.175 1.032 1.74 2.68 1.25 3.336.95.1-.743.4-1.25.73-1.54-2.84-.318-5.824-1.42-5.824-6.3 0-1.388.494-2.526 1.3-3.418-.13-.318-.57-1.63.124-3.392 0 0 1.068-.342 3.5 1.3a11.93 11.93 0 0 1 3.184-.43c1.08 0 2.168.142 3.184.43 2.432-1.654 3.5-1.3 3.5-1.3.694 1.762.254 3.074.124 3.392.806.892 1.3 2.03 1.3 3.418 0 4.892-2.994 5.982-5.836 6.3.412.354.774 1.05.774 2.124 0 1.536-.012 2.774-.012 3.148 0 .306.212.668.794.556A10.996 10.996 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/arul-das-70834428b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#198754"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
