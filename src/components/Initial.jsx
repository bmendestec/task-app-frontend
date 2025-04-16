import '../components/styles/Initial.css';

export function Initial() {   
  return (
    <div className="initial-container">
      <header className="initial-header">
        <h1>Task Organizer</h1>
      </header>
      <main className="initial-main">
        <p>Organize suas tarefas e maximize sua produtividade!</p>
        <button className="initial-button" onClick={() => window.location.href = '/login'}>
          Ver Minhas Tarefas
        </button>
      </main>
    </div>
  );
}