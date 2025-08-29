import React, { useEffect } from "react";

export default function Dead() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dead">
      <div>
        <span className="you-are-dead">You are dead!</span>
      </div>

      <br />

      <div>
        <button
          className="rpgui-button is-big"
          onClick={() => window.location.reload()}
          type="button"
        >
          <span>Play again!</span>
        </button>
      </div>
    </div>
  );
}
