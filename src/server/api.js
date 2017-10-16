import express from 'express';

const api = express.Router();

api.get('/dashboard', (req, res) => {
  res.json({
    dashboard: {
      numberOfResources: 97
    }
  })
});

api.get('/skills', (req, res) => {
  res.json({
    skills: ['Oracle PLSQL', 'JavaScript']
  });
});

export default api;
