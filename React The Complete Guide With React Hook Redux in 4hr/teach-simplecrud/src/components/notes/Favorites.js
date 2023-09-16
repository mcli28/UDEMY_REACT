import React, {useState, useEffect} from 'react'
import {collection, query, where, getDocs} from 'firebase/firestore';
import db from '../../config/fbconfig'
import NotesList from './NotesList';

const Favorites = () => {
  
	const [notas, setNotas] = useState([])
  
	useEffect(() => {
		async function favoriteNotes(db) {
			const citiesRef = collection(db, "notes");
			const q = query(citiesRef, where("favorite", "==", true));
			const querySnapshot = await getDocs(q);
			return querySnapshot
			/*querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, " => ", doc.data());
				return doc.data()
				//setNotes(doc.data())
			});*/
		}
		favoriteNotes(db).then(function (query) {
			console.log(query)
			const notasArray = []
			query.forEach((doc) => {
				//console.log(doc.id, " => ", doc.data());
				notasArray.push(doc.data())
			})
			setNotas(notasArray)
		})
    }, [])

  return (
    <div>Favorites
		<div>
			<NotesList notes={notas} />
		</div>
	</div>
  )

}

export default Favorites