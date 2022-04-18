const fetchGame = async (token,
  trivia_settings = { amount: 5, category: '', difficulty: '', type: '' }) => {
  let url = `https://opentdb.com/api.php?amount=${trivia_settings.amount}&token=${token}`;
  url = trivia_settings.category
    ? `${url}&category=${trivia_settings.category}`
    : url;
  url = trivia_settings.difficulty
    ? `${url}&difficulty=${trivia_settings.difficulty}`
    : url;
  url = trivia_settings.type
    ? `${url}&type=${trivia_settings.type}`
    : url;

  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchGame;
