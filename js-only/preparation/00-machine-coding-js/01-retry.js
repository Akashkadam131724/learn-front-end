let DUMMY_DATA_SUCCESS = {
  status: 200,
  data: {
    message: "success",
  },
};
let DUMMY_DATA_ERROR = {
  status: 500,
  data: {
    message: "error",
  },
};

const fetchApi = (delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        return res(DUMMY_DATA_SUCCESS); // simulate success
      }
      rej(DUMMY_DATA_ERROR); // force error for testing retries
    }, delay);
  });
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getData = async (noRetries = 3, delay = 2000) => {
  for (let attempt = 1; attempt <= noRetries; attempt++) {
    try {
      const response = await fetchApi(delay);
      console.log("✅ Success:", response);
      return response;
    } catch (error) {
      console.log(`❌ Attempt ${attempt} failed.`);
      if (attempt < noRetries) {
        await sleep(delay); // wait before retrying
      } else {
        console.log("💥 All retries failed.");
        return error;
      }
    }
  }
};

const getDataRecursive = async (noRetries = 3, delay = 2000) => {
  try {
    const response = await fetchApi(delay);
    console.log("✅ Success:", response);
    return response;
  } catch (error) {
    console.log(`❌ Failed attempt. Retries left: ${noRetries - 1}`);
    if (noRetries > 1) {
      await sleep(delay);
      return getData(noRetries - 1, delay);
    } else {
      console.log("💥 All retries failed.");
      return error;
    }
  }
};

getData();
getDataRecursive();
