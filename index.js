const axios = require('axios');

let IMGUR_CLIENT_ID = null;

const setClientId = (clientId) => {
  IMGUR_CLIENT_ID = clientId;
};


// imgur API
const uploadImgur = async (file) => {
  try {
    var formData = new FormData();
    formData.append('image',file)
    const response = await axios.post('https://api.imgur.com/3/image',formData,
      {
        headers: {
        authorization: `Client-ID ${IMGUR_CLIENT_ID}`
      }
    }
  );
    const result = Object.assign({ success: true, url: response.data.data.link });
    return result;
  } catch (error) {
    const result = Object.assign({ success: false, message: error.message, file });
    return result;
  }
};

module.exports = { uploadImgur , setClientId };
