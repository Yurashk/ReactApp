import React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
    state = {
        allData: this.props.renderData,
        orignData: this.props.renderData
    }
    filterData = (e) => {
        let filteredList = this.state.orignData.filter(filterd => {
            return filterd.brand.slice(0, e.target.value.length).toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        });
        this.setState({ allData: filteredList });
    }
    render() {

        return (


            <div class="container ">
                <div class="row mt-3 mb-3 justify-content-center">
                    <div class="col-6">
                        <input placeholder="brand" onChange={this.filterData} />
                    </div>
                </div>

                <div class="row justify-content-center">

                    <table class="col-10  bg-light ">

                        <tbody class="rounded">
                            <tr class="border ">
                                <th class="border">Name</th>
                                <th class="border">Brand</th>
                                <th class="border">Price</th>
                                <th class="border">Mark</th>
                            </tr>
                            {
                                this.state.allData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                             <td class="border">{item.name}</td>
                                            <td class="border">{item.brand}</td>
                                            <td class="border">{item.price}</td>
                                            <td class="border">{item.stars}</td>
                                           

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>


                {/* <button onSubmit={this.props.rederData}>
                    <ul>
                        <li>
                        this.props.rederData.
                        </li>
                    </ul>
                </button> */}
            </div>
        );

    }
}
export default Main;