import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import './Home.css'
 
const Home = () => {
    const navigate = useNavigate();
 
    return (
        <>
            <h1>
            Delícias do Fogão
            </h1>
            <p>
            Delícias do Fogão é o seu destino culinário definitivo, onde você pode explorar uma vasta coleção de receitas deliciosas para todas as ocasiões. Desde pratos clássicos reconfortantes até criações culinárias inovadoras, nosso site oferece uma variedade de opções para todos os gostos e habilidades na cozinha. Descubra novas inspirações, aprenda técnicas culinárias e compartilhe suas próprias criações com nossa comunidade apaixonada por comida. Delícias do Fogão é mais do que apenas um site de receitas; é um universo gastronômico onde você pode explorar, experimentar e se deliciar com o mundo da culinária.
            </p>
           <img src={logo}></img>
            <button onClick={() => navigate("/about")}>
                Clique aqui para conhecer nossas deliciosas receitas!
            </button>
        </>
    );
};
 
export default Home;