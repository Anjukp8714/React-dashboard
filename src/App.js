
import './App.css'




import Chart from './Components/Chart';
import Table from './Components/Table';
import Menu from './Components/menu';

function App() {
  return (
    <div>
      <Menu/>
    <div className="dasboard w-[90%] md:w-[90%] mx-auto my-0 pt-100 pb-100">
      <div className='lefttable'> <Table/></div>
     <div className='rightchart'><Chart/></div>
      
    </div>
    </div>
  );
}

export default App;
