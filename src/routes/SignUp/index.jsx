import { useContext, useState } from "react";
import "../Login/login.css";
import logo from '../../assets/logo-sandora.png';
import Button from "../../components/Button";
import TermsOfUsePopUp from "../../components/Terms";
import { TermsOfUseContext } from "../../components/contexts/termsOfUseContext";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", enterprise: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({ email: "", password: "", confirm: "" });
  const [isChecked, setIsChecked] = useState("");
  const { termsOfUse, setTermsOfUse } = useContext(TermsOfUseContext)

  const handleConfirm = (e) => {
    const { value } = e.target;
    setForm({ ...form, confirm: value });
    // Validação em tempo real
    setErrors({
      ...errors,
      confirm: value !== form.password ? "As senhas não coincidem" : ""
    });
    document.getElementById("confirm-error").style.display = (value !== form.password) && value ? "block" : "none";
  };

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
      password: value && value.length < 8 ? "A senha deve ter pelo menos 8 caracteres" : "",
      confirm: value !== form.confirm ? "As senhas não coincidem" : ""
    });
    document.getElementById("password-error").style.display = value && value.length < 8 ? "block" : "none";
    document.getElementById("confirm-error").style.display = (value !== form.confirm) && form.confirm ? "block" : "none";
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noErrors = Object.values(errors).every(error => error === "");
    const values = Object.values(form).every(value => value !== "")
    if (values && noErrors) {
      console.log("Login submitted:", form);
    }
  };

  return (
    <section className='full-container'>
      <TermsOfUsePopUp show={termsOfUse}/>
      <div className='left-container'>
        <div className='left-container-center'>
          <div className='logo'>
            <img src={logo} alt="Logo Sandora" />
          </div>
          <div className='left-container-text'>
            <h2>Crie sua conta e comece a <span className="highlight">aprender</span></h2>
            <p><span className="highlight">Crie sua conta em poucos segundos</span> e comece sua jornada de aprendizado.</p>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <form className='form'>
          <fieldset>
            <legend>Cadastro</legend>
            <div>
              <label for="name">Nome Completo</label>
              <input onChange={(e) => (handleChange(e))} type="text" id="name" name="name" placeholder='Como você será identificado na plataforma.' required />
            </div>
            <div>
              <label for="enterprise">Empresa</label>
              <input onChange={(e) => (handleChange(e))} type="text" id="enterprise" name="enterprise" placeholder='Insira o nome da empresa.' required />
            </div>
            <div>
              <label for="email">Email</label>
              <input onChange={(e) => handleEmail(e)} type="email" id="email" name="email" placeholder='Será usado para login e comunicações.' required />
              <small id="email-error" className="warning">{errors.email}</small>
            </div>
            <div>
              <label for="password">Senha</label>
              <input onChange={(e) => {
                handlePassword(e);
              }} type="password" id="password" name="password" placeholder='(mín. 6 caracteres)' required />
              <small id="password-error" className="warning">{errors.password}</small>
            </div>
            <div>
              <label for="confirm-password">Confirmar Senha</label>
              <input onChange={(e) => handleConfirm(e)} type="password" id="confirm" name="confirm" placeholder='(mín. 6 caracteres)' required />
              <small id="confirm-error" className="warning">{errors.confirm}</small>
            </div>
            <div className="button-container">
              <p className='terms-link' href="#">Ao criar sua conta, você concorda com nossos <a href="#" onClick={() => setTermsOfUse(!termsOfUse)} className="highlight">Termos de uso</a> e <a href="#" className="highlight">Política de Privacidade</a></p>
              <Button text={'CRIAR CONTA'} handleSubmit={handleSubmit} />
              <a className='sign-up-link' href="/signin"><p>Já tem uma conta? Entrar</p></a>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default SignUp;