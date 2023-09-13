
class Home
{

        WomenIcon = ":nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa";
        Dress = "Dress";
        ViewProduct = ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a";
        Sleeveless = ":nth-child(5) > .btn";
        ContinueShop = "//button[contains(text(),'Continue Shopping')]";
        Madam = "Madame";
        EnlargeImage = ":nth-child(6) > .product-image-wrapper > .single-products > .productinfo > img";
        ProductImage = ":nth-child(6) > .product-image-wrapper > .choose > .nav > li > a";
        QuantityInc = "input[name='quantity']";
        RosePinkDress = "//button[@class='btn btn-default cart']";
        Cart = "View Cart";
        Checkout = "Proceed To Checkout";

        

    ExpandWomenIcon()
    {
        cy.get(this.WomenIcon).click()
        
    }
    
    DressIcon()
    {
        cy.contains(this.Dress).click();
    }

    
    ViewProdIcon()
    {
        cy.get(this.ViewProduct).click();
    }
    

    SleevelessDress()
    {
        cy.get(this.Sleeveless).click()
       
    }

    ContinueShopping()
    {
        cy.xpath(this.ContinueShop).click().should('have.attr', 'class')
        
    }

    Madame()
    {
        cy.contains(this.Madam).click().should('have.attr', 'href', '/brand_products/Madame')
        
    }

    EnlargeProductImage()
    {
        cy.get(this.EnlargeImage).should('have.attr', 'src').and('have.string', '/get_product_picture/38')
        cy.get(this.ProductImage).click().should('have.attr', 'href', '/product_details/38')
        

    }

    IncreaseQuantity()
    {
        const numClicks = 3;                         // Number of times to click the up arrow with loop
            for (let i = 0; i < numClicks; i++) 
                {
                    cy.get(this.QuantityInc).click().type('{upArrow}')
                }
        
    }

    PinkRoseMadame()
    {
        const productName = 'Pink Rose Madame';
        cy.log(`Add ${productName} to cart`);
        cy.xpath(this.RosePinkDress).click()
        
    }

    ViewCart()
    {
        cy.contains(this.Cart).click().should('have.attr', 'href').and('have.string', '/view_cart')
        
    }

    ProceedToCheckout()
    {
        cy.contains(this.Checkout).should('have.css', 'color', 'rgb(255, 255, 255)').click()
        
    }
}


export default Home;


