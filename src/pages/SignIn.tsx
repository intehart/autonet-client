import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SignIn extends Component {

  render() {
    return (
      <section className="sign-in">
        <div className="sign-in__preview">
          <h1 className="sign-in__headline">
            Автосеть РФ
          </h1>
        </div>
        <div className="sign-in__form">
          <div className="sign-in__field-data">
            <h2 className="sign-in__subheading">Войти в систему</h2>
            <div className="sign-in__data-user">
              <TextField
                id="standard-password-input"
                label="Логин"
                type="name"
                autoComplete="current-password"
                placeholder="Введите логин"
                className="input input--margin input--300"
              />
              <TextField
                id="standard-password-input"
                label="Пароль"
                type="password"
                autoComplete="current-password"
                placeholder="Введите пароль"
                className="input input--margin input--300"
              />
            </div>
            <div className="sign-in__send">
              <Button
                variant="contained"
                color="secondary"
                className="button button--full"
              >
                Войти в систему
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default SignIn;
