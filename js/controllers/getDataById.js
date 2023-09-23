export default async function getDataById(id) {

    const resp = await fetch(`http://backend-william-4qgntxmbf-thevalter.vercel.app/products/products/${id}`);
    const data = await resp.json();

    document.getElementById('product').value = data[0].product;
    document.getElementById('brand').value = data[0].brand;
    document.getElementById('price').value = data[0].price;
    document.getElementById('amount').value = data[0].amount;
};