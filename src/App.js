import './App.css';

function App() {
  const name = "Jenna";
  const list = ["우유","딸기","바나나"]

  return (
  <>
  <h1 className="orange">{`Hello! ${name}`}</h1>
  <h1 className="orange">Hello! {name}</h1>
  <h2>Hello!</h2>
  <p>{name}</p>
  <ul>
    <li>우유</li>
    <li>딸기</li>
    <li>바나나</li>
  </ul>
  <ul>
    {list.map((item) =>(
      <li>{item}</li>
    ))}
  </ul>
  <img 
  style={{ width: '200px', height: '200px'}}
  src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fc6%2F2e%2Fa5%2Fc62ea5db353fc2b75bed7fb3be42c251.jpg&type=sc960_832" 
  alt="nature" />
  </>
  )
}

export default App;
