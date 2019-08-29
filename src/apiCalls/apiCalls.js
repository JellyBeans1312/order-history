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
export const deletePurchases = (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(`http://localhost:3001/api/v1/purchases/${id}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error deleting purchase');
      }
      return response.json();
    })
    .catch(error => {
      throw Error(error.message);
    })
}

export const postPurchases = (newPurchase) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newPurchase),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch('http://localhost:3001/api/v1/purchases', options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error adding new purchase');
      }
      return response.json();
    })
    .catch(error => {
      throw Error(error.message);
    })
}