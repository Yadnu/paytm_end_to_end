import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path= "/signup" element></Route>
        <Route path="/signin" element></Route>
        <Route path="/dashboard" element></Route>
        <Route path="send" element></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
