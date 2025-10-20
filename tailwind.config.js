/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".nthChild:nth-child(odd)": {
          "border-left": "3px solid #848",
          "padding-left": "3em",
          transform: "translateX(190.5px)",
        },
        ".nthChild:nth-child(even)": {
          "border-right": "3px solid #848",
          "padding-right": "3em",
          transform: "translateX(-190.5px)",
        },
        ".nthChild:nth-child(even)::before, .nthChild:nth-child(odd)::before": {
          content: "' '",
          background: "#848",
          width: "3em",
          height: "3px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        },
        ".nthChild:nth-child(odd)::before": {
          left: "0",
        },
        ".nthChild:nth-child(even)::before": {
          right: "0",
        },
        ".nthChild:nth-child(even) div::before, .nthChild:nth-child(odd) div::before":
          {
            content: "' '",
            background: "#848",
            height: "1em",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "1em",
            "border-radius": "50%",
          },
        ".nthChild:nth-child(odd) div::before": {
          left: "-9px",
        },
        ".nthChild:nth-child(even) div::before": {
          right: "-9px",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
    require('tailwind-scrollbar')
  ],
};
