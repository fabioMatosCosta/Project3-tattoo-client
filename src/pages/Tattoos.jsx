import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import { getTattoos } from '../utils/tattoos';
import TattooContainer from '../components/TattooContainer';
import "./Tattoos.scss"

class Tattoos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tattoos: getTattoos(),
            categories:[
                "Black & gray",
                "Watercolor",
                "Old school",
                "Blackwork",
                "Japanese"
            ],
            filteredCategories:[],
            filteredTattoos: getTattoos()
        }
        this.filterResults = this.filterResults.bind(this);
        this.allTattoos = this.allTattoos.bind(this);
    }

    allTattoos(){
        this.setState({
            filteredTattoos: this.state.tattoos
        })
    }

    toggleCategory(clickedCategory){
        let categoryCopy = [...this.state.categories]
        let newCat = [];
        if(categoryCopy.includes(clickedCategory)) {
            newCat = categoryCopy.filter((cat)=> clickedCategory === cat)
        } else {
            debugger
            newCat.push(clickedCategory)
        }
        this.setState({
            filteredCategories: newCat
        }, this.filterResults)
    }

    filterResults() {
        let tattooCopy=[...this.state.tattoos]
        let fltr = [...this.state.filteredCategories]

        let fltrdTattoos = tattooCopy.filter( function (tattoo){
            return tattoo.category === fltr[0]
        })
        this.setState({
            filteredTattoos: fltrdTattoos
        })
    }

    render() {
        const divStyle = {
            backgroundImage: 'url("https://www.inkedmag.com/.image/t_share/MTU5MDMyNzU4NDAyODg1MjY5/black-1.png")',
          };
        return (
            <DefaultLayout>
                    <div className="columns">
                    <div className="column mt">     
                         Show all Tattoos
                        <img className="categ-tattoos  bobble" onClick={this.allTattoos} src="https://res.cloudinary.com/fabiomatoscosta/image/upload/v1586698474/folder-name/james-discombe-06o01CtKjGw-unsplash.jpg.jpg" alt=""/>
                    </div>
                    <div className="column mt">     
                         Traditional Tattoos
                        <img className="categ-tattoos  bobble" onClick={this.toggleCategory.bind(this,"Old school")} src="https://nextluxury.com/wp-content/uploads/magnificient-tradtional-black-animal-and-red-roses-tattoo-guys-torso.jpg" alt=""/>
                    </div>
                    <div className="column mt">     
                         Watercolor Tattoos
                        <img className="categ-tattoos  bobble" onClick={this.toggleCategory.bind(this,"Watercolor")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk8BWNLtnPr64nOQ0uKRyyU6Y50IBQ1Lr9rAxuDhamV088XAbU&usqp=CAU" alt=""/>
                    </div>
                    <div className="column mt">     
                         Black & Grey Tattoos
                        <img className="categ-tattoos  bobble" onClick={this.toggleCategory.bind(this,"Black & gray")} src="https://www.inkedmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU5MDMyNzg0OTc0MzI1Mzk3/gray-feat.jpg" alt=""/>
                    </div>
                    <div className="column mt">     
                         BlackWork Tattoos
                        <img className="categ-tattoos  bobble" onClick={this.toggleCategory.bind(this,"Blackwork")} src="https://www.inkedmag.com/.image/t_share/MTU5MDMyNzU4NDAyODg1MjY5/black-1.png" alt=""/>
                    </div>
                    <div className="column mt">     
                         <h2 className="jap">Japanese Tattoos</h2> 
                         {/* <main>
  <div style={divStyle}>
    <div  style={divStyle}</div>
    <div  style={divStyle}</div>
    <div  style={divStyle}</div>
    <div  style={divStyle}</div>
    <div  style={divStyle}</div>
  </div>
</main>
  */}
                        <img className="categ-tattoos bobble" onClick={this.toggleCategory.bind(this,"Japanese")} src="https://positivefox.com/wp-content/uploads/2018/09/japanese-tattoos-traditional-japanese-tattoos-dragon-japanese-tattoo-730x678.jpg" alt=""/>
                    </div>
                    </div>
                    <div className="columns is-multiline">
                        {this.state.filteredTattoos.map((tattoo, index) => {
                            return (<TattooContainer key={index} id={tattoo._id} img={tattoo.imgPath} alt={tattoo.category} />)
                        })}
                    </div>
            </DefaultLayout>
        )
    }
}

export default Tattoos