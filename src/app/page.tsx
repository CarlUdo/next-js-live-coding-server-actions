"use client"

import { handleClick } from "./actions"

export default function Home() {
  return (
    <>
      <h1>Add a couch</h1>
      <input type="text" />
      <button onClick={handleClick}>Add couch</button>
    </>
  )  
}
