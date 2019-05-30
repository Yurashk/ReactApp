import React from 'react';
import Main from './components/main'
import Navigation from './components/navigation';
import './mainStyle.css';

class Dashboard extends React.Component {
    constructor(){
        super();
        this.output = this.output.bind(this)
    }
    state={
        category:0,
        categoryToShow:0
    }

    output(evt) {
       
        this.setState({category: this.state.category + evt});
        console.log(evt);
    }
    render() {
        if (this.props.dataMethod) {
            return (
                <div class="container-fluid" >
                    <div class="row">
                        <div class="col-3 bg-dark">
                            <Navigation renderData={this.props.dataMethod} takeValue={this.output} />
                        </div>
                        <div class="col-9 border-left">
                            <Main renderData={this.props.dataMethod} putValue={this.state.category} />
                        </div>
                    </div>
                   
                    
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>
                        No Data Yet!!!
                    </h1>
                </div>
            );
        }
    }
}

export default Dashboard;