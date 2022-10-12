import React from "react";
import styles from './styles/form.module.css';
import Notification from "./Notification";

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        showNotification: false,
    }


    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    submitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        this.setState({showNotification: true}); 
    }


    render() {
        const {name, email, password, showNotification} = this.state;

        return(
            <form className={styles.form} onSubmit = {this.submitForm}>
                <input className={styles.finput}
                    type='text'
                    name='name'
                    placeholder='Ваше имя'
                    onChange={this.handleChange} 
                />

                <input className={styles.finput}
                    type='email'
                    name='email'
                    placeholder='Ваш email:'
                    onChange={this.handleChange} 
                />

                <input className={styles.finput}
                    type='password'
                    name='password'
                    placeholder='Ваш пароль'
                    onChange={this.handleChange} 
                />

                <button className={styles.fbtn}>Войти</button>

                {showNotification && (
                <Notification name={name} email={email} password={password}/>
            )}
            </form>
        )
    }
}

export default Form;