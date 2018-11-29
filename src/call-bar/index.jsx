import React from 'react';
import styles from './styles.module.css';

export default class CallBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hangUp: false, answered: false };
  }

  handleHangUp = () => {
    this.setState({ hangUp: true });
  };

  handleAnswer = () => {
    this.setState({ answered: true });
  };

  render() {
    let blinkerClass = null;
    let displayTransition = null;

    if (this.state.hangUp) {
      displayTransition = styles['slide-out'];
    } else if (this.props.isRinging) {
      displayTransition = styles['slide-in'];
    }

    if (this.state.answered) {
      blinkerClass = null;
    } else if (this.props.isRinging) {
      blinkerClass = styles['blinker-transitions'];
    }

    return (
      <div className={[styles.center, displayTransition].join(' ')}>
        <div className={styles.container}>
          <div className={[styles.blinker, blinkerClass].join(' ')}>
            <div className={styles['call-bar']}>
              <div className={styles.controls}>
                <div className={styles.hangup} onClick={this.handleHangUp}>
                  H
                </div>
                <div className={styles.answer} onClick={this.handleAnswer}>
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
