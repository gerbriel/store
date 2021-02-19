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

    checkValidity(value, rules){
        let isValid =true;
        if(!rules){
            return true;
        }
        if (rules.required){
            isValid=value.trim()!== '' && isValid;
        }
        if (rules.minLength){
            isValid =value.length>=rules.minLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }
    inputChangedHandler = (event,controlName)=>{
        const updatedControls={
            ...this.state.controls,
            [controlName]:{ ...this.state.controls[controlName],
            value: event.target.value,
            valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
            touched: true
            }
        };
        this.setState({controls: updatedControls});
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
                <input
                    className='Auth'
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
            <div className='Auth'>
                <form>
                <h2>login</h2>
                    {form}
                    <br/>
                    <Button  className='login' variant="success">submit</Button>
                </form>
            </div>
        );
    }


}
export default Auth

