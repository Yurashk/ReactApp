import React from 'react';
import Main from './components/main'
import Navigation from './components/navigation';
import './mainStyle.css';

class Dashboard extends React.Component {
    render() {
        if (this.props.dataMethod) {
            return (
                <div class="container-fluid" >
                    <div class="row">
                        <div class="col-3 bg-dark">
                            <Navigation renderData={this.props.dataMethod} />
                        </div>
                        <div class="col-9 border-left">
                            <Main renderData={this.props.dataMethod} />
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