import { database, store, firebaseapp } from './firebase';

export async function addMessage (name, lastname, email, phone, message) {

  const newMessage = {
    username: name + ' ' + lastname,
    email: email,
    phone: phone,
    message: message,
    sendAt: firebaseapp.firestore.FieldValue.serverTimestamp()
  }

  // const res = await database.ref('message/').push(newMessage);
  // newMessage.id = res.key;

  let Messages = store.collection('message').doc()
  await Messages.set(newMessage)
  // const newMessage = messages.concat(newmessage);
  // store.setState({
  //   messages: newMessage
  // })

  console.log('newMessage', newMessage)

}

export const sendMessage = (name, lastname, email, phone, message) => {
  console.log('message' + name + email + message);

  let newMessage = {
    username: name + ' ' + lastname,
    email: email,
    phone: phone,
    message: message
  }
  database.ref('message/' + message.uid).set(newMessage);
}
