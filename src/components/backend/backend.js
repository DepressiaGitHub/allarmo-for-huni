const sendForm = (url, formData, succsessFunctions, failFunctions) => {
  const timer = new AbortController();
  setTimeout(() => timer.abort(), 5000);

  fetch(url, {
    method: 'post',
    body: formData,
    signal: timer.signal,
  })
    .then((response) => {
      if (response.ok) {
        succsessFunctions.forEach((element) => {
          element();
        });
      }
    })
    .catch((error) => {
      if (error) {
        failFunctions.forEach((element) => {
          element();
        });
      }
    });
};

export default sendForm;
