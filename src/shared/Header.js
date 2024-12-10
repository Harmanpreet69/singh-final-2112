"use client";

import { themeContext } from "@/app/globalContext";
import Link from "next/link";
import React, { useContext } from "react";

const Header = () => {
  const theme = useContext(themeContext);
  console.log("theme", theme);
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          COMP2112 Final
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/api-data">
                API Data
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Harmanpreet 200567042
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
