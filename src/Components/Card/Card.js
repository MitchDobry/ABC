import React from 'react';
import './card.scss'

class Card extends React.Component {
  render() {
    let card = ['card']
    if (this.props.hasShadow === true) card.push('card--shadow')
    if (this.props.hasRoundedCorners === true) card.push('card--rounded-corners');

    return (
      <div className={card.join(' ')}>
        <div className="card-section">
          <img src={this.props.image} alt="" />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Card;