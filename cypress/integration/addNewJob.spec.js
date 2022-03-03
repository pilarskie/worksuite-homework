/// <reference types="cypress" />

describe('Worksuite Homework', () => {
  
  beforeEach(() => {
    cy.visit('https://autotest.worksuite.com/login/')
    cy.get('.shortlist-heading-h4').should('have.text', 'Login to Worksuite')
    cy.get('[data-testid="login-form--email"]').type('eryk.pilarski@gmail.com')
    cy.get('[data-testid="login-form--password"]').type('Jablko123!')
    cy.get('[data-testid="login-form--submit"]').click()
    
  })

  it('Add new job', () => {
    cy.visit('https://autotest.worksuite.com/marketplace/job-openings/list/?archived=false')
    cy.get('.action-bar-title').should('have.text',' Job openings ')
    cy.get('span[translate="MARKETPLACE_NEW_JOB_OPENING"]').click()
    cy.url().should('eq', 'https://autotest.worksuite.com/marketplace/job-openings/create/')
    cy.get('input[placeholder="Job title"]').type('Managero')
    cy.get('span[ng-show="!$ctrl.formSaving && !$ctrl.jobOpening.id"]').click()
    cy.get('.action-bar-title').should('have.text',' Managero ')
  })
})
