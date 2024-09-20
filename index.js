

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/verify', (req, res) => {
  const { code } = req.body;

  if (!/^\d{6}$/.test(code)) {
    return res.status(400).json({ message: 'Invalid code length.' });
  }


  const lastDigit = parseInt(code.charAt(5), 10);
  if (lastDigit === 7) {
    return res.status(400).json({ message: 'Invalid code.' });
  }

  return res.status(200).json({ message: 'Verification successful.' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
