import React from 'react';
import './style.css';

class Navigation extends React.Component {

    state = {
        allData: this.props.renderData,
        orignCategories: this.props.renderData,
        filterData: []
    }

    componentDidMount() {
       
        this.setState({ filterData: this.orignCategoriess() });
    }


    orignCategoriess = () => {
       
        let filteredArr = [];

        if (this.state.orignCategories) {
            // for (let i = 0; i < this.state.orignCategories.length; i++) {
            //     filteredArr.push(this.state.orignCategories[i].bsr_category);
            //  }
            nextInput:
            for (let i = 0; i <this.state.orignCategories.length; i++) {
                var str = this.state.orignCategories[i].bsr_category;
                for (let j = 0; j < filteredArr.length; j++) 
                {
                    if (filteredArr[j] === str)continue nextInput;
                }
                filteredArr.push(str);
            }
            console.log(filteredArr);
            return filteredArr;
        }

    }
    render() {
        return ( 
        <div class="Navigation"> {
                this.state.filterData.map((item, index) => {
                    return ( 
                        <div class="mt-5">
                            <ul key = { index } >
                                <li class = "text-light " onClick={(evt) => this.props.takeValue(item)} > { item } </li> 
                            </ul>
                        </div>
                    )
                })
            } 
            </div>
        );
    }
}
export default Navigation;