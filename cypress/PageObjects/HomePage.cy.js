class HomePage
{

getEditBox()
{
    return cy.get('input[name="name"]:nth-child(2)');
}

getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-pristine');
}

getGender()
{
    return cy.get('select');
}

getEntrepreneaur()
{
    return cy.get('#inlineRadio3');
}

getshopTab()
{
    return cy.get(':nth-child(2) > .nav-link');
}

}

export default HomePage;

