import './App.css';
import ToolsSection from './layout/ToolsSection/ToolsSection';
import ListSection from './layout/TasksSection/TasksSection';

function App() {


  return (
    <div className="App">
      <ToolsSection></ToolsSection>
      <ListSection selectedList={""}></ListSection>
    </div>
  );
}

export default App;
