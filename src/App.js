
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <p>Things are <span>awesome</span> here at</p>
        <h1>Awesome<span>Co</span></h1>
        <p>We <strong>Design</strong> and <strong>Develope Awesome</strong> stuff</p>
      </div>

      <div className="sales-points">
        <div className="sales-point">
          <h2>Sales Point 1</h2>
          <p>Maecenas id volutpat tellus. Praesent at rhoncus ante, non sollicitudin nisl.</p>
        </div>
        <div className="sales-point">
          <h2>Sales Point 2</h2>
          <p>Maecenas id volutpat tellus. Praesent at rhoncus ante, non sollicitudin nisl.</p>
        </div>
        <div className="sales-point">
          <h2>Sales Point 3</h2>
          <p>Maecenas id volutpat tellus. Praesent at rhoncus ante, non sollicitudin nisl.</p>
        </div>
      </div>

      <div className="cta">
        <div className="cta-text">
          <h2>Call to <span>Action</span></h2>
          <p>Sed lacus leo, auctor ut odio non, tincidunt blandit nunc. Integer mauris dolor, maximus eu consectetur non, imperdiet sit amet nisi. Nam in sem finibus mi hendrerit ornare eu eu leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vestibulum, magna sit amet interdum fringilla.</p>
          <button href="" className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
