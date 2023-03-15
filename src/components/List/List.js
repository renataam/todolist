

import Items from '../Items/Items';
import './List.css'

function List() {
  return (
    <div className="container">
      <section>
        <h1>"To do list" da Renata</h1>
        <Items />
      </section>
    </div>
  );
}

export default List;
