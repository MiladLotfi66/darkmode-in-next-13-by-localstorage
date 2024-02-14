"use client"
import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
   function themeChangeHandler() {
     const value=(JSON.parse(localStorage.getItem('darkMode')));
     const newValue=JSON.stringify(!value)
     localStorage.setItem('darkMode',newValue )
  } 
  return (
    <>
    <h1>تست</h1>
    <button onClick={themeChangeHandler} >تغییر حالت تم</button>
    </>
  );
}
