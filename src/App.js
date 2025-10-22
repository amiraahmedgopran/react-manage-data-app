import './App.css';
import ItemList from './components/ItemList';
import { useState } from 'react';
import itemsData from "./data/items.json";
import AddItemForm from './components/AddItemForm';

function App() {
  const [items, setItems] = useState(itemsData);
  const [editingItem, setEditingItem] = useState(null)

  const addItem = (newItem) => {
    setItems([...items,{id: Date.now(), ...newItem}]);
  }

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id != id))
  }

  const handleEdit = (editItem) => {
    setEditingItem(editItem);
  }

  const handleUpdate = (updatedItem) => {
    const updatedList = items.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    )

    setItems(updatedList);
    setEditingItem(null);
  }

  console.log(itemsData)
  return (
    <div className="App">
      <div className='row'>
        <div className='column'>
        <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>
        <div className='column'>
        <AddItemForm onAdd={addItem} editingItem={editingItem} onUpdate={handleUpdate}  />
        </div>
      </div>
   
    </div>
  );
}

export default App;
