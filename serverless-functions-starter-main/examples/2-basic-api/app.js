const result = document.querySelector('.result')

const fetchData = async () => {
    // console.log('fetched data called');
    try {
        //const data = await axios.get('/.netlify/functions/1-hello')
        const {data} = await axios.get('/api/2-basic-api')
        const products = data.map((product)=>{
            const {image:{url}, name, price} = product
            return `<article class="product">
            <img src="${url}" alt="${name}"/>
            <div class="info">
            <h5>${name}</h5>
            <h5 class="price">$${price}</h5>
            </div>
            </article>`
        }).join('')
        result.innerHTML = products
        //console.log(data)
    } catch (error) {
        result.innerHTML = '<h4>There was an error. Please try again!</h4>' 
    }

}
 
fetchData();

// The return is from the examples -> 2-basic-api -> index.html.