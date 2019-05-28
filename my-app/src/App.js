import React from 'react';
import Info from './components/product'
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    state = {
        localData: [],
    }

    async componentDidMount() {
        const api_url = await fetch(`https://demo8421975.mockable.io/products`);
        const data = await api_url.json();

        this.setState({ localData: data });
    }
    render() {
        return (
            <div>
                <Info products={this.state.localData.products} />
            </div>
        );
    }
}
export default App;