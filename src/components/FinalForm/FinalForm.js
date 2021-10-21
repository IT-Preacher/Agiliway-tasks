import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import './FinalForm.scss';

class FinalForm extends Component{
    render() {
        <Form onSubmit={onSubmit}>
            {
                props => (
                    <form onSubmit={props}>
                        <button type="submit">Submit</button>
                    </form>
                )
            }
        </Form>
    }
}

export default FinalForm;