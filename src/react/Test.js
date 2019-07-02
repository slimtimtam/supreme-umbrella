import React from "react";
import ReactDOM from 'react-dom';
import Select from 'react-select';
import 'react-dropdown/style.css'

const options = [
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'Creative Technologies', label: 'Creative Technologies' },
  { value: 'Basket Weaving', label: 'Basket Weaving' },
];

class Test extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      //       // <div>
      //       // <Dropdown options={options} onChange={this._onSelect} placeholder="Choose Your Checksheet" />
      //       // </div>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default Test
