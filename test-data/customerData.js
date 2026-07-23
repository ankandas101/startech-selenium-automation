import { faker } from '@faker-js/faker';
 
export const customerData = {

 randomFirstName: faker.person.firstName(),
 randomLastName: faker.person.lastName(),
 randomEmail: faker.internet.email(),
 randomPhone: faker.string.numeric('017########'),
 randomAddress: faker.location.streetAddress(),
 randomAddressCity: faker.location.city(),
 develeryLocation: 'Bhola',
 
payment_method: 'online',
shipping_method: 'courier.express'
}