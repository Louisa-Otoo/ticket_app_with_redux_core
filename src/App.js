import { useState, useEffect } from 'react'
import './App.css';
import Tickets from './Tickets'
import { useDispatch, useSelector } from 'react-redux';
import {addTicketRequest, fetchTicketRequest} from './store/thunk'


function App() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.tickets.tickets);  // fetches directly from the state
    // console.log(data)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')



    const createTicket = (e) => {
      e.preventDefault();
      const ticket = {
        title: title,
        description: description,
      };

      dispatch(addTicketRequest(ticket));
      setTitle("");
      setDescription("");
    };


    const fetchAll = (tickets) => {
      dispatch(fetchTicketRequest(tickets));
    }

    useEffect(() => {
      fetchAll()
    }, []);



  return (
    <>
    <div className='container'>
      <form onSubmit={createTicket} className='App'>

        <div>
          <label>Title</label>
          <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div>
          <label>Description</label>
          <textarea 
            type='textarea' name='description' cols='30' rows='5'
            value={description} onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <button onClick={()=> fetchAll()} disabled={!title || !description}>Add ticket</button>
        </div>

      </form>
      
    </div>

    <Tickets />  

    
    </>
  );
}

export default App;





// import { v4 as uuidv4 } from 'uuid';
// import { Add_Ticket } from './store/action/action';


// this is the first method without the redux-thunk

    // const createTicket = (e) => {
    //   e.preventDefault();
    //   const ticket = {
    //     id: uuidv4(),
    //     title: title,
    //     description: description,
    //     workedOn: false,
    //   };
    //   dispatch({ type: 'ADDTICKET', payload: ticket });
    //   setTitle("");
    //   setDescription("");
    // };
