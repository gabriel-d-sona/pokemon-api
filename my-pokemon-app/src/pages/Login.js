import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <p>Email:</p>
                <input
                    id="name-input"
                    data-testid="login-name-input"
                    type="text"
                    name="name"
                    onChange={ this.inIputChange }
                />
                <p>Senha:</p>
                <input
                    id="senha-input"
                    data-testid="login-senha-input"
                    type="text"
                    name="senha"
                    onChange={ this.inIputChange }
                />
                <br/>
                <button
                    id="btnLogin"
                    data-testid="login-btn"
                    // disabled={ btnDisable }
                    onClick={ this.btn }
                >
                    Entrar
                </button>
            </div>

        );
    }
}

export default Login;