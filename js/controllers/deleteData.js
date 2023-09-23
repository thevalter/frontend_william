export default async function deleteData(target) {
   
        await fetch(`http://backend-william-4qgntxmbf-thevalter.vercel.app/products/products/${target}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
};