import './Bottom.css'

export default function Bottom(props) {
  return (
    <div className="Bottom">
      <button onClick={()=>{props.handleOnButtonClicked()}} >ON</button>
      {console.log(props.handleOnButtonClicked)}
      <button onClick={()=>{props.handleOffButtonClicked()}} >OFF</button>
    </div>
  )
}