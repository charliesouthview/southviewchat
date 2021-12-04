import axios from 'axios';

const createUser = async (req, res) => {
  const { userId, userName } = req.body;

  axios
    .post(
      'https://api.chatengine.io/projects/people/',
      { username: userName, secret: userId },
      { headers: { 'Private-Key': "480cccdb-93e3-4bbc-9baf-0fd9034cf014" } },
    )
    .then(apiRes => {
      res.json({
        body: apiRes.data,
        error: null,
      });
    })
    .catch(() => {
      res.json({
        body: null,
        error: 'There was an error creating the user',
      });
    });
};

export default createUser;
