export const fetchPurchases = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error fetching purchases');
      }
      return response.json();
    })
    .catch(error => {
      throw Error(error.message);
    })
}