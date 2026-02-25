import { Link } from "react-router-dom";
import "./Cadastro.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  async function handleCadastro(e) {
    e.preventDefault();

    if (senha !== senha2) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3000/usuariosproduty", {
        email,
        senha
      });

      alert(data.mensagem);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.erro);
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    }
  }

  return (
    <div className="container">

      {/* LADO ESQUERDO */}
      <div className="left">
        <h2>Hi, welcome</h2>
        <h1>Produty</h1>
        <p>sua rotina no controle.</p>
      </div>

      {/* LADO DIREITO */}
      <div className="right">
        <form className="form" onSubmit={handleCadastro}>

          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Digite a senha"
              value={senha2}
              onChange={(e) => setSenha2(e.target.value)}
            />
          </div>

          <button className="btn">Cadastrar</button>

          <p className="social">
            Já possui conta?{" "}
            <Link to="/" className="link-login">
              Faça login.
            </Link>
          </p>

        </form>
      </div>

    </div>
  );
}

