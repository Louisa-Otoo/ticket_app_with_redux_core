import { Add_Ticket, Delete_Ticket, Fetch_Ticket, Update_Ticket } from "../action/action"
import '../../App.js'

const initialState = {
    tickets: []
}


export const ticketReducer = (state = initialState, action) => {
    // console.log(action)

    switch(action.type) {

        case Fetch_Ticket: {
            return{tickets:  action.payload }
        }

        case Add_Ticket: {
            return{tickets: [...state.tickets, action.payload] }
        }

        case Delete_Ticket: {
            return{tickets: state.tickets.filter((ticket) => ticket._id!== action.payload._id) }
        }

        case Update_Ticket: {
            return {
              tickets: state.tickets.map((ticket) =>
                ticket._id === action.payload._id
                  ? { ...ticket, workedOn: !ticket.workedOn }
                  : ticket
              ),
            };
          }

        default:
            return state
    }
  
}




// // // these were the cases when browser memory was used - no redux-thunk // // //

// case Delete_Ticket: {
        //     return{tickets: state.tickets.filter((ticket) => ticket.id!==action.payload) }
        // }

 // case Update_Ticket: {
        //     return{ tickets: state.tickets.tickets.map((ticket)=> ticket.id ===action.payload ? {...ticket, workedOn } : ticket) }
        // }
    //     return { tickets: state.tickets.map((ticket) => {
    //        if(ticket.id ===action.payload) {
    //         return {...ticket, workedOn: !ticket.workedOn }
    //       }else {
    //             return ticket
    //      }
    //     })
    //   }


    //     case Update_Ticket: {
    //     return { tickets: state.tickets.map((ticket) => {
    //        if(ticket._id === action.payload._id) {
    //         return action.payload
    //       }else {
    //             return ticket
    //      }
    //     })
    //   }
 

