import React from "react";
import "./Footer.css";

function Footer() {

  return (

    <footer class="page-footer fixed-bottom font-small">

      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://github.com/vbarajas4"
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/vanessa-maldonado-90668110a/"
            >
              <i class="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center">
        © 2021 Copyright:
        <a href="https://github.com/vbarajas4/React-Portfolio">
          {" "}
          Vanessa Maldonado
        </a>
      </div>
    </footer>
  );
}

export default Footer;
