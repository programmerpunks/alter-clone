/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cosmic": "url('./images/background/cosmic.png')",
        "hero-background": "url('./images/landing/Herobackground.png')",
        "hero-background-sm": "url('./images/landing/Herobackground_sm.png')",
        "hero-city": "url('./images/landing/Herocity.png')",
        "hero-sky": "url('./images/landing/Herosky.png')",
        "hero-foreground": "url('./images/landing/Heroforeground.png')",
        "universe-foreground": "url('./images/background/universe.png')",
        "incoming": "url('./images/background/incoming.svg')",
        "ellipse1": "url('./images/ellipse/ellipse-1.png')",
        "ellipse2": "url('./images/ellipse/ellipse-2.png')",
        "ellipse3": "url('./images/ellipse/ellipse-3.png')",
      },
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    }
  },
  plugins: [],
}
  