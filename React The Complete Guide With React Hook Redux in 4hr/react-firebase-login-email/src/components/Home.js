import React, { useContext, useEffect, useState } from 'react'
import { 
  EuiFieldText, EuiFieldPassword, EuiButton,
  EuiFlexItem, EuiFlexGroup, EuiPanel,
  EuiTitle, EuiText, EuiTextAlign,
  EuiCard, EuiIcon} from '@elastic/eui'
import db, { auth } from '../firebase'
import {collection, query, where, getDocs, onSnapshot} from 'firebase/firestore';
import { UserContext } from '../UserContext';

const Home = () => {
  const [products, setProducts] = useState([])
  const [subscription, setSubscription] = useState(null)
  const {user}  = useContext(UserContext)
  
  useEffect(() => {
    const onsnapshot = onSnapshot(collection(db, 'users', userlsuid, 'postsusers'),
      (snapshot) => {
        const postsData = snapshot.docs.map(subscription => {
          console.log('subscription', subscription.data())
          setSubscription({
            role:subscription.data().role,
            current_period_start: subscription.data().current_period_start,
            current_period_end: subscription.data().current_period_end
          })
        })
      }
    )
  
    return () => {
      second
    }
  }, [third])
  
  
  useEffect(() => {
		async function productsQuery(db) {
			const productsRef = collection(db, "products");
			const q = query(productsRef, where("active", "==", true));
			const querySnapshot = await getDocs(q);
			return querySnapshot
		}
		productsQuery(db).then(function (query) {
			console.log(query)
			const productosArray = []
			query.forEach((doc) => {
				//console.log(doc.id, " => ", doc.data());
				productosArray.push(doc.data())
			})
			setProducts(productosArray)
		})
  }, [])
  
  const checkOut = (priceId) => {
    console.log(priceId)
    setUseruid(priceId)
    async function addpost(db) {
      const userCollRef = collection(db, 'customers')
      const postref = doc(collection(db, "checkout_session"))

      console.log(userCollRef)
      const userColRef = doc(collection(db, 'customers', priceId, 'checkout_session'))
      
      await setDoc(postref, {
        priceId: postref.id,
        success_url: window.location.origin,
        cancel_url: window.location.origin
      });
      await setDoc(userColRef, {
        priceId: userColRef.id,
        success_url: window.location.origin,
        cancel_url: window.location.origin
      });

      const onsnapshot = onSnapshot(collection(db, 'customers', userlsuid, 'checkout_session'),
        (snap) => {
          const {error, sessionId} = snap.data()
          
          if (error) {
            console.log(error.message)
          } 
          if(sessionId) {
            const stripe = async function stripeConn () {
              await loadStripe('pk_test_51NskjJAQBlDl2kzL681DxzxvapdUIK1UZ4FvMtoewtEIgY6UNJXBxxwgmyiWy5NMSEOBAaDe39rZKC1vZWCuVuGO00QRJHsyiI')
            }
            stripe.redirectToCheckout({sessionId})
          }
          /*const postsData = posts.docs.map(post => {
            let data = post.data()
  
            let {id} = post  
            let payload = {
              id,
              ...data
            }
            return  payload
          })
          setPosts(postsData)*/
        }
      )

    }
    
    addpost(db).then((res) => {
      console.log("adicionado")
    })
  }

  return (
    <EuiFlexGroup gutterSize="l">
        Welcome home {JSON.stringify(user)}
        {products.map(item => {
          //return (`<div>${item.name}<div>`)
          const isCurrentPlan = productData?.name?.toLowerCase().includes(subscription?.role)
          return <EuiFlexItem>
            <EuiCard
              textAlign="left"
              image={
                <div>
                  <img
                    src="https://source.unsplash.com/400x200/?Nature"
                    alt="Nature"
                  />
                </div>
              }
              title={item.name}
              description={item.description}
              footer={
                <EuiFlexGroup justifyContent="flexEnd">
                  <EuiFlexItem grow={false}>
                    <EuiButton onClick={()=>checkOut(productData.prices.priceId)}>Go for it</EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              }
            />
          </EuiFlexItem>
        })}
        <EuiButton onClick={()=>auth.signOut()}>Sign out</EuiButton>
        
    </EuiFlexGroup>
  )
}

export default Home