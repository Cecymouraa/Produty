import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./vinculacao.css";

export default function Vinculacao() {
  const navigate = useNavigate();
  // Estado para armazenar os 6 dígitos do código
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""]);

  // Função para lidar com a mudança em cada input de código
  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const novoCodigo = [...codigo];
      novoCodigo[index] = value;
      setCodigo(novoCodigo);

      // Lógica simples para pular para o próximo campo automaticamente
      if (value !== "" && index < 5) {
        const proximoInput = document.getElementById(`input-${index + 1}`);
        if (proximoInput) proximoInput.focus();
      }
    }
  };

  const handleCadastro = (e) => {
    e.preventDefault();

    // Junta os dígitos em uma única string
    const codigoCompleto = codigo.join("");
    console.log("Código digitado:", codigoCompleto);

    // Lógica de exemplo: salva no localStorage e redireciona
    localStorage.setItem("vinculado", "true");
    alert("Equipe vinculada com sucesso!");
    navigate("/"); // Redireciona para a Home ou Dashboard
  };

  return (
    <div className="vinc-container">
      <div className="vinc-card">
        <form className="form" onSubmit={handleCadastro}>
          <h1 className="titleProduty">Produty</h1>

          <p className="fraseTitle">Conecte-se com a sua equipe</p>

          {/* Código da equipe com IDs para o auto-focus */}
          <div className="codigo">
            {codigo.map((digito, index) => (
              <span
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  id={`input-${index}`}
                  type="text"
                  maxLength={1}
                  value={digito}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
                {index === 2 && <span className="traco">-</span>}
              </span>
            ))}
          </div>

          <div className="linha" />

          <p className="temVinculo">
            Não possui equipe? <br />
            <Link to="/cadastro" className="link">
              Deseja criar uma?
            </Link>
          </p>

          <button type="submit" className="btnCriar">
            Vincular equipe
          </button>
        </form>
      </div>
    </div>
  );
}
