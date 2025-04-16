import './App.css'

function App() { 

  return (
    <>
      <div>
        <h1>Task organizer</h1>
      </div>
      <div>
        <button onClick={() => window.location.href = '/login'}>Go to Login</button>
      </div>
    </>
  )
}

export default App
