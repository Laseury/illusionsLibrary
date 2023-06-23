import React, { useEffect, useState } from 'react';
import './index.css';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const MyLivro = () => {
  const [name, setName] = useState('');
  const [tipo, setTipo] = useState('');
  const [volumes, setVolumes] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [livros, setLivros] = useState([]);
  const [editingId, setEditingId] = useState(null); // Estado para armazenar o ID do livro em edição

  

  async function findAllLivros() {
    const livrosRef = collection(db, 'illusionslibrary');
    const querySnapshot = await getDocs(livrosRef);
    let lista = [];
    querySnapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        name: doc.data().name,
        tipo: doc.data().tipo,
        volumes: doc.data().volumes,
        autor: doc.data().autor,
        editora: doc.data().editora,
      });
    });
    setLivros(lista);
  }

  useEffect(() => {
    findAllLivros();
  }, []);

  async function registerLivro(e) {
    e.preventDefault();

    try {
      if (editingId) {
        // Se o ID de edição existe, atualize o documento existente
        const livroRef = doc(db, 'illusionslibrary', editingId);
        await updateDoc(livroRef, {
          name: name,
          tipo: tipo,
          volumes: volumes,
          autor: autor,
          editora: editora,
        });
        setEditingId(null); // Limpar o ID de edição após a conclusão da edição
      } else {
        // Caso contrário, adicione um novo documento
        await addDoc(collection(db, 'illusionslibrary'), {
          name: name,
          tipo: tipo,
          volumes: volumes,
          autor: autor,
          editora: editora,
        });
      }

      setName('');
      setTipo('');
      setVolumes('');
      setAutor('');
      setEditora('');
      alert('Gravou');
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteLivro(id) {
    try {
      // Excluir o documento do Firebase
      const livroRef = doc(db, 'illusionslibrary', id);
      await deleteDoc(livroRef);
      alert('Livro excluído');
    } catch (error) {
      console.log(error);
    }
  }

  function editLivro(id) {
    const livro = livros.find((livro) => livro.id === id);
    if (livro) {
      setName(livro.name);
      setTipo(livro.tipo);
      setVolumes(livro.volumes);
      setAutor(livro.autor);
      setEditora(livro.editora);
      setEditingId(id); // Definir o ID do livro em edição
    }
  }

  return (
    <div>
      <form onSubmit={registerLivro}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <input
          type="number"
          name="volumes"
          placeholder="Volumes"
          value={volumes}
          onChange={(e) => setVolumes(e.target.value)}
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <input
          type="text"
          name="editora"
          placeholder="Editora"
          value={editora}
          onChange={(e) => setEditora(e.target.value)}
        />
        <input type="submit" value="Cadastrar" className="btn" />
      </form>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Tipo</th>
              <th scope="col">Volumes</th>
              <th scope="col">Autor</th>
              <th scope="col">Editora</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.id}>
                <td>{livro.name}</td>
                <td>{livro.tipo}</td>
                <td>{livro.volumes}</td>
                <td>{livro.autor}</td>
                <td>{livro.editora}</td>
                <td>
                  <button type="button" onClick={() => editLivro(livro.id)}>
                    Editar
                  </button>
                  <button type="button" onClick={() => deleteLivro(livro.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLivro;
