/// <reference types="cypress" />


describe('Worksuite Homework', () => {
  
  beforeEach(() => {
    cy.visit('/login/')
    cy.get('.shortlist-heading-h4').should('have.text', 'Login to Worksuite')
    cy.get('[data-testid="login-form--email"]').type(Cypress.env('email'))
    cy.get('[data-testid="login-form--password"]').type(Cypress.env('password'))
    cy.get('[data-testid="login-form--submit"]').click()
    
  })

  it('Add new job', () => {
    cy.visit('/marketplace/job-openings/list/?archived=false')
    cy.get('.action-bar-title').should('have.text',' Job openings ')
    cy.get('span[translate="MARKETPLACE_NEW_JOB_OPENING"]').click()
    cy.url().should('eq', 'https://autotest.worksuite.com/marketplace/job-openings/create/')
    cy.get('input[placeholder="Job title"]').type('QA Engineer')
    cy.get('span[ng-show="!$ctrl.formSaving && !$ctrl.jobOpening.id"]').click()
    cy.wait(5000)
    cy.get('.action-bar-title').should('have.text',' QA Engineer ')
  })
})
