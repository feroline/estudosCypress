/// <reference types="cypress" />  

beforeEach(() => {
    // cy.visit("https://www.amazon.com.br/");
    // cy.get("#twotabsearchtextbox").type("Sandman")
    // cy.get('#nav-search-submit-button').click()
    cy.visit("https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2Fs%3Fk%3DSandman%26__mk_pt_BR%3D%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591%26ref%3Dnav_ya_signin&prevRID=BJF6WV0NR38MPSJ64HYA&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
});

describe("Cadastro ",() => {

    it('Realizar cadastro',() => {

        it('Nome',()=>{
            cy.get('#ap_customer_name').type("ana maria")
        })

        it('Gmail',()=>{
            cy.get('#ap_email').type("anamaria@gmail.com").should("have.value", 'anamaria@gmail.com')
        })

        it.only('Senha',()=>{
            cy.get('#ap_password').type('123456')
        })
        
        it('Confirmação de Senha',()=>{
            cy.get('#ap_password_check').type('123456')
        })
        
        it('Botao continue ',()=>{
            cy.get('#continue').click();
        })

    })
})

