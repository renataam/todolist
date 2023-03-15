import './Items.css'

function Items () {
    return (
      <div className="container">
        <div className="todo-itens">
          <span>comprar ração</span>
          <button>deletar</button>
          <button>feito</button>
        </div>
        <div className="todo-itens">
          <span>fazer comida e congelar</span>
          <button>deletar</button>
          <button>feito</button>
        </div>
        <div className="todo-itens">
          <span>arrumar a casa</span>
          <button>deletar</button>
          <button>feito</button>
        </div>
        <div className="todo-itens">
          <span>colocar câmera no quarto do Antonio</span>
          <button>deletar</button>
          <button>feito</button>
        </div>
      </div>
    );
}

export default Items;