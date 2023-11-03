class LandingPage
{

    btn_Create='button.ant-btn.ant-btn-primary'
    txt_Company='#company'
    dd_Industry='#industry'
    dd_Option='div[class="ant-select-item-option-content"]'
    rdo_Active='#isActive'
    txa_Description='#about'
    btn_OK='.ant-modal-footer > .ant-btn-primary > span'
    lst_Companies='.ant-typography strong:visible'
    dd_IndustryList='.ant-select-selection-item'
    dd_IndustryListOption='.ant-select-item-option-content'
    btn_Edit='div.customer_company-info__4Uftz div span svg[data-icon="edit"]'
    btn_Delete='div.customer_company-info__4Uftz div span svg[data-icon="delete"]'


    clickCreateButton()
    {
        cy.get(this.btn_Create).click()  
    }

    createCompany(companyName,industry,description)
    {
        cy.get(this.txt_Company).type(companyName)
        cy.get(this.dd_Industry).click()
        cy.get(this.dd_Option)
        .each(($el, index, $list)=>
        {
        if($el.text()==industry)
        {
            cy.wrap($el).click()
        }
        })
        cy.get(this.rdo_Active).click()
        cy.get(this.txa_Description).type(description)
        cy.get(this.btn_OK).click()
    }

    getCompanyList()
    {
        return cy.get(this.lst_Companies)
       
        cy.wait(2000)
    }

    selectIndustry()
    {
        cy.get(this.dd_IndustryList).click()
        cy.wait(1000)
       return cy.get(this.dd_IndustryListOption)
    }

    clickeditCompany()
    {
        return cy.get(this.btn_Edit)

    }

    editCompanyDetails(updatedCompanyName)
    {
        cy.get(this.txt_Company).clear()
        cy.get(this.txt_Company).type(updatedCompanyName)
        cy.get(this.rdo_Active).click()
        cy.get(this.btn_OK).click()
    }

    clickDeleteCompany()
    {
        return cy.get(this.btn_Delete)
    }
    


}

export default  LandingPage;


  
