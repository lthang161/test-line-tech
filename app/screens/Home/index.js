import React, {Component} from 'react';

export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({pathname: `/${this._input.value}`});
  }

  render() {
    return (
      <div className="truck-wrapper">test</div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
