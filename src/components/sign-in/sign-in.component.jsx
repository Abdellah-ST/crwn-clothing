import React from "react";
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { auth ,signInWithGoogle } from "../../firebase/firebase.util";

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        }catch(error){
            console.error(error);
        }
        
    }

    handleChange = event => {
        // console.log(event.target);
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return <div className="sign-in">

            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email adress</span>

            <form  onSubmit={this.handleSubmit}>
                <FormInput  type="email"
                        name="email"
                        id="email"
                        handleChange={this.handleChange}
                        label="email"
                        value={this.state.email} required/>

                <FormInput  type="password"
                        name="password"
                        id="password" 
                        label="password"
                        handleChange={this.handleChange}
                        value={this.state.password} required/>

                <div className="buttons">
                    <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton onClick={ signInWithGoogle }
                         isSigninWithGoogle>Sign in with Google</CustomButton>
                </div>
            </form>

        </div>
    }
};


export default SignIn;