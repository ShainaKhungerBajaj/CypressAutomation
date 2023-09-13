import 'cypress-file-upload';

describe('File Uploads', ()  =>{
    
    it('Single File Upload' , ()=> {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.PNG');
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    })

    it('File Upload- Rename' , ()=> {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test1.PNG', fileName: 'myfile.PNG'});
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload - Drag and Drop' , ()=> {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile("test1.PNG" , {subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('contain' , "test1.PNG");

    })

    it('Multiple File Upload' , ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile( ["SQL.pdf" , "test1.PNG"])
        cy.get(':nth-child(6) > strong').should('contain.text' , 'Files You Selected:')
    })

    it.only('File Upload - Shadow Dom' , ()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('test1.PNG')

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test1.PNG');
    })
    


})