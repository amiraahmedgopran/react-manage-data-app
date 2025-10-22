function ItemList({items,onDelete, onEdit}) {

    return (
        <ul className="allList">
          {items.map(item => {
            return (
            <li key={item.id} style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between',margin: "10px 0", borderBottom: "1px solid #ddd", padding: '10px 0'}}>
              <span style={{fontSize: '20px'}}><strong>{item.name}</strong> - {item.description}</span>
              <span> <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button> 
              <button className="btn btn-info"  onClick={() => onEdit(item)}>Edit</button></span>
            </li>
            )
          })}
        </ul>
      );
}

export default ItemList;