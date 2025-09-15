import React from "react";

const filters = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="0">
    <filter id="wood">
      <feColorMatrix
        type="matrix"
        values="0.65 0.20 0    0 0
                0.15 0.40 0    0 0
                0.05 0.10 0.15 0 0
                0    0    0    1 0"
      />
    </filter>

    <filter id="metal">
      <feColorMatrix
        type="matrix"
        values="0.55 0    0    0 0
                0    0.60 0    0 0
                0    0    0.95 0 0
                0    0    0    1 0"
      />
    </filter>

    <filter id="cloth">
      <feColorMatrix
        type="matrix"
        values="1.05 0.10 0    0 0
                0.10 0.95 0    0 0
                0.05 0.10 0.60 0 0
                0    0    0    1 0"
      />
    </filter>

    <filter id="gemstone">
      <feColorMatrix
        type="matrix"
        values="0.30 0    0    0 0
                0    1.10 0.10 0 0
                0    0.20 0.70 0 0
                0    0    0    1 0"
      />
    </filter>

    <filter id="grayscale">
      <feColorMatrix
        type="matrix"
        values="0.3333 0.3333 0.3333 0 0
                0.3333 0.3333 0.3333 0 0
                0.3333 0.3333 0.3333 0 0
                0 0 0 1 0"
      />
    </filter>

    <filter id="water">
      <feColorMatrix
        type="matrix"
        values="0.60 0 0 0 0
                0 0.80 0 0 0
                0 0 1.20 0 0
                0 0 0 1 0"
      />
    </filter>

    <filter id="greenGlow">
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0
                0 1.2 0 0 0
                0 0 0 0 0
                0 0 0 1 0"
      />
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="blueGlow">
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0
                0 0 0 0 0
                0 0 1.3 0 0
                0 0 0 1 0"
      />
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="redGlow">
      <feColorMatrix
        type="matrix"
        values="1.3 0 0 0 0
                0 0 0 0 0
                0 0 0 0 0
                0 0 0 1 0"
      />
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="yellowGlow">
      <feColorMatrix
        type="matrix"
        values="1.2 0 0 0 0
                1.2 1.2 0 0 0
                0 0 0 0 0
                0 0 0 1 0"
      />
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="purpleGlow">
      <feColorMatrix
        type="matrix"
        values="1.1 0 1.1 0 0
                0 0 0 0 0
                1.3 0 1.3 0 0
                0 0 0 1 0"
      />
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </svg>
);

export default filters;
