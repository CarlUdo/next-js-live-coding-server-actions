"use client"

import { addCouchAction } from "../actions";

export default function Couches() {
  return (
    <>
      <h1>Add a couch</h1>
      <input type="text" />
      <button onClick={() => addCouchAction("3-seat-couch")}>Add couch</button>
    </>
  )  
}
