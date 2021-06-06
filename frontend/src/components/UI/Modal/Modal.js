import React, { Component } from "react";

import Backdrop from "../Backdrop/Backdrop";
import classes from './Modal.css';
import Auxillary from '../../../HOC/Auxillary'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
const countryList = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 
'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 
'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 
'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo (Brazzaville)', 
'Congo (Kinshasa)', 'Cook Islands', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 
'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 
'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 
'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Johnston Atoll', 'Jordan', 
'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 
'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Midway Islands', 'Moldova', 'Mongolia', 'Montenegro', 
'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 
'Norfolk Island', 'North Korea', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 
'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 
'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 
'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 
'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 
'Vietnam', 'Virgin Islands', 'Wake Island', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

//import Backdrop from '../Backdrop/Backdrop';
const myModal = (props) => {
    let transformedCountries = Object.values(countryList)
      .map(country => {
        return <option> {country} </option>
      })

    return (
      /**
       * title = models.CharField(max_length=120)
    country = models.CharField(max_length=80)
    description = models.TextField()
    time = models.DateField()
    complete = models.BooleanField(default=False)
       */
       <Auxillary>
        <Modal isOpen={true} toggle={props.closeModal}>
          <ModalHeader toggle={props.closeModal}>Test</ModalHeader>
          <Form>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input type="text" name="title" id="title" placeholder="Title" value={props.activeItem.title} onChange={props.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input type="select" name="country" id="countrySelectMulti"  value={props.activeItem.country} onChange={props.handleChange}>
               {transformedCountries}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for='description'>Description</Label>
              <Input type="textarea" name="description" id="description" placeholder="Description" value={props.activeItem.description} onChange={props.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for='time'>Time</Label>
              <Input type="date" name="time" id="time" placeholder="Title" value={props.activeItem.time} onChange={props.handleChange}/>
            </FormGroup>
			<FormGroup>
				<Label for='complete'>Completed?</Label>
			
				<Input type='checkbox' name='complete' id='complete' defaultChecked={props.activeItem.complete} onChange={props.handleChange}/>
			</FormGroup>
            <Button onClick={props.submit}> Submit</Button>
          </Form>
        </Modal>
        </Auxillary>
      );
}

export default myModal;