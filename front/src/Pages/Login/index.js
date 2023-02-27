import React, { useState } from 'react';


import { ImagemUsuario, ImagemSenha, ToggleButton, Imagemtopo, AjustarInput, Geral, Titulo, ConteudoForm, AlertSuccess, AlertDanger, Form, Container, Label, Input, ButtonSuccess,  ConteudoTitulo} from './styles';


export function Login({statusLogin}){

  const [usuario, setUsuario] = useState({
    user: '',
    senha: ''
  })

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const valorInput = e => setUsuario({ ...usuario, [e.target.name]: e.target.value});

  const Login = async e =>{
    e.preventDefault();
    

    await fetch("http://localhost/api-crud-php/login.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({usuario})
    })
    .then((response) => response.json())
    .then((responseJson) => {

      if(responseJson.erro === true){
        setStatus({
          type: 'erro',
          mensagem: responseJson.mensagem,
        });
      
      }else{
      
        setStatus({
          type: 'success',
          mensagem: responseJson.mensagem,
        });
        
        statusLogin(responseJson.tipo);
      }
    }).catch(() => {
      setStatus({
        type: 'erro', 
        mensagem: 'naos logado',
      });
    });
  }


  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }
  
    return (
      <Geral>
        
        <Imagemtopo></Imagemtopo>
        <Container>  
          <ConteudoForm>

          <ConteudoTitulo>

          
          </ConteudoTitulo>
          
          {status.type === 'erro'? <AlertDanger> {status.mensagem} </AlertDanger>: ""}

          
            <Form onSubmit={Login}>
              
              <AjustarInput>
                <ImagemUsuario> </ImagemUsuario>

                <Input type="text" name="user"  onChange={valorInput} placeholder = "Usuario"/> <br/><br/>
              </AjustarInput>

              <AjustarInput>
                <ImagemSenha> </ImagemSenha>

                <Input  type={showPassword ? 'text' : 'password'}  showPassword={showPassword} name="senha" onChange={valorInput} placeholder = "Senha" /> <br/><br/>
                
                <ToggleButton type="button"  onClick={handleTogglePassword}>  
                  
                </ToggleButton>
              </AjustarInput>
              
              <ButtonSuccess type="submit"> Login </ButtonSuccess>

            </Form>
          </ConteudoForm>
        </Container>
      </Geral>
    );
}

