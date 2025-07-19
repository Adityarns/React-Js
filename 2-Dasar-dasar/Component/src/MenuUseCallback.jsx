import { memo } from 'react'

function ChildComponent(props) {
  console.log(`Child Component Rendered`)
  return (
    <>
        <h3>Channel YouTube: {props.name}</h3>
        <button onClick={props.aksi}>Ganti Nama Channel</button>

    </>
  )
}

export default memo(ChildComponent)
