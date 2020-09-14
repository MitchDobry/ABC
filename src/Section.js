import React from 'react';

export class Section extends React.Component {
  render(){
    return (
      <section>
      <div>
        <div className="grid-container">
          <div className="grid-x grid-padding-x grid-padding-y">
          {this.props.children}
          </div>
        </div>
      </div>
    </section>
  )
  }
    
}

export default Section