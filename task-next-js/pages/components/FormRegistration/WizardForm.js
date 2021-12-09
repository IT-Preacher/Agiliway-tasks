import React, { Component } from "react";
// import PropTypes from 'prop-types';
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";
import "antd/dist/antd.css";
import { Progress } from "antd";
import { ConteinerForm } from "./styled.component.js";
import styles from "../../../styles/Form.module.scss";

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
      percentProgress: 0,
    };
  }
  nextPage() {
    this.setState({
      page: this.state.page + 1,
      percentProgress: this.state.percentProgress + 50,
    });
  }

  previousPage() {
    this.setState({
      page: this.state.page - 1,
      percentProgress: this.state.percentProgress - 50,
    });
  }

  onSubmit(values) {
    console.table(values)
  }

  render() {
    const { onSubmit } = this.props;
    const { page, percentProgress } = this.state;

    return (
      <ConteinerForm>
        <div className="conteiner-form">
          <div className={styles.title_form}>
            <span>singup</span>
          </div>
          <Progress
            strokeLinecap="square"
            percent={percentProgress}
            showInfo={false}
          />
          <div className={styles.conteiner_field_form}>
            {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
            {page === 2 && (
              <WizardFormSecondPage
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
              />
            )}
            {page === 3 && (
              <WizardFormThirdPage
                previousPage={this.previousPage}
                onSubmit={this.onSubmit}
              />
            )}
          </div>
        </div>
      </ConteinerForm>
    );
  }
}

// WizardForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default WizardForm;
