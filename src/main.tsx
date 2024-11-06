import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
// Import reusable components
import DataTable from './components/DataTable';

const App: React.FC = () => (
  <div>
    <h1>Reusable Components Data Table</h1>
    <DataTable />
  </div>
);

const rootElement = document.querySelector<HTMLDivElement>('#app');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
