import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';

const LivroEdit = ({ match }) => {
  const [livro, setLivro] = useState({});
  const [name, setName] = useState('');
  const [tipo, setTipo] = useState('');
  const [volumes, setVolumes] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');

  useEffect(() => {
    async function fetchLivro() {
      const livroId = match.params.id;
      const livroRef = doc(db, 'illusionslibrary', livroId);
      const snapshot = await getDoc(livroRef);
      const livroData = snapshot.data();
      setLivro(livroData);
      setName(livroData.name);
      setTipo(livroData.tipo);
      setVolumes(livroData.volumes);
      setAutor(livroData.autor);
      setEditora(livroData.editora);
    }

    fetchLivro();
  }, [match.params.id]);

  async function updateLivro(e) {
    e.preventDefault();

    const livroId = match.params.id;
    const livroRef = doc(db, 'illusionslibrary', livroId);

    try {
      await updateDoc(livroRef, {
        name: name,
        tipo: tipo,
        volumes: volumes,
        autor: autor,
        editora: editora,
      });

      alert('Livro atualizado com sucesso.');
      // Redirecionar para a página de visualização dos livros
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Editar Livro</h1>
      <form onSubmit={updateLivro}>
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
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
};

export default LivroEdit;
