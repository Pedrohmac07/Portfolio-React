"use client";

import { ReactTyped } from "react-typed";

const HomeComponent = () => (
  <div className="w-75">
    <h1 className="text-4xl font-bold text-white">
      <ReactTyped strings={["Olá, eu sou Pedro Machado!"]} typeSpeed={40} />
    </h1>
    <p className="text-shadow-white">
      <ReactTyped
        strings={[
          "Gosto de programar",
          "Gosto de design",
          "Amo front-end",
          "Amo back-end!"
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </ReactTyped>
    </p>
  </div>
);

export default HomeComponent;
