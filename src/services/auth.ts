// import firebase from 'firebase';

// export class AuthService {

//   signup( email: string, password: string) {
//     // behind the scenes firebase.auth() encodes data
//     // sends it to a restful api endpoint
//     // then creates user in firebase
//     return firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then( (newUser) => {
//         firebase.database().ref('/users').child(newUser.uid).set( { email: email } );
//       });
//   }

//   signin(email: string, password: string) {
//     return firebase.auth().signInWithEmailAndPassword(email, password);
//   }

//   logout() {
//     firebase.auth().signOut();
//   }

//   getActiveUser() {
//     return firebase.auth().currentUser;
//   }

// }
