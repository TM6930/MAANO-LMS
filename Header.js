import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img src="/assets/logo.png" alt="Maano LMS" className="logo" />
      <h1>Maano Learning Management System</h1>
      <nav>
        <ul>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#chat">Chat</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
