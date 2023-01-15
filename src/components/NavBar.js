import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const directions = links.map((link) => {
    return <a key={link} href={"#" + link}>
      {link}
    </a>
  })

  return <nav>{directions/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;