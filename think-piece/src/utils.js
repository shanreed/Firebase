export const collectData = doc => ({ id: doc.id, ...doc.data() })

//OR
// export const collectData = doc => {
//     return { id: doc.id, ...doc.data() }
// };