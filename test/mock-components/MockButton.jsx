import React from 'react';
import injectSheet from 'react-jss'

const styles = {
  mockButton: {
    color: 'green',
    borderRadius: 8
  }
}

class MockButton extends React.Component {
  render() {
    const { children, classes } = this.props;
    return (
      <button className={classes.mockButton}>
        {children}
      </button>
    )
  }
}

export default injectSheet(styles)(MockButton)