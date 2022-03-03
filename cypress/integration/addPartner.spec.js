/// <reference types="cypress" />

describe('Worksuite Homework', () => {
  
  beforeEach(() => {
    cy.visit('https://autotest.worksuite.com/login/')
    cy.get('.shortlist-heading-h4').should('have.text', 'Login to Worksuite')
    cy.get('[data-testid="login-form--email"]').type('eryk.pilarski@gmail.com')
    cy.get('[data-testid="login-form--password"]').type('Jablko123!')
    cy.get('[data-testid="login-form--submit"]').click()
    
  })

  it('Add Partner', () => {
    cy.get('.action-bar-title').should('have.text',' All Partners ')
    cy.get('[ng-click="addVendor()"]').click()
    cy.get('.shortlist-heading-h2').should('have.text', ' Add partners ')
    cy.get('input[placeholder="Name"]').type('NewUserrandom2323')
    cy.get('input[placeholder="Email"]').type('NewPartnerEmail@emaildomain.com')
    cy.get('.multistate-checkbox.multistate-checkbox--empty').click()
    cy.get('.multistate-checkbox.multistate-checkbox--full').should('be.visible')
    cy.get('.switcher-line').click()
    cy.get('switcher.ng-pristine.ng-untouched.ng-valid.ng-not-empty').should('be.visible')
    cy.get('[ng-click="$ctrl.addVendors()"]').click()
    cy.wait(4000)
    //cy.get('.action-bar-title').should('have.text',' All Partners ')

  })

  after(() => {

    cy.request({
      method: 'DELETE',
      url: 'https://autotest.worksuite.com/api/vendors/newuserrandom2323/',
      headers: {
        //':scheme': 'https',
        //'path': '/api/vendors/newuserrandom2323/',
        //'authority': 'autotest.worksuite.com',
        //'cookie': 'csrftoken=gtXgMRFNb1G6iopoq6qJ6iPHJzKtp0RmFBa3mQTuRCmX5JmYNunlyl9cArAEhCuC',
        //'cookie': 'sessionid=0opqw7jltcfmkbwv7ozq6bkbdrne9urg',
        //'cookie': '_ga=GA1.2.2068194712.1646306984',
        //'cookie': '_gid=GA1.2.82020548.1646306984',
        //'cookie': '_hp2_id.1502682623=%7B%22userId%22%3A%22468714018612658%22%2C%22pageviewId%22%3A%226418847323132358%22%2C%22sessionId%22%3A%227280769381047366%22%2C%22identity%22%3A%221194_85%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D',
        //'cookie': '_hp2_ses_props.1502682623=%7B%22r%22%3A%22https%3A%2F%2Fautotest.worksuite.com%2F%22%2C%22ts%22%3A1646306984400%2C%22d%22%3A%22autotest.worksuite.com%22%2C%22h%22%3A%22%2Fpartners%2Fshortlist%2Fsearch%2F%22%7D',
        //'cookie': '_ga_2177F5ZEC3=GS1.1.1646306984.1.1.1646307052.0',
        //'sec-ch-ua': '"(Not(A:Brand";v="8", "Chromium";v="98"',
        'accept': 'application/json, text/plain, */*',
        'x-csrftoken': 'gtXgMRFNb1G6iopoq6qJ6iPHJzKtp0RmFBa3mQTuRCmX5JmYNunlyl9cArAEhCuC',
        //'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36',
        //'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://autotest.worksuite.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://autotest.worksuite.com/',
        'accept-encoding': 'gzip, deflate',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      }
    })
    
  })
})
