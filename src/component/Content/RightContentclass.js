import React, { Component } from 'react';
import ShowCard from './ShowCard/ShowCard';
import { getData } from './getData_class';

class RightContentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({ products: data });
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div id="right-content">
        <h2>Product:</h2>
        <div id="products">
          {products.map(product => (
            <div key={product.id} className="product">
              <div className="text">
                <div className="p-name">
                  <a href="item.html">{product.loai}</a>
                </div>
              </div>
              <div className="p-img">
                <img src={product.avatar} width={200} height={200} alt={product.name} />
              </div>
              <div className="text">
                <div className="p-cat">{product.name}</div>
                <div className="p-price">Please Call</div>
                <input type="button" className="button" value="Add to cart" />
              </div>
              <div className="clear" />
            </div>
          ))}
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}

export default RightContentClass ;
