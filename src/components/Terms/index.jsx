import React, { useContext } from "react";
import './termsOfUse.css';
import { RiCloseLine } from "react-icons/ri";
import { TermsOfUseContext } from "../../contexts/termsOfUseContext";

const TermsOfUsePopUp = ({show = false}) => {
    const { termsOfUse, setTermsOfUse } = useContext(TermsOfUseContext);
    const handleClose = () => {
        setTermsOfUse(!termsOfUse);
    }
    return (
        <div className={`terms ${show ? 'show' : ''}`}>
            <div className="terms-container">
                <div className="header"><h2>Termos de uso</h2><RiCloseLine onClick={() => handleClose()} className="close-buttom" size={30}/></div>
                <p>Este termo de consentimento foi elaborado em conformidade com a Lei Geral de Proteção de Dados (LGPD). Consoante ao artigo 5º inciso XII da Lei 13.709/2018, ao cadastrar-se, o titular/ responsável viabiliza a manifestação livre, informada e inequívoca do tratamento de seus dados pessoais. Ao se cadastrar em nossa plataforma, informações específicas sobre os usuários, como endereços de protocolo de Internet (IP), navegação no site, software do usuário, juntamente com outras informações semelhantes, serão armazenadas nos servidores de ML Plataformas Digitais e Marketing LTDA. Essas informações serão estritamente usadas apenas para fins estatísticos e não serão publicadas para acesso geral. Os dados da empresa e das pessoas denunciantes (quando se identificarem) estão protegidos e são tratados com total confidencialidade.</p>
            </div>
        </div>
    )
}

export default TermsOfUsePopUp;