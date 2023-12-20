
export const addTicketRequest = (ticket) => async (dispatch, getState) => {
    const body = JSON.stringify(ticket)

    try {
        const response = await fetch('http://localhost:5000/api/ticket', {
        method: 'POST',
        body,
        headers: {
            'content-type': 'application/json'
        }
    })
    const ticket = await response.json()
    console.log(ticket)

    dispatch({type: 'ADDTICKET', payload: ticket})
        
    } catch (error) {
        console.log(error)     
    }

} 



export const fetchTicketRequest = (tickets) => async (dispatch, getState) => {

    try {
        const response = await fetch('http://localhost:5000/api/tickets');

        const tickets = await response.json();
        dispatch({ type: 'FETCHTICKET', payload: tickets });

    } catch (error) {
        console.log(error);
    }
}




export const deleteTicketRequest = (id) => async (dispatch, getState) => {

    try {
        const response = await fetch(`http://localhost:5000/api/ticket/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
         });
        const ticketId = await response.json();
        // console.log(ticketId)
    
        dispatch({ type: 'DELETETICKET', payload: ticketId })
            
    } catch (error) {
        console.log(error)
            
    }
}



    export const updateTicketRequest = (id) => async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:5000/api/tickets/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const ticketId = await response.json()

            dispatch({ type: 'UPDATETICKET', payload: ticketId })
        } catch (error) {
            
        }
    }


    