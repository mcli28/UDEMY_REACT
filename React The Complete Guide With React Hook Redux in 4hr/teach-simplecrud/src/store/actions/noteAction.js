//import { doc, setDoc, collection, addDoc, getFirestore } from "firebase/firestore";
import { collection, doc, setDoc} from 'firebase/firestore/lite';
//import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import React, { useState, useEffect } from 'react';
import { db } from "../../config/fbconfig";
import Home from '../../components/home/Home';
import App from '../../App';

function Ren() {
    console.log("en la funcion");
    /*useEffect(() => {
        console.log("en el use");
        //<Home/>
    });*/
    return <Home/>
}



export const NoteAction = (note) => {

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
    
    addNotes(db)
    Ren()
    /*return(
        <Home/>
    )*/    
}