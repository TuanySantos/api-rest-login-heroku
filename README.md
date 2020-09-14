# api-rest-login-heroku

* <strong>Endpoints </strong> </br>

  /auth/signUp - Cadastro </br> <em>Faça seu cadastro<em/> utilizando o aplicativo da sua preferência para consumir API, abaixo está como deve ser o json e a URL de requisição do método post. </br>
  
  <strong>Endpoint signUp heroku:</strong> <em> https://api-rest-login-heroku.herokuapp.com/auth/signUp </em> </br>

    { </br>
    "name": "nome", </br>
    "email":"email",	 </br>
    "password":"senha", </br>
    "phoneNumbers":[{ </br>
                    "phone":999999999, </br>
                    "areaCode":99 </br>
                  },{ </br>
                      "phone":99999999, </br>
                      "areaCode":99 </br>
                  }]	 </br>
    } </br>



  /auth/sigIn - Autenticação </br> <em>Faça seu login </em> utilizando o aplicativo da sua preferência para consumir API, abaixo está como deve ser o json e a URL de requisição do método post. </br>
  
  <strong>Endpoint signIn heroku:</strong> <em> https://api-rest-login-heroku.herokuapp.com/auth/signIn </em>
  
    { </br>
    "email":"email cadastrado", </br>
    "password":"senha cadastrada" </br>
    } </br>
    
   
  
  /userSearch - Mantem uma sessão valida durante 30 minutos após o último login</br> Este endpoint é acessado inserindo o token que foi gerado no momento do seu cadastro, basta copiar o token, inserir no Header e a URL de requisição do método GET para obter seu cadastro. </br>
  
  <strong>Endpoint userSearch heroku:</strong> <em> https://api-rest-login-heroku.herokuapp.com/auth/userSearch </em></br>
  
  <strong>Exemplo:</strong> </br>
  
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluLXJvb3QtMTA2QGdtYWlsLmNvbSIsImlhdCI6MTYwMDExNjgzOSwiZXhwIjoxNjAwMTE4NjM5fQ.kzpTwj0QEu80vH1z-h7RRVzINx_YB109Ze-K9PDYzr4

  




* <strong>Tecnologias utilizadas</br></strong>
  
  Express - Framework NodeJS</br>
  JSON Web Token - Utilizado para assinatura e/ou criptogria dos tokens</br>
  EncryptJS - Biblioteca para criptografar mensagens</br>
  Mongoose - Biblioteca de modelagem de dados</br>
  MongoDB - Banco de dados NoSQL</br>
  ESlint - Ferramenta de análise de código</br>
  Prettier - Formatador de código</br>
  Dotenv - gerencia as variáveis de ambiente</br>
