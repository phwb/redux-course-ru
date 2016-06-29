import React, { PropTypes, Component } from 'react';

export default class Page extends Component {

  static propTypes = {
    photos: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired,
    setYear: PropTypes.func.isRequired
  };

  onYearBtnClick(e) {
    this.props.setYear(+e.target.innerHTML);
  }

  render() {
    const { photos, year } = this.props;
    return(
      <div>
        <p>
          <button onClick={::this.onYearBtnClick}>2016</button>
          <button onClick={::this.onYearBtnClick}>2015</button>
          <button onClick={::this.onYearBtnClick}>2014</button>
        </p>
        <h3>{year} year</h3>
        <p>You have {photos.length} photos.</p>
      </div>
    );
  }
  
}
