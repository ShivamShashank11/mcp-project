const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const folderPath = path.join(__dirname, '..', 'files');


router.post('/create', (req, res) => {
  const { filename, content } = req.body;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  const filePath = path.join(folderPath, filename);

  if (fs.existsSync(filePath)) {
    return res.status(400).json({ message: 'File already exists.' });
  }

  fs.writeFileSync(filePath, content || '');
  res.json({ message: 'File created successfully.' });
});


router.put('/edit', (req, res) => {
  const { filename, newContent } = req.body;
  const filePath = path.join(folderPath, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found.' });
  }

  fs.writeFileSync(filePath, newContent || '');
  res.json({ message: 'File updated successfully.' });
});


router.delete('/delete', (req, res) => {
  const { filename } = req.body;
  const filePath = path.join(folderPath, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'File not found.' });
  }

  fs.unlinkSync(filePath);
  res.json({ message: 'File deleted successfully.' });
});


router.get('/files', (req, res) => {
  if (!fs.existsSync(folderPath)) {
    return res.json({ files: [] });
  }

  try {
    const files = fs.readdirSync(folderPath);
    const filesWithContent = files.map(filename => {
      const content = fs.readFileSync(path.join(folderPath, filename), 'utf-8');
      return { filename, content };
    });
    res.json({ files: filesWithContent });
  } catch (error) {
    res.status(500).json({ message: 'Error reading files.' });
  }
});

module.exports = router;
