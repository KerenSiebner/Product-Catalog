import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import { StoreList } from './cmps/store-list';
import { Filters } from './cmps/filters';
import { GiftDetails } from './cmps/gift-details';
import { storeService } from './services/store-service';
import { Store } from './models/store';
import { AppHeader } from './cmps/app-header';

function App() {
  const [mode, setMode] = useState('store-list')
  // const [selectedStore, setSelectedStore] = useState(storeService.getDefaultStore())
  const [selectedStore, setSelectedStore] = useState([] as any)


  function handleStoreSelect(storeId: number) {
    setMode('gift-details')
    if (!storeService.getStoreById(storeId)) return
    else {
      const store = storeService.getStoreById(storeId)
      console.log('store', store)
      setSelectedStore(store)
    }
  }

  function backToStoreList(): any {
    setMode('store-list')
  }

  return (
    <div className="App">
      <AppHeader />
      {mode === 'store-list' &&<article>
        <h1>Shop for Gift Cards</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur, officia, dignissimos iste perspiciatis
          voluptates iusto exercitationem labore numquam commodi totam a fuga quis quod quisquam cum harum unde vero reprehenderit sed culpa?
          Voluptatum delectus pariatur maiores dolore animi, labore, expedita aliquid ducimus esse enim dolorum fugit sequi velit porro.</p>
      </article>}

      {mode === 'store-list' && <Filters />}
      {mode === 'store-list' && <StoreList handleStoreSelect={handleStoreSelect} />}
      {/* {mode === 'gift-details' && <GiftDetails backToStoreList={backToStoreList} />} */}
      {mode === 'gift-details' && <GiftDetails selectedStore={selectedStore} />}
    </div>
  )
}

export default App;
