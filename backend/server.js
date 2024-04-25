const express = require('express');
const xlsx = require('xlsx');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.get('/search', (req, res) => {
  let id = req.query.id;

  let workbook = xlsx.readFile('series.xlsx');
  let sheet_name_list = workbook.SheetNames;
  let data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  console.log(data);
  // Busca el ID en los datos del Excel

  let resultado = data.filter((item) => item.ITEM?.trim() === id);
  console.log('resultado encontrado: ', resultado)

  res.json(resultado);
});

app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
