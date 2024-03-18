import dayjs from "dayjs";

describe('add entries for today', () => {
  it('adds entries', () => {
    cy.visit('/')
      .get("#UserName").type(Cypress.env('username'))
      .get("#Password").type(Cypress.env('password'))
      .get('button[type="submit"]').click();
      cy.fixture('entries.json').then((e) => {
        cy.log("Adding entry for: " + JSON.stringify(e));
        e.map(x => {
          cy.visit('/');
          const dateDiff = dayjs(x.date).diff(dayjs().startOf('week'), 'days');
          // debugger;
          if (dateDiff < 0) {
            let diff = dateDiff;
            while (diff < 0) {
              cy.get('#Back').click();
              diff += 7;
            }
            cy.get(`#${x.date}`).find('div[id^="quarter"]').first().click();
          } else if (dateDiff > 7) {
            let diff = dateDiff;
            while (diff > 0) {
              cy.get('#Forward').click();
              diff -= 7;
            }
          } else {
            cy.get(`#${x.date}`).find('div[id^="quarter"]').first().click();
          }
          cy.get('#ProjectId').select(x.projectId);
          cy.get('#TaskTypeId').select(x.taskTypeId);
          cy.get('#TimeFrom').type(x.start);
          cy.get('#TimeUntil').type(x.end);
          cy.get('#Description').type(x.description);
          cy.get('#submitButton').click();
        })
      })
  })
})