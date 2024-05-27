import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse',
    margin:'20px',
    borderRadius:'5px'
  },
  tableHead:{
    backgroundColor:'lightseagreen'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px',
      border: '1px solid',
      padding: '2px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
    const [userFirstName, setUserFirstName] = useState("Coder")
    const [userLastName, setUserLastName] = useState("Byte")
    const [phoneNumber, setPhoneNumber] = useState("8885559999")
  return (
    <form onSubmit={e => { 
      addEntryToPhoneBook({
        "firstName": userFirstName,
        "lastName": userLastName,
        "phone": phoneNumber
      });
      e.preventDefault() 
    }} 
    style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={userFirstName}
        onChange={(e) => setUserFirstName(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={userLastName}
        onChange={(e) => setUserLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({entries}) {

  return (
    <table style={style.table} className='informationTable'>
      <thead style={style.tableHead}> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
      <tbody>
      {entries.sort((a,b) => a.lastName < b.lastName ? -1 : 1).map((entry) => {
        return (
          <tr>
            <td style={style.tableCell}>{entry.firstName}</td>
            <td style={style.tableCell}>{entry.lastName}</td>
            <td style={style.tableCell}>{entry.phone}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export function Application(props) {
const [phoneBookEntry,setPhoneBookEntry]= useState([]);
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={(newEntry) => setPhoneBookEntry([...phoneBookEntry, newEntry])}/>
      <InformationTable entries={phoneBookEntry}/>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);