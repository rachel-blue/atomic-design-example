import React from 'react';
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

function TemplateDefault({ children }) {
  return (
    <>
      <Header />

      <div className="container py-4">
        {children}
      </div>

      <Footer />
    </>
  )
}

export default TemplateDefault;
