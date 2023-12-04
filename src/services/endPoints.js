const URL = 'https://parte2back.onrender.com/';
const endPoints = {
    products : `${URL}products`,
    productTitle: (title)=>`${URL}products?title=${title}`
}

export default endPoints;