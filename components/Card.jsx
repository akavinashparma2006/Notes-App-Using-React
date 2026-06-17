import { MdDelete } from "react-icons/md";

function Card({ title, desc, deleteNote }) {
  return (
    <div className='card'>
      <div className='del' onClick={()=>deleteNote(title)}>
      <MdDelete /></div>
      <div className='title'>{title}</div>
      <div className='desc'>{desc}</div>
    </div>
  )
}

export default Card
