"use strict";

import "./index.css";

export function Footer() {
  return (
    <footer>
      <a href={"https://github.com/hcorta"} style={{ marginBottom: 8 }}>
        Made with ❤️ by
        <strong> Hugo Corta</strong>
      </a>
      <a
        href="https://www.buymeacoffee.com/hcorta"
        target="_blank"
        style={{ marginBottom: 4 }}
      >
        Would you like to support this project?
      </a>
      <a href="https://www.buymeacoffee.com/hcorta" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{ height: 30, width: 110 }}
        />
      </a>
    </footer>
  );
}
