import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <span>
          <img 
            src="/images/smk.png" 
            alt="Logo" 
            className="h-10 w-auto" 
          />
        </span>
        <p className="text-slate-600"> Copyright Metschoo 2025</p>{" "}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
