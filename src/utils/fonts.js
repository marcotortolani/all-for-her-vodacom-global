import { Open_Sans, Poppins, Abril_Fatface } from "next/font/google";

// import localFont from "next/font/local";
// export const abrilFatface = localFont({
//   src: "../../public/assets/fonts/AbrilFatface-Regular.ttf",
// });

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["variable"],
  style: ["normal"],
  display: "swap",
  axes: ["wdth"],
});
export const openSansItalic = Open_Sans({
  subsets: ["latin"],
  weight: ["variable"],
  style: ["italic"],
  display: "swap",
  axes: ["wdth"],
});

export const poppinsReg400 = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});
export const poppinsReg500 = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  display: "swap",
});

export const poppinsReg600 = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal"],
  display: "swap",
});

export const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

// export const openSansReg300 = Open_Sans({
//   subsets: ["latin"],
//   weight: "300",
//   style: "normal",
// });
