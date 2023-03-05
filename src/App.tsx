import React from 'react';
import logo from './logo.svg';
import { StoreList } from './cmps/store-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="">
          <img src="	https://s3-media0.fl.yelpcdn.com/assets/public/burst_white.yji-69d3bd788c1013a1c15e.svg" alt="" width="54" className="logo" />
          <h2 >Gifty</h2>
        </a>
        <nav>
          <a href="/" >Shop</a>
          <a href="#">How it works</a>
          <a href="#">Chat Support</a>
        </nav>
      </header>
      <article>
        <h1>Shop for Gift Cards</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur, officia, dignissimos iste perspiciatis voluptates iusto exercitationem labore numquam commodi totam a fuga quis quod quisquam cum harum unde vero reprehenderit sed culpa? Voluptatum delectus pariatur maiores dolore animi, labore, expedita aliquid ducimus esse enim dolorum fugit sequi velit porro.</p>

      </article>
      <StoreList />
    </div>
  );
}

export default App;
