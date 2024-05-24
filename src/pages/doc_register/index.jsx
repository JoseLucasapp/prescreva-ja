import Input from "../../components/input/input";
import './index.css'

import Swal from 'sweetalert2'

const Doc_register = () => {

    const handleClear = () => {
        document.getElementById('speciality').value = ''
    }

    const sendForm = () => {
        Swal.fire({
            title: 'Formulário enviado !',
            icon: 'success',
            confirmButtonText: 'Voltar',
            confirmButtonColor: "#0D3149",
        }).then(() => window.location.reload())
    }

    return (
        <div className="main">
            <div className="top-config">
                <div className="top">
                    <div className="logo">
                        <img src={process.env.PUBLIC_URL + 'prescrevaja.png'} alt="" />
                    </div>
                    <div className="title">
                        <p>PRESCREVA JÁ</p>
                    </div>
                </div>
                <div className="top-down"></div>
            </div>

            <div className="form">
                <div className="top-form">
                    <div className="elipse"></div>
                    <p>Registro de Médico</p>
                </div>
                <div className="form-body">
                    <div className="inputs">
                        <div className="first-part">
                            <Input inputType="text" label="Nome do médico" />
                            <div className="middle-inputs">
                                <Input inputType="text" label="Municipio" placeholder="Selecione uma" />
                                <Input classAttribute="second" inputType="text" label="Tipo de Inscrição" placeholder="Todas" />
                            </div>
                            <div className="speciality">
                                <label htmlFor="">Especialidade</label>
                                <div>
                                    <input id="speciality" type="text" placeholder="Todas" />
                                    <button onClick={() => handleClear()}>Limpar</button>
                                </div>
                            </div>
                        </div>
                        <div className="second-part">
                            <div className="middle-inputs">
                                <Input placeholder="Selecione estado" label="UF" />
                                <Input classAttribute="second" placeholder="Digite o CRM" label="CRM" />
                            </div>
                            <div className="middle-inputs">
                                <Input placeholder="Ativo" label="Situação" />
                                <Input classAttribute="second" placeholder="Todos os ativos" label="Tipo de situação" />
                            </div>
                            <Input placeholder="Todas" label="Área de atuação" />
                        </div>
                    </div>
                    <div className="send-btn">
                        <button onClick={() => sendForm()}>ENVIAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doc_register;