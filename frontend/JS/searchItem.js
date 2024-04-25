document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const id = document.getElementById('idInput').value;
  searchInExcel(id);
});

const searchInExcel = (id) => {
  fetch(`http://localhost:3000/search?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      displayResult(data);
    })
    .catch((error) => console.error('Cannot read file!:', error));
};

const displayResult = (result) => {
  const resultDiv = document.getElementById('result');  
    console.log(result)
  if (result.length > 0) {
    resultDiv.innerHTML =
      '<div class="card"><p>Item: ' + result[0].ITEM + '</p><p>AREA: ' + result[0].AREA + '</p></div>';
  } else {
    console.log('item not found');
    resultDiv.innerHTML ='<p>ITEM not found</p>';
  }
};
