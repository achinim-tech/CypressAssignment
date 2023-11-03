
import LandingPage from "../pageObjects/LandingPage.js"

describe('TestSuite',function()
{
    

    it('Test_001_Validate_Create_Company', function()
    {
        
        const testData = this.testData
        const landingPage =new LandingPage()

        landingPage.clickCreateButton()
        landingPage.createCompany(testData.companyName,testData.industry,testData.description)

        //Check the company availability
        landingPage.getCompanyList().each(($el, index, $list)=>
        {
            
            if($el.text().includes(testData.companyName))
        {
            expect($el.text()).to.equal(testData.companyName);
            cy.log(" Company Name : "+ $el.text())
        }         
    
        })

    })

    it('Test_002_Validate_Filter_Companies', function()
    {
       
        const testData = this.testData
        const landingPage =new LandingPage()
        
        //Check the count of companies in marketing industry
        landingPage.selectIndustry() .each(($el, index, $list)=>
    {
        if($el.text()==testData.industry)
        {
            cy.wrap($el).click()
        }

    }).then(function()
    {
        landingPage.getCompanyList().should('have.length',5)
    })
   

    })


    it('Test_003_Validate_Edit_Company', function()
    {
   
        const testData = this.testData
        const landingPage =new LandingPage()

        landingPage.clickCreateButton()
        landingPage.createCompany(testData.companyName,testData.industry,testData.description)
        landingPage.getCompanyList().each(($el, index, $list)=>
        {  
            if($el.text().includes(testData.companyName))
        {
            
            landingPage.clickeditCompany().eq(index).click()
            
        }
    
        })
        
        landingPage.editCompanyDetails(testData.updatedCompanyName)
        landingPage.getCompanyList().each(($el, index, $list)=>
        {
            
            if($el.text().includes(testData.updatedCompanyName))
        {
            expect($el.text()).to.equal(testData.updatedCompanyName);
            cy.log(" Updated Company Name : "+ $el.text())
        }

    })
  

    })
        
      
    it('Test_004_Validate_Delete_Company', function()
    {
           
        const testData = this.testData
        const landingPage =new LandingPage()
        let companyCount
        let newCompanyCount


        //Get current company count
        landingPage.getCompanyList().its('length').then((count) => {
            companyCount = count;
          }).then(function()
          {
            cy.log("Current Company count: "+companyCount)
          })
       
          cy.wait(1000)

          landingPage.getCompanyList().each(($el, index, $list)=>
        {
            if($el.text().includes(testData.DeleteCompanyName))
        {
            
            landingPage.clickDeleteCompany().eq(index).click()
        }
           
        })
        
        cy.wait(1000)

        //get company count after delete
        landingPage.getCompanyList().its('length').then((count) => 
        {
            newCompanyCount = count;
            cy.log("current count: "+ newCompanyCount)
          }).then(function()
          {
            cy.log("New Company count: "+newCompanyCount)
            landingPage.getCompanyList().should('have.length',(companyCount-1))
          })
         
         
       
      
      


    

    })
      

})