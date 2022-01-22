import React from 'react';

class Name extends React.Component {
  render() {
    const { value, handleName } = this.props;

    let error = undefined;
    if (value.length > 40) error = 'Texto muito grande!!';

    return (
      <label>
        Nome:
        <input
          name='nome'
          value={value}
          onChange={handleName}
        />
        <spam>{error ? error : ''}</spam>
      </label>
    );
  }
}

export default Name;
