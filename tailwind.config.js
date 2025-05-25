/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-1" : "#0396ff",
        "color-2" : "#e6f4ff",
        "color-3" : "#E2E6F2",
        "color-4" : "#2B2F33",
        "color-5" : "#76809B",
        "color-6" : "#212633",
        "color-7" : "#f2faff",
        "color-8" : "#99A2BC",
        "color-9" : "#7d7d7d",
        "color-10" : "#c4cdd5",
        "color-11" : "rgba(128,187,53,0.1)",
        "color-12" : "#80BB35",
        "color-13" : "#8E8B8B",
        "color-14" : "#231f20",
        "color-15" : "#777",
        "color-16" : "#9e9e9e",
        "color-17" : "rgba(14,37,55)",
        "color-18" : "rgb(43, 66, 99)",
        "color-19" : "rgb(238, 239, 239)",
        "color-20" : "rgb(36,48,65)",
        "color-21" : "rgb(102, 184, 255)",
        "color-22" : "rgb(163, 168, 175)",
        "color-23" : "rgb(24, 37, 55)",
        "color-24" : "rgb(70, 81, 95)",
        "color-25" : "rgb(0, 136, 255)",
        "color-26" : "rgb(116, 124, 135)",
        "color-27" : "rgb(70, 81, 95)",
        "color-28" : "rgb(0, 136, 255)",
        "color-29" : "rgb(211, 213, 215)",
        "color-30" : "rgb(243, 244, 245)"
      },
      fontSize:{
        "20px" : "20px"
      },
      backgroundImage:{
        "bg-1" : "url('https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726841986/Web_Travel/background-smart_ewdtub.png')",
        "bg-2" : "url('https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726842164/Web_Travel/background-cus-review_csgrqr.png')"
      },
      boxShadow:{
        "box-1" : "0px 4px 4px 0 rgba(0,0,0,0.05)",
        "box-2" : "0px 2px 6px 0px rgba(50,50,50,0.33)",
        "box-3" : "rgb(70, 81, 95) -1px 0px 0px 0px inset",
        "box-4" : "rgba(0, 0, 0, 0.15) 0px 2px 2px -1px"
      },
      fontWeight:{
        "450" : "450",
        "550" : "550"
      }
    },
  },
  plugins: [],
}

