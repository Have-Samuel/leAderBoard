// create a function that displays data after the refresh button retrives it
// an eventListener for the btn
// recieve data from the API
// get an array
const refreshBtn = document.querySelector('#refreshBtn');

const refresh = () => {
  refreshBtn.addEventListener('click', () => {
    window.location.reload();
  });
};

export default refresh;