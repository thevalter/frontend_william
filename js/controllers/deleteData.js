export default async function deleteData(target) {
   
        await fetch(`https://backend-william-4qgntxmbf-thevalter.vercel.app/products/${target}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
};