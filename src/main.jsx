import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

class StartupErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error) {
    console.error('Portfolio render failed:', error);
  }
  render() {
    if (this.state.error) {
      return (
        <main style={{ minHeight: '100vh', padding: '12vh 8vw', background: '#080b10', color: '#f2f4f7', fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 42px)' }}>Portfolio could not render</h1>
          <p style={{ color: '#aeb9c8', lineHeight: 1.7 }}>The page loaded, but the interface encountered an error.</p>
          <pre style={{ color: '#78b2ff', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>{String(this.state.error?.message || this.state.error)}</pre>
        </main>
      );
    }
    return this.props.children;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StartupErrorBoundary>
      <App />
    </StartupErrorBoundary>
  </React.StrictMode>
);
