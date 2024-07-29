"use server";

export const SearchAction = async (query) => {
  const response = await fetch(
    `https://api.search.brave.com/res/v1/web/search?q=${query}&offset=0`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "X-Subscription-Token": process.env.API_KEY,
      },
    }
  );
  const result = await response.json();
  return result;
};

export const SearchImageAction = async (query) => {
  const response = await fetch(
    `https://api.search.brave.com/res/v1/images/search?q=${query}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "X-Subscription-Token": process.env.API_KEY,
      },
    }
  );
  const result = await response.json();
  return result;
};
