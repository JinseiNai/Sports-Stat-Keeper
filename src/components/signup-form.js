import React from 'react';

class SignupForm extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    handleChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        });
        console.log(this.state.password);
    }

    handleChangeConfirmPassword(e) {
        this.setState({
            confirmPassword: e.target.value
        });
        console.log(this.state.confirmPassword);
    }

    clearForm() {
        this.setState({
            username: '',
            password: '',
            confirmPassword: ''
        });
    }

    handleSubmit(e) {
        if (this.state.password === this.state.confirmPassword) {
            alert(this.state.username + ', your account has been created!');
            console.log('username: ' + this.state.username);
            console.log('password: ' + this.state.password);
        } else {
            alert('passwords do not match');
            console.log('First password: ' + this.state.password);
            console.log('Second password: ' + this.state.confirmPassword);
        }
        e.preventDefault();
        this.clearForm();
    }

    render() {
        return (
            <div id="signupForm">
                <fieldset>
                    <legend>Sign Up!</legend>
                    Enter a username:
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
                    Create a password:
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword.bind(this)} />
                    Confirm password:
                    <input type="password" value={this.state.confirmPassword} onChange={this.handleChangeConfirmPassword.bind(this)} />
                    <input type="submit" value="Submit" className="submit" onClick={this.handleSubmit.bind(this)} />
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </fieldset>
            </div>
        );
    }
}

export default SignupForm;