export default async function putData(id) {

    const product = document.querySelector('#product').value;
    const brand = document.querySelector('#brand').value;
    const price = document.querySelector('#price').value;
    const amount = document.querySelector('#amount').value;

    await fetch(`https://backend-william-4qgntxmbf-thevalter.vercel.app/products/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product, brand, price, amount })
    });

};