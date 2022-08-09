import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {createServer, Model} from 'miragejs'


createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Pagar renda',
          type: 'withdraw',
          category: 'casa',
          amount: 4000,
          createdAt: new Date('2022-08-06 12:00:00'),
        },
        {
          id: 2,
          title: 'Propina da faculdade',
          type: 'withdraw',
          category: 'faculdade',
          amount: 450,
          createdAt: new Date('2022-08-06 12:30:00'),
        },
        {
          id: 3,
          title: 'Criando um website',
          type: 'deposit',
          category: 'tecnologia',
          amount: 1400,
          createdAt: new Date('2022-08-06 11:00:00'),
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    /*this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        }
      ]
    })*/

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
