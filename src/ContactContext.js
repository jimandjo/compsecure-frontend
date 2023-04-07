import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ContactContext = createContext()

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState([])

  

  useEffect(() => {
    async function getContacts() {
      await refreshContacts()
    }
    getContacts()
  }, []);

  function refreshContacts() {
    return axios.get("http://localhost:3010/contacts")
      .then(response => {
        setContacts(response.data)
      })
  }

  function getContact(id) {
    return axios.get(`http://localhost:3010/contacts/${id}`)
      .then(response =>
        new Promise((resolve) => resolve(response.data))
      )
      .catch((error) =>
        new Promise((_, reject) => reject(error.response.statusText))
      )
  }

  function deleteContact(id) {
    axios.delete(`http://localhost:3010/contacts/${id}`)
      .then(refreshContacts)
  }

  function addContact(contact) {
    return axios.post("http://localhost:3010/contacts", contact)
    .then(response => {
      refreshContacts()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  function updateContact(contact) {
    return axios.put(`http://localhost:3010/contacts/${contact.id}`, contact)
    .then(response => {
      refreshContacts()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  return (
    <ContactContext.Provider
      value={{
        contacts,
        getContact,
        deleteContact,
        addContact,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}