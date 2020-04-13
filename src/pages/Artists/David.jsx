import React, { Component } from 'react'
import DefaultLayout from "../../layout/Default"

class David extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <DefaultLayout>
                <br/>
            <div>
                <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/85153852_10221568224538554_6681273906164137984_n.jpg?_nc_cat=104&_nc_sid=13bebb&_nc_ohc=2ITjTdZOZ_YAX_jV-e2&_nc_ht=scontent-amt2-1.xx&oh=2709804e8ea2add95224f9234e731a6b&oe=5EB8F8D9" alt=""/>
            </div>
            </DefaultLayout>
        )
    }
}

export default David
