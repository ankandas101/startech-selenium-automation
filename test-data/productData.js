import { faker } from '@faker-js/faker';



const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomEmail = faker.internet.email();
const randomPhone = faker.string.numeric('017########');
const randomAddress = faker.location.streetAddress();
const randomAddressCity = faker.location.city();
const develeryLocation = 'Bhola';

export const productData = {
    searchProductName: "HP 15",
    quantity: 10,
};