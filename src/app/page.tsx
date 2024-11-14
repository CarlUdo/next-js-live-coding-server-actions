'use client'

export default function Home() {

  const handleClick = () => {
    alert('clicked')
  };

  return (
    <>
      <h1>Add a couch</h1>
      <input type="text" />
      <button onClick={handleClick}>Add couch</button>
    </>
  )
  
}
