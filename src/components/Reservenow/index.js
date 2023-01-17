import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, FormLabelSize, } from './ReservenowElements'
import { Component } from 'react';
import axios from 'axios';

class Reservenow extends Component {

  constructor() {
    super()
    this.state = {
      fullName: '',
      email: '',
      petName: '',
      kindOfPet: '',
      petWeight: '',
      petSize: '',
      startDate: '',
      endDate: '',
      
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changePetName = this.changePetName.bind(this)
    this.changeKindOfPet = this.changeKindOfPet.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePetWeight = this.changePetWeight.bind(this)
    this.changePetSize = this.changePetSize.bind(this)
    this.changeStartDate = this.changeStartDate.bind(this)
    this.changeEndDate = this.changeEndDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePetName(event){
    this.setState({
      petName:event.target.value
    })
  }
  changeKindOfPet(event){
    this.setState({
      kindOfPet:event.target.value
    })
  }
  
  changePetWeight(event){
    this.setState({
      petWeight:event.target.value
    })
  }
  changePetSize(event){
    this.setState({
      petSize:event.target.value
    })
  }
  changeStartDate(event){
    this.setState({
      startDate:event.target.value
    })
  }
  changeEndDate(event){
    this.setState({
      endDate:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const reserved = {
      fullName: this.state.fullName,
      email: this.state.email,
      petName: this.state.petName,
      kindOfPet: this.state.kindOfPet,
      petWeight: this.state.petWeight,
      petSize: this.state.petSize,
      startDate: this.state.startDate,
      endDate: this.state.endDate
      
    }

    axios.post('http://localhost:4000/app/reservenow', reserved)
    .then(response => console.log(response.data))

    this.setState({
      fullName: '',
      petName: '',
      kindOfPet: '',
      email: '',
      petWeight: '',
      petSize: '',
      startDate: '',
      endDate: '',
    })
  }

  render() {
    return ( 
      <>
      <Container>
        <FormWrap>
          <Icon to="/">NCJ</Icon>
          <FormContent>
            <Form onSubmit={this.onSubmit}>
              <FormH1>Reserve Now</FormH1>
              <FormH1>Please understand that submitting an online reservation request does not guarantee your pet a spot, especially during the holidays, until you have received a confirmation email from us. Occasionally, our emails go to spam. If you have not received a response in 24 hours, please check your spam folder for an email. We are closed for drop offs and pick ups on most federal holidays. For a full list of holiday hours and closures please visit our contact page.</FormH1>
              <FormLabel htmlFor='for'>Full Name</FormLabel>

              <FormInput type='text'
              placeholder='Full Name'
              onChange={this.changeFullName}
              value={this.state.fullName}
              required/>

              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='text'
              placeholder='E-mail'
              onChange={this.changeEmail}
              value={this.state.email}
              required/>

              <FormLabel htmlFor='for'>Pet's Name *</FormLabel>
              <FormInput type='text'
              placeholder='If you are requesting to board multiple pets, list 1. Pet, 2, Pet, Etc. '
              onChange={this.changePetName}
              value={this.state.petName}
              required/>

              <FormLabel htmlFor='for'>Pet's Breed *</FormLabel>
              <FormInput type='text'
              placeholder='If multiple pets, list 1. Pet, 2. Pet, etc. '
              onChange={this.changeKindOfPet}
              value={this.state.kindOfPet}
              required />
  
              <FormLabel htmlFor='for'>Pet's Weight </FormLabel>
              <FormInput type='text'
              placeholder='If you are requesting to board multiple pets, list 1. Pet , 2. Pet'
              onChange={this.changePetWeight}
              value={this.state.petWeight}
              required />

              <FormLabel htmlFor='for'>Pet Size</FormLabel>   
              <FormLabelSize>
              <select onChange={this.changePetSize}
              value={this.state.petSize}>
                <option value='' >--Please Select Size--</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
              </FormLabelSize>

            <FormLabel for='startDate'>Start Date Reservation</FormLabel>
            <FormLabelSize>
            <input type='date'
                onChange={this.changeStartDate}
                name='startDate'
                value={this.state.startDate}
                id='startDate'
                placeholder='Your StartDate'
                 />
            </FormLabelSize>

            <FormLabel for='startDate'>End Date Reservation</FormLabel>
            <FormLabelSize>
            <input type='date'
                onChange={this.changeEndDate}
                value={this.state.endDate}
                placeholder='Your StartDate'
                 />
            </FormLabelSize>

              
         
              
              

              

              

              <FormButton type='submit' value='Submit'>Reserve Now</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
    );
  }
}

export default Reservenow