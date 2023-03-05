
//import { doc, setDoc, collection, addDoc, getFirestore } from "firebase/firestore";

import { getFirestore, collection, addDoc} from 'firebase/firestore/lite';

//import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { db } from "../../config/fbconfig";

export const addNote = (note) => {

    console.log(note);
    console.log(note.title);
    console.log(note.content);
    async function addNotes(db) {
        const noteref = collection(db, "notes")
        const docRef = await addDoc(noteref, {
            title: note.title,
            content: note.content,
            favorite:false,
            createdAt: new Date()
        });
    }
    
    let addnotes = addNotes(db)
    console.log(addnotes);
    return (dispatch, getState, {getFirestore}) => {
        //const firestore = getFirestore()
        //firestore.collection('notes')
        //.add({
        //    title: note.title,
        //    content: note.content,
        //    favorite:false,
        //    createdAt: new Date()
        //})
        //.then(() =>{
        //    console.log('add the note successfully');
        //})
        //.catch(err)
        
        /*console.log(note);
        console.log(note.title);
        console.log(note.content);
        let id;
        async function addNote(db) {
            /*const docref = doc(db, "notes", id+1) 
            await setDoc(docref, {
                title: note.title,
                content: note.content,
                favorite:false,
                createdAt: new Date()
            });/////
            const noteref = collection(db, "notes")
            const docRef = await addDoc(noteref, {
                title: note.title,
                content: note.content,
                favorite:false,
                createdAt: new Date()
              });
        }

        let addnote = addNote(db)*/
        //const cityRef = doc(db, 'notes');
        //setDoc(cityRef, { content: note.content }, { title: note.title });
    }
    
}