/**
 * 1. Browser 레벨에서 발생하는 Gatsby specific 이벤트에 반응
 * 2. Additional global component로 page wrapping
 * 
 * 즉, Gatsby의 client-side와의 연결 지점
 */

// custom typefaces
import "@fontsource/montserrat/variable.css"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
//import "./src/style.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import "./src/styles/global.css"

const React = require("react")

import { AppProvider } from "./src/context/app";


export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}