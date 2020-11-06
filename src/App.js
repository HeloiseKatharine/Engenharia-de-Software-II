import React from 'react';
import './App.css';
/*importações do PrimeReact*/
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { GMap } from 'primereact/gmap';
import { Checkbox } from 'primereact/checkbox';
import { Card } from 'primereact/card';


function App() {

    return (
        <div className="App">
            <header className="App-header">
        <h2>POUSADA ANCHOR</h2>

                <h3>CONTATO</h3>

                <span className="p-float-label">
                    <InputText id="in1" />
                    <label htmlhtmlFor="in1">Nome:</label>
                </span>
                <br />

                <span className="p-float-label" >
                    <InputText id="in2" />
                    <label htmlhtmlFor="in2">E-mail:</label>
                </span>
                <br />

                <span className="p-float-label" >
                    <InputText id="in3"/>
                    <label htmlhtmlFor="in3">Mensagem: </label>
                </span>
                <br />

                <Button label="Enviar" className="App-button" style={{ width: '25rem', backgroundColor: '#BEA7A7', color: '#636060', font: 'Arial' }} />

                <h3>LOCALIZAÇÃO</h3>

                <Card title="Informações:" style={{ width: '25rem', marginBottom: '10em', backgroundColor: '#BEA7A7', color: '#636060', font: 'Arial' }}>
                    <p className="p-m-0" style={{ lineHeight: '1.5', color: '#636060', font: 'Arial' }}>
                        SHS Quadra 1 - Bloco A - Asa Sul

                        Brasília, Distrito Federal - Brasil

                        Telefone: +55 (61) 4362-7575

                        WhatsApp: +55(61)4216-5841

                        Email: contato@pousadaanchor.com.br
                    </p>
                </Card>

            </header>
        </div>
    );
}

export default App;
