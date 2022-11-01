
const { default: mongoose } = require('mongoose')
const Schema = mongoose.Schema
const { checkForbidenString } = require('../validators')


const companySchema = new Schema({
    slug: {
     type: String,
     required: [true, 'pole slug jest wymagane'],
     minLength: [3, 'minimalna ilosc znakow to 3'],
     validate: value => checkForbidenString(value, 'slug'),
     trim: true,
     lowercase: true
    },
    name: {
     type: String,
     required: [true, 'pole name jest wymagane']
    },
    employeesCount: {
     type: Number,
     min: 1,
     default: `1`
    }
   })

    const Company = mongoose.model('Company', companySchema)

    module.exports = Company