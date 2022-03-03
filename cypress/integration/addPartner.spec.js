/// <reference types="cypress" />

import { genName } from "../support/utils"

describe('Worksuite Homework', () => {
  
  beforeEach(() => {
    cy.visit('/login/')
    cy.get('.shortlist-heading-h4').should('have.text', 'Login to Worksuite')
    cy.get('[data-testid="login-form--email"]').type(Cypress.env('email'))
    cy.get('[data-testid="login-form--password"]').type(Cypress.env('password'))
    cy.get('[data-testid="login-form--submit"]').click()
    
  })

  it('Add Partner', () => {
    cy.get('.action-bar-title').should('have.text',' All Partners ')
    cy.get('[ng-click="addVendor()"]').click()
    cy.get('.shortlist-heading-h2').should('have.text', ' Add partners ')
    var name = genName('Name')
    cy.get('input[placeholder="Name"]').type(name)
    var email = genName('Email')
    cy.get('input[placeholder="Email"]').type(email + '@somedomain123.org')
    cy.get('.multistate-checkbox.multistate-checkbox--empty').click()
    cy.get('.multistate-checkbox.multistate-checkbox--full').should('be.visible')
    cy.get('.switcher-line').click()
    cy.get('switcher.ng-pristine.ng-untouched.ng-valid.ng-not-empty').should('be.visible')
    cy.get('[ng-click="$ctrl.addVendors()"]').click()
    cy.wait(6000)
    cy.get('a[title="' + name + '"]').should('have.text',' ' + name + ' ')

  })
})
