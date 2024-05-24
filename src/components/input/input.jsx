import './input.css'

const Input = (props) => {
    return (
        <div className={"input-container" + " " + props.classAttribute} >
            <div className="label">
                <label htmlFor="">{props.label}</label>
            </div>
            <input type={props.inputType} placeholder={props.placeholder || ""} />
        </div>
    )
}

export default Input;