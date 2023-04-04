import { useEffect, useState } from 'react';
import axios from 'axios'

function ContactName() {
  let [name, setName] = useState("unknown")

  useEffect(() => {
    async function getName() {
      const response = await axios.get("http://localhost:3010/contacts/4")
      setName(response.data.name)
    }
    getName()
  }, [])

  return (
    <p>Name: {name}</p>
  )
}

export default ContactName;