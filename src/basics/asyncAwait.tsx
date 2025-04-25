import { API_KEY, API_URL } from "./fetchExp";
export const getImage = async () => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}`
    );
    const {data} = await response.json();
    const { url } = data.images.original;
    return url;
  } catch (error: any) {
    console.log('<--------------- JK AsyncAwait --------------->');
    console.log(error?.message);
    return 'Not found image';
  }
}