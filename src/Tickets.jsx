import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.js'

import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import { deleteTicketRequest, updateTicketRequest } from './store/thunk.js';


const Tickets = () => {
  const dispatch= useDispatch();
  const dataCard = useSelector((state) => state.tickets.tickets);
    // console.log(dataCard) 

  

  const deleteTicket = (ticketId) => {
    dispatch(deleteTicketRequest(ticketId))
  }

  const updateTicket = (ticketId) => {
    dispatch(updateTicketRequest(ticketId))
    }


  return (
    <>

    <div className='tickets-container'>
      <h3>Tickets</h3>

      <div className='all-tickets'>

        {dataCard.map((ticket) => (
          <div key={ticket._id} className='ticket-item' > styles for worked on
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
              
              <div className='ticket-actions'>
                
                <RiDeleteBin6Line onClick={()=>deleteTicket(ticket._id)} />

                <MdOutlineModeEdit  onClick={()=>(updateTicket(ticket._id))} />
                {ticket.workedOn? <IoIosCheckmark /> : ""}
              
              </div>

          </div> 
        ))} 
      </div>
    </div>
    </>
  )
}

export default Tickets;







// import React from 'react'
// import { useSelector } from 'react-redux';


// const Tickets = () => {
//   // const dispatch= useDispatch();
//   const data = useSelector((state) => state.tickets.tickets);

//   return (
//     <main>
//       {
//         data.map((ticket)=>(
//         <Tickets ticket={ticket} key={ticket.id} />
//     ))
//   }
//     </main>
//   )
// }



// export default Tickets; 


// // // these were used when the browser memory was used -- no redux-thunk

// const deleteTicket = (ticketId) => {
  //   dispatch({ type: 'DELETETICKET', payload: ticketId})
  // } 

  // const updateTicket = (ticketId) => {
  //   dispatch({type: 'UPDATETICKET', payload: ticketId})
  //   }

  
  {/* <MdOutlineModeEdit  onClick={()=>updateTicket(ticket.id)} />
      {ticket.workedOn? <IoIosCheckmark /> : ""} */}

  {/* <MdOutlineModeEdit  onClick={()=>dispatch(updateTicketRequest(ticket._id))} />
      {ticket.workedOn? <IoIosCheckmark /> : ""}
   */}
   // the above line is for when dispatching directly on the button



