export const getLOTRCharacters = (limit = 100) => {
  return fetch(`https://the-one-api.dev/v2/character?limit=${limit}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer fgujWo4PO_6Z2CWSRCeQ'
    }
  })
  .then(async response => {
    const { docs } = await response.json()
    return docs;
  });
}