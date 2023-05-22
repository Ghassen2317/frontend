import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';

const PDFList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchPDFFiles();
  }, []);

  const fetchPDFFiles = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/getconfirmo');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching PDF files:', error);
    }
  };

  const handlePDFClick = (fileId) => {
    const fileURL = `http://127.0.0.1:8000/getconfirmo/${fileId}`;
    window.open(fileURL, '_blank');
  };

  return (
    <div>
      <List>
        {files.map((file) => (
          <ListItem
            key={file.fileId}
            onClick={() => handlePDFClick(file.fileId)}
            button
          >
            <ListItemText primary={file.filename} />
          </ListItem>
        ))}
      </List> 
    </div>
  );
};

export default PDFList;
