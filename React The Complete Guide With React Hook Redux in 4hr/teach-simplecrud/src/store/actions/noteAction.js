import { collection, doc, setDoc, deleteDoc, updateDoc} from 'firebase/firestore';

import db from "../../config/fbconfig";

//let navigate = useNavigate()
export const addNote = (note) => {

    async function addNotes(db) {
        const noteref = doc(collection(db, "notes"))

        await setDoc(noteref, {
            id: noteref.id,
            title: note.title,
            content: note.content,
            favorite:false,
            createdAt: new Date()
        });
    }
    addNotes(db).then(function (doc) {
        console.log("adicionado");
    })
}

export const deleteNote = (note) => {
    const postRef = doc(db, 'notes', note.id);
    deleteDoc(postRef).then((res) => {
      console.log("eliminado")
    })
  }

export const toggleFav = (note) => {
    const favStatus = !note.favorite
    console.log("update", note)
    async function editpost(db) {
      const noteRef = doc(db, 'notes', note.id)

      await updateDoc(noteRef, {
          favorite: favStatus
      });
      
    }
      
    editpost(db).then(function (doc) {
      console.log("Editado");
    })
  }

  export const updateNote = (id, title, content) => {
    console.log("update", id, title, content)
    async function editpost(db) {
      const noteRef = doc(db, 'notes', id)

      await updateDoc(noteRef, {
          title: title,
          content: content
      });
      
    }
      
    editpost(db).then(function (doc) {
      console.log("Editado");
    })
  }

