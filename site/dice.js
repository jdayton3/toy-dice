'use strict';

const e = React.createElement;

class DiceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rolled: false };
  }

  render() {
    if (this.state.rolled) {
      return 'You rolled the dice.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ rolled: true }) },
      'Roll Dice'
    );
  }
}

const domContainer = document.querySelector('#dice');
ReactDOM.render(e(DiceButton), domContainer);
