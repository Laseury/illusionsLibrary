import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { Link } from 'react-router-dom';

const LivrosList = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      const livrosRef = collection(db, 'illusionslibrary');
      const snapshot = await getDocs(livrosRef);
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        tipo: doc.data().tipo,
        volumes: doc.data().volumes,
        autor: doc.data().autor,
        editora: doc.data().editora,
      }));
      setLivros(lista);
    }

    fetchLivros();
  }, []);

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

  return (
    <div>
      <h1>Todos os Livros</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Volumes</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.id}>
              <td>{livro.id}</td>
              <td>{livro.name}</td>
              <td>{livro.tipo}</td>
              <td>{livro.volumes}</td>
              <td>{livro.autor}</td>
              <td>{livro.editora}</td>
              <td>
                <Link to={`/livros/edit/${livro.id}`}>Editar</Link>
              </td>
              <td>
              <button type="button" onClick={() => deleteLivro(livro.id)}>
                    Excluir
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LivrosList;
