import React from 'react';

class Navigation extends React.Component{
    
    state = {
        allData: this.props.renderData,
        orignCategories:[]
    }
    
    
    orignCategories(){
        for(var i=0;i<this.state.allData.length;i++){
            this.orignCategories.push(this.state.allData.products.bsr_category[i]);
        }
        console.log(this.orignCategories);
    }
    render(){
        
        return(
            <div >
             
               {
                               
                                this.state.allData.map((item, index) => {
                                    return (
                                        <ul key={index}>
                                            
                                            <li class="text-light ">{item.bsr_category}</li>
                                        </ul>
                                    )
                                })
                            }
                            
               
            </div>
        );
    }
}
export default Navigation;