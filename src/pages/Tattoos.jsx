import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import { getTattoos } from '../utils/tattoos';
import TattooContainer from '../components/TattooContainer';
import { Link } from "react-router-dom";

class Tattoos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tattoos: getTattoos(),
            categories:[
                "Black & gray",
                "Watercolor",
                "Old-school",
                "Blackwork",
                "Japanese"
            ],
            filteredCategories:[],
            filteredTattoos: getTattoos()
        }
        this.filterResults = this.filterResults.bind(this);
    }

    toggleCategory(category){
        // let copyCategory = [...this.state.categories]
        let copyFilter = [...this.state.filteredCategories]
        copyFilter.push(category);

    //   if (copyCategory.includes(category)){
    //       copyCategory.filter((filteredCategory)=>{
    //     return filteredCategory !== category 
    //    })}
    //    else {
    //        copyCategory.push(category)}
        this.setState({
            filteredCategories: copyFilter
        }, this.filterResults)
    }

    filterResults() {
        debugger
        let tattooCopy=[...this.state.tattoos]
        let fltr = [...this.state.filteredCategories]

        let fltrdTattoos = tattooCopy.filter( function (tattoo){
            return tattoo.category == fltr[0]
        })
        this.setState({
            filteredTattoos: fltrdTattoos
        })
    }

    render() {
        return (
            <DefaultLayout>
                    <div className="columns">
                    <div className="column">     
                            Traditional Tattoos
                        <img className="image is-5by3" onClick={this.toggleCategory.bind(this,"Old-school")} src="https://nextluxury.com/wp-content/uploads/magnificient-tradtional-black-animal-and-red-roses-tattoo-guys-torso.jpg" alt=""/>
                    </div>
                    <div className="column">     
                            Watercolor Tattoos
                        <img className="image is-5by3" onClick={this.toggleCategory.bind(this,"Watercolor")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk8BWNLtnPr64nOQ0uKRyyU6Y50IBQ1Lr9rAxuDhamV088XAbU&usqp=CAU" alt=""/>
                    </div>
                    <div className="column">     
                            Black & Grey Tattoos
                        <img className="image is-5by3" onClick={this.toggleCategory.bind(this,"Black & gray")} src="https://www.inkedmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU5MDMyNzg0OTc0MzI1Mzk3/gray-feat.jpg" alt=""/>
                    </div>
                    <div className="column">     
                            BlackWork Tattoos
                        <img className="image is-5by3" onClick={this.toggleCategory.bind(this,"Blackwork")} src="https://www.inkedmag.com/.image/t_share/MTU5MDMyNzU4NDAyODg1MjY5/black-1.png" alt=""/>
                    </div>
                    <div className="column">     
                            Japanese Tattoos
                        <img className="image is-5by3" onClick={this.toggleCategory.bind(this,"Japanese")} src="https://positivefox.com/wp-content/uploads/2018/09/japanese-tattoos-traditional-japanese-tattoos-dragon-japanese-tattoo-730x678.jpg" alt=""/>
                    </div>
                    </div>
                    <div className="columns is-multiline">
                        {this.state.tattoos.map((tattoo, index) => {
                            return (<TattooContainer key={index} id={tattoo._id} img={tattoo.imgPath} alt={tattoo.category} />)
                        })}
                    </div>
            </DefaultLayout>
        )
    }
}

export default Tattoos