import { useContext, useState } from "react";
import "./login.css";
import logo from '../../assets/logo-sandora.png';
import Button from "../../components/Button";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });


  // Validação de e-mail (simplificada)
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setForm({ ...form, email: value });

    // Validação em tempo real (opcional)
    setErrors({
      ...errors,
      email: value && !validateEmail(value) ? "Insira um e-mail válido" : ""
    });
    document.getElementById("email-error").style.display = value && !validateEmail(value) ? "block" : "none";
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setForm({ ...form, password: value });
    setErrors({
      ...errors,
      password: value && value.length < 8 ? "A senha deve ter pelo menos 8 caracteres" : ""
    });
    document.getElementById("password-error").style.display = value && value.length < 8 ? "block" : "none";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", form);

  };

  return (
    <section className='full-container'>
      <div className='left-container'>
        <div className='left-container-center'>
          <div className='logo'>
            <img src={logo} alt="Logo Sandora" />
          </div>
          <div className='left-container-text'>
            <h2>Bem-vindo(a) de volta!</h2>
            <p>Faça login com seu e-mail  para acessar seus cursos.</p>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <form className='form'>
          <fieldset>
            <legend>Login</legend>
            <div>
              <label for="email">Email</label>
              <input onChange={(e) => handleEmail(e)} type="email" id="email" name="email" placeholder='Insira seu email cadastrado' required />
              <small id="email-error" className="warning">{errors.email}</small>
            </div>
            <div>
              <label for="password">Senha</label>
              <input onChange={(e) => handlePassword(e)} type="password" id="password" name="password" placeholder='Insira sua senha' required />
              <small id="password-error" className="warning">{errors.password}</small>
              <a className='forgotten-password' href="#">Esqueci minha senha</a>
            </div>
            <div className="button-container">
              <Button text={'FAZER LOGIN'} handleSubmit={handleSubmit}/>
              <a className='sign-up-link' href="signup"><p>Não possui conta? Cadastre-se</p></a>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Login;