import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Input from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import  classes from './Auth.css';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType:'form-control',
                elementConfig: { type: 'email', placeholder: 'email address'
            },
                value: '',
                validation:{ required: true, isEmail: true
            }, 
                valid: false,
                touched: false
            }, 
            
            password: {
                elementType:'form-control',
                elementConfig: { type:'password', placeholder: 'password'    
            },
                value: '',
                validation:{ required: true, minLength: 6
            },
                valid: false,
                touched: false
            }
            
        }
    }


    render () {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        

        const form = formElementsArray.map(formElement => (
            <Form>
                <FormControl
                    key = {formElement.id}
                    elementType = {formElement.config.elementType}
                    elementConfig = {formElement.config.elementConfig}
                    value = {formElement.config.value}
                    invalid = {!formElement.config.valid}
                    shouldValidate = {formElement.config.validation}
                    touched = {formElement.config.touched}
                    changed = {(event) => this.inputChangedHandler(event, formElement.id)}
                />
            </Form>

        )   );

        return(
            <div>
                <form>
                    {form}
                    <br/>
                    <Button variant="success">submit</Button>
                </form>
            </div>
        );
    }


}
export default Auth

