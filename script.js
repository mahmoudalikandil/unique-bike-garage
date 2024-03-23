document.getElementById('checklist-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    // Fetch checklist items
    const checklistItems = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Create PDF content
    let content = '<h1>Motorcycle Workshop Checklist</h1><ul>';
    checklistItems.forEach(item => {
        content += `<li>${item.parentNode.textContent.trim()}</li>`;
    });
    content += '</ul>';
    
    // Generate PDF
    generatePDF(content);
});

function generatePDF(content) {
    // Code to generate PDF using a library like jsPDF or pdfmake
    // You'll need to integrate a library or write code to generate PDF
    // This example assumes you have a function called generatePDF already implemented
}
