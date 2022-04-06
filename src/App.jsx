import styled from "styled-components";
import Input from "./components/Input";
import Button from "./components/Button";
import Icon from "./components/Icon";

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/contactos');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return ( <MainContainer>
    
    <WelcomeText>Contactos</WelcomeText>
    <InputContainer>
      <Input type="Text" placeholder="Pesquisar contacto" />
    </InputContainer>
  </MainContainer>

}

const MainContainer = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 height: 80vh;
 width: 100vw;
 background: rgba(255, 255, 255, 0.15);
 box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
 backdrop-filter: blur(8.5px);
 border-radius: 10px;
 color:#ffff;
 text-transform: uppercase;
 letter-spacing: 0.4rem;
 @media only screen and (max-width:320px)
 {
   width:80vw;
   height:90vh;
   hr {
     margin-bottom: 0.3rem;
   }
   h4 {
     font-size: small;
     margin-top:-20px;
   }
 }
 @media only screen and (min-width:360px)
 {
   width:80vw;
   height:90vh;
  
   h4 {
     font-size: small;
    
   }
 }
 @media only screen and (min-width:411px)
 {
   width:80vw;
   height:90vh;
   }

@media only screen and (min-width:768px)
 {
   width:80vw;
   height:90vh;
   }

@media only screen and (min-width:1024px)
 {
   width:70vw;
   height:50vh;
   }
@media only screen and (min-width:1030px)
 {
   width:30vw;
   height:70vh;
   }


`;

const WelcomeText = styled.h2`
 
  margin: 3rem 0 2rem 0;
  color:#0c0c0c;
  

`;

const InputContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;

`;

const IconsContainer = styled.div`

display:flex;
justify-content: space-evenly;
margin:2rem 0 3rem 0;
width: 80%;

`;

export default App;
