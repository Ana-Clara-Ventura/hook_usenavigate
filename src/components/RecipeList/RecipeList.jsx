import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeList.css"; // Importe o arquivo CSS para estilização

// Defina o componente CardRecipe
const CardRecipe = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const recipes = [
  {
    title: "Pizza Margherita",
    description:
      "Uma receita clássica de pizza italiana com molho de tomate, muçarela e manjericão fresco.",
  },
  {
    title: "Hambúrguer",
    description:
      "Um delicioso hambúrguer caseiro com carne moída, alface, tomate, queijo e molho especial.",
  },
  {
    title: "Sopa de Legumes",
    description:
      "Uma sopa reconfortante feita com uma variedade de legumes frescos e temperos.",
  },
  {
    title: "Macarrão Carbonara",
    description:
      "Um prato clássico da culinária italiana, com macarrão, bacon, queijo parmesão e ovos.",
  },
  {
    title: "Salada Caesar",
    description:
      "Uma salada refrescante com alface romana, croutons, queijo parmesão e molho Caesar.",
  },
  {
    title: "Tacos Mexicanos",
    description:
      "Tacos crocantes recheados com carne moída temperada, alface, tomate e queijo.",
  },
  {
    title: "Risoto de Cogumelos",
    description:
      "Um prato cremoso e reconfortante feito com arroz arbóreo, cogumelos e queijo parmesão.",
  },
  {
    title: "Frango Assado",
    description:
      "Peitos de frango suculentos temperados e assados até dourar e ficar macios por dentro.",
  },
  {
    title: "Bolo de Chocolate",
    description:
      "Um bolo rico e indulgente feito com cacau em pó, chocolate derretido e cobertura de ganache.",
  },
  {
    title: "Pudim de Caramelo",
    description:
      "Um pudim macio e cremoso com sabor de caramelo, perfeito para uma sobremesa elegante.",
  },
];

const RecipeList = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="mae">
    <div className="alinhando">
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <CardRecipe
            key={index}
            title={recipe.title}
            description={recipe.description}
          />
        ))}
      </div>
      <button onClick={() => navigate(-1)}>
        Voltar para a página inicial
      </button>
      </div>
      </div>
    </>

  );
};

export default RecipeList;
