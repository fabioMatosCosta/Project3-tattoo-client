import React,{useRef} from 'react';



const Imageupload = props => {
       const filePickerRef = useRef();

       const pickedHandler = event => {
           console.log(event.target)
       }

    const pickImageHandler =() => {
        filePickerRef.current.click()
    }
    return (
        <div className="form-control">
            <input 
            type="file" 
            id={props.id} 
            accept = ".jpg,.jpeg,.png"
            onChange={pickedHandler} 
           />
            <div>
                <div>
                    <img src="" alt="Preview"/>
                </div>
                <button type="button" onClick={pickImageHandler}>Pick image</button>
            </div>
        </div>
    )
}

export default Imageupload