import { useEffect, useState } from "react"

function AddItemForm({onAdd, editingItem, onUpdate}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        if(editingItem) {
            onUpdate({...editingItem, name, description})
        } else {
            onAdd({ name, description });
            setName("");
            setDescription("");
        }
        
    }

    useEffect(() => {
        if(editingItem) {
            setName(editingItem.name);
            setDescription(editingItem.description)
        } else {
            setName("");
            setDescription("");
        }
    },[editingItem])
return(
    <>
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input"

      />
      <button type="submit">{ editingItem ? "Update": "Add" }</button>
    </form>
    </>
)
}

export default AddItemForm