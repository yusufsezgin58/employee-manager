import React, { useContext, useState } from 'react'
import './Adding.css'
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import ThemeContext from '../../Context/Context'

function Adding() {

  const [name, setName] = useState("")
  const [cityName, setCityName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [url, setURL] = useState("")

  const { employees, setEmployees, theme } = useContext(ThemeContext)

  return (
    <div className={`form`} id={theme == "light" ? "light" : "dark"}>
      <div className='form-inside'>
        <p>
          <Button colorScheme={"teal"} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Add Employee
          </Button>
        </p>
        <div class="collapse mt-4" id="collapseExample">
          <div class="card card-body" id='cardBody'>
            <FormControl isRequired className='form-element'>
              <FormLabel className={theme == "light" ? "text-dark" : "text-light"}>Employee Name</FormLabel>
              <Input value={name} onChange={(e) => {
                setName(e.target.value)
              }} placeholder='Name' />
            </FormControl>

            <FormControl isRequired className='form-element'>
              <FormLabel className={theme == "light" ? "text-dark" : "text-light"}>City Name</FormLabel>
              <Input value={cityName} onChange={(e) => {
                setCityName(e.target.value)
              }} placeholder='City Name' />
            </FormControl>

            <FormControl isRequired className='form-element'>
              <FormLabel className={theme == "light" ? "text-dark" : "text-light"}>Company Name</FormLabel>
              <Input value={companyName} onChange={(e) => {
                setCompanyName(e.target.value)
              }} placeholder='Company Name' />
            </FormControl>

            <FormControl isRequired className='form-element'>
              <FormLabel className={theme == "light" ? "text-dark" : "text-light"}>Phone Number</FormLabel>
              <Input value={phone} onChange={(e) => {
                setPhone(e.target.value)
              }} placeholder='Phone' type={"tel"} />
            </FormControl>

            <FormControl isRequired className='form-element'>
              <FormLabel className={theme == "light" ? "text-dark" : "text-light"}>E-mail</FormLabel>
              <Input value={email} onChange={(e) => {
                setEmail(e.target.value)
              }} placeholder='E-mail' type={"email"} />
            </FormControl>

            <FormControl isRequired className='form-element'>
              <FormLabel className={theme == "light" ? "text-dark" : "text-light"}>Web Site URL</FormLabel>
              <Input value={url} onChange={(e) => {
                setURL(e.target.value)
              }} placeholder='URL' type={"url"} />
            </FormControl>

            <Button className='button' onClick={() => {
              setEmployees([...employees, { name: name, city: cityName, company: companyName, phone: phone, email: email, website: url }])
            }} colorScheme={"teal"}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adding
