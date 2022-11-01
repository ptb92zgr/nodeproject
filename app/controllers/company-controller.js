const Company = require('../db/models/company')

class CompanyController {

   async showCompanies(req,res) {
        const companies = await Company.find()
        res.render('pages/companies/companies', {
            companies,
        })
    }

    async showCompany(req, res) {
        const { name } = req.params
       
        const company = await Company.findOne({slug: name})
        res.render("pages/company", {
            name: company?.name,
            companies,
            title: company?.name ?? "Brak wyników",
                    })
    }

    showCreateCompanyForm(req,res) {
        res.render('pages/companies/create')
    }

    async createCompany (req, res){
       const company = new Company({
        name: req.body.name,
        slug: req.body.slug,
        employeesCount: req.body.employeesCount
        })

        try {
            await company.save()
        res.redirect('/firmy')
        } catch {
            res.render('pages/companies/create', {
                errors: e.errors
            })
        }
    }
}



module.exports = new CompanyController()