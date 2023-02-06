import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        CookWithDal
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Feed
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Planner
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Shopping
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Filters
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
