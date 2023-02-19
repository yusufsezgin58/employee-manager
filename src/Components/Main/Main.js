import React, { useEffect, useState } from 'react'
import './Main.css'
import { useContext } from 'react'
import ThemeContext from '../../Context/Context'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'
import logo from '../../Img/icons8-name-tag-70.png'
import Adding from '../Adding/Adding'

function Main() {

  const { employees, setEmployees, theme, setTheme } = useContext(ThemeContext)
  const [inputValue, setInputValue] = useState("")
  const [cardVisibility, setCardVisibility] = useState("visible")

  return (
    <div>
      <div className='Header'>
        <div className='header-left'>
          <span>Employee Filter</span>
        </div>
        <div className='header-right'>
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Search with lower case" type="search" className="input" value={inputValue} onChange={(e) => {
              setInputValue(e.target.value)
            }} />
          </div>

          <div>
            <Button colorScheme={"teal"} id="theme" onClick={() => {
              setTheme(theme == "light" ? "dark" : "light")
            }}>
              {
                theme == "light" ?
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                  </svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
              }
            </Button>
          </div>
        </div>
      </div>

      <Adding className="adding"/>
      <div className='EmployeeCards'>


        {
          employees.filter((item) => {
            return inputValue.toLowerCase === "" ? item : item.name.toLowerCase().includes(inputValue) + item.name.toLowerCase().includes(inputValue)
          }).map((item, index) => {
            return (
              <div className={"employeeInfo"} key={index}>
                <SimpleGrid className={"card"}>
                  <Card >
                    <CardHeader>
                      <Heading size='lg' className='fw-bolder'>{index + 1}-{item.name}</Heading>
                      <Text className='fs-6 mt-2'>{item.cityName}</Text>
                    </CardHeader>
                    <CardBody>
                      <Text size={"sm"}><span className='fw-semibold'>Company</span> : {item.company}</Text>
                      <Text size={"sm"}><span className='fw-semibold'>Phone number</span> : <a href={`tel:${item.phone}`}>{item.phone}</a></Text>
                      <Text size={"sm"}><span className='fw-semibold'>E-mail</span> : {item.email}</Text>
                    </CardBody>
                    <CardFooter>
                      <a href={item.website} target="_blank">
                        <Button colorScheme={"teal"}>Web Site</Button>
                      </a>
                    </CardFooter>
                  </Card>
                </SimpleGrid>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Main
