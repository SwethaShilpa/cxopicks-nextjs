import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  
  return (
    <div>
      <section id="main-container">        
        <Header/>
        <section id="main-content">
          <NavBar/>
          {children}
        </section>
      </section>    
    </div>
  );
}