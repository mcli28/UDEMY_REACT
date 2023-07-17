import React, { useState, useEffect } from 'react';
import { collection, doc, setDoc} from 'firebase/firestore/lite';
import { db } from "../../config/fbconfig";
import {useNavigate} from "react-router-dom";

 const NoteAction = (note) => {
    let navigate = useNavigate()
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
        navigate("/")
    })
    
}
export default NoteAction