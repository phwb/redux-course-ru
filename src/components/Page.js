import React, { PropTypes, Component } from 'react';

class Page extends Component {
  propTypes = {
    photos: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired
  };

  render() {
    const { photos, year } = this.props;
    return (
      <div>
        <p>You have {photos.length} for {year} year. This is SPARTA!</p>
      </div>
    );
  }
}

export default Page;
