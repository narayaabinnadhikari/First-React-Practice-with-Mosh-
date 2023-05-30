import React from "react"

interface ButtonsProps {
    children: string;
    color?: string;
    onClick: () => void;
}
const Buttons = ({children, onClick, color = 'primary'}:ButtonsProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}
export default Buttons