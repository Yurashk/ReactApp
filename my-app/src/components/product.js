import React from "react";

class Info extends React.Component {
    filterList(e){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        // обновление состояния
        this.setState({items: filteredList});
    }
    render() {
        if (this.props.products) {
            return (
                <div class="container">
                   
                    <input placeholder="Поиск" />
                    <table>

                        <tbody>
                            <tr>

                                <th>Brand</th>
                                <th>Price</th>

                            </tr>
                            {
                                this.props.products.map((item, index) => {
                                    return (
                                        <tr key={index}>

                                            <td>{item.brand}</td>
                                            <td>{item.price}</td>


                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <p>Products no found</p>
            )
        }

    }


}
export default Info;