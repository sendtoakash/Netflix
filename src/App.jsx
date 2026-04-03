import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import './App.css'
import Body from '../src/components/Body/Body'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  )
}

export default App
