import React from 'react';


class UploadPic extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
      }
      handleSubmit(event) {
        event.preventDefault();
        
        alert(
          `Selected file - ${this.fileInput.current.files[0].name}`
        );
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Upload file:
              <input type="file" ref={this.fileInput} name="imgName" />
              <input type="text" name="title" />
            </label>
            <button className="mt" type="submit">Submit</button>
          </form>
      );
    }
  }

  export default UploadPic