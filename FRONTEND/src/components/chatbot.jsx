import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { Fragment } from "react";
const Chatbot = () => {


    const [collapse, setCollapse] = useState({ chat: 'collapsesectionbotdown', button: 'collapsebuttonbotup' });
    const [interactions, setInteractions] = useState([]);
    const [textarea, setTextarea] = useState({ textarea: '' });
    const [spinerchat, setSpiner] = useState('spinerchathide');


    const inputRef = useRef(null);

    const handleChat = (e) => {
        const { name, value } = e.target;
        setTextarea({ [name]: value });

    }

    const enviarmsm = async () => {

        if (textarea.textarea.trim() === '') { return; }
        await axiosdata('http://localhost:3003/api/v1/chatbot/ask', textarea.textarea);
        await setSpiner('spinerchathide');
        await setTextarea({ textarea: '' });
        inputRef.current.value = '';
    }




    const axiosdata = async (url, form) => {

        try {

            await setSpiner('spinerchatshow');
            const response = await axios.post(url, { pregunta: form });
            if (!response.statusText === 'OK') { throw new Error(`Error al obtener los datos del servidor`); }


            await setInteractions([
                ...interactions,
                { user: textarea.textarea, bot: response.data.reply[0].generated_text }
            ]);
            return;

        }
        catch (error) {
            console.log('Error al obtener los datos:', error.response.data);
            return await setInteractions([
                ...interactions,
                { user: textarea.textarea, bot: 'hubo un problema... intenta mas tarde!' }
            ]);
        }
    }


    const renderizarmsm = () => {
        return interactions.map((item, index) => {
            return (

                <Fragment key={index}>
                    <div>
                        <div className="d-flex flex-row justify-content-end mb-4">
                            <div className="p-3 me-3 border " style={{ borderRadius: ' 15px' }}>
                                <p className="small mb-0 color4">{item.user}</p>
                            </div>
                            <img src="https://i.imgur.com/JcSw0vP.png" alt="usuario" style={{ width: '45px', height: '100%', borderRadius: '50%' }} />
                        </div>
                        <div className="d-flex flex-row justify-content-start mb-4">
                            <img src="https://i.imgur.com/Ay06uXO.png" alt="bot" style={{ width: '45px', height: '100%', borderRadius: '50%' }} />
                            <div className="p-3 ms-3" style={{ borderRadius: '15px', backgroundColor: '#eeeeeec5' }}>
                                <p className="small mb-0 color3">{item.bot}</p>
                            </div>
                        </div>
                    </div>
                </Fragment>


            )
        });
    }
    return (
        <>
            <button type="button" className={`btn color4 background3 ${collapse.button}`} onClick={() => { setCollapse({ chat: 'collapsesectionbotup', button: 'collapsebuttonbotdown' }); }} ><i className="fas fa-comment-dots " style={{ fontSize: '25px' }}></i></button>
            <section className={collapse.chat}>
                <div className="container py-1">
                    <div className="row d-flex justify-content-center" style={{ width: '100%' }}>
                        <div className="col-md-8 col-lg-6 col-xl-4" style={{ width: '100%' }}>
                            <div className="card " id="chat1" style={{ borderRadius: '20px 20px 0px 0px', backgroundColor: '#333333' }}>
                                <div className="card-header d-flex justify-content-between align-items-center p-3 color4  background1" style={{ display: 'flex', flexDirection: 'row', borderRadius: '20px 20px 0px 0px' }}>

                                    <p className="mb-0 fw-bold">Tienes alguna duda? Preguntale a Tyni!</p>
                                    <div></div>
                                    <button style={{ background: 'none', border: '0' }} onClick={() => { setCollapse({ chat: 'collapsesectionbotdown', button: 'collapsebuttonbotup' }); }}><i className="fas fa-angle-up"></i></button>
                                </div>
                            </div>
                            <div className="card-body" style={{ maxHeight: '300px', overflow: 'auto', scrollbarWidth: 'thin', backgroundColor: '#333333' }}>
                                <div className="d-flex flex-row justify-content-start mb-4">
                                    <img src="https://i.imgur.com/Ay06uXO.png"
                                        alt="avatar 1" style={{ width: '45px', height: '100%', borderRadius: '50%' }} />
                                    <div className="p-3 ms-3" style={{ borderRadius: '15px', backgroundColor: '#eeeeeec5' }}>
                                        <p className="small mb-0 color3">Hola, soy Tyni asistente de MacMotus, puedes preguntarme a cerca del equipo MacMotus.</p>
                                    </div>
                                </div>
                                <hr />

                                {interactions && renderizarmsm()}

                                <div className={spinerchat}>
                                    <div className="spinner-border color1 " role="status"></div>
                                    <p className="color4" style={{ fontSize: '15px', marginLeft: '15px' }}>Generando...</p>
                                </div>


                            </div>
                            <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3 background1">
                                <input type="text" ref={inputRef} className="form-control form-control-lg" id="exampleFormControlInput3" placeholder="Type message" name="textarea" onChange={handleChat} />
                                <button id="sendbtn" className="ms-3 link-info" style={{ background: 'none', border: '0' }} onClick={enviarmsm}><i className="fas fa-paper-plane color4" style={{ fontSize: '25px' }}></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Chatbot;