const HYGRAPH_API = "https://ap-south-1.cdn.hygraph.com/content/cm7abntbf015t07wa3wdi4oox/master"; // Replace with your actual API endpoint

export async function fetchProducts() {
  const query = `
    {
      danapals {
        id
        name
        weight
        price
        image {
          url
        }
      }
    }
  `;

  const response = await fetch(HYGRAPH_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
  return data.data.danapals;
}
