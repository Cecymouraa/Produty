import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom"; 
import { FaInstagram, FaFacebookF, FaEnvelope, FaLock } from "react-icons/fa";
import { SiSlack } from "react-icons/si";
import axios from "axios";

// Ajustei o caminho do LoadingScreen baseado na sua imagem
import LoadingScreen from "../../assets/components/loadingScreen/LoadingScreen";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionar de forma correta

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        email,
        senha,
      });

      alert(data.mensagem);

      
      // Ou altere para a rota que desejar
      navigate("/vinculacao");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.erro);
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="container">
      <div className="left">
        <h2>Hi, welcome</h2>
        <h1>Produty</h1>
        <p>sua rotina no controle.</p>
      </div>

      <div className="right">
        <form className="form" onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <span className="icon">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="btn">
            ENTRAR
          </button>

          <p className="social">Cadastre-se com redes sociais</p>

          <div className="social-icons">
            <a href="#" className="icon-btn">
              <FaInstagram />
            </a>
            <a href="#" className="icon-btn">
              <SiSlack />
            </a>
            <a href="#" className="icon-btn">
              <FaFacebookF />
            </a>
            <a href="#" className="icon-btn">
              <FaEnvelope />
            </a>
          </div>

          <Link to="/cadastro" className="btn-cadastro">
            CADASTRE-SE
          </Link>
        </form>
      </div>
    </div>
  );
}
