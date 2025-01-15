function saveContact() {
    const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Juice Shack\nTEL:+966558871454\nEMAIL:info@juiceshack.com\nEND:VCARD`;
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Juice_Shack.vcf';
    link.click();
}

document.querySelectorAll('.bubbly-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.target.classList.add('animate');
        setTimeout(() => e.target.classList.remove('animate'), 700);
    });
});

function orderProduct(sizeId, quantityId) {
    const sizeElement = document.getElementById(sizeId);
    const quantityElement = document.getElementById(quantityId);

    const selectedOption = sizeElement.options[sizeElement.selectedIndex].value;
    const [size, price] = selectedOption.split('|'); // Split size and price
    const productName = sizeElement.getAttribute('data-product');
    const quantity = quantityElement.value;

    if (quantity <= 0) {
        alert("Please enter a valid quantity!");
        return;
    }

    // Calculate total price
    const totalPrice = price * quantity;

    // Create the WhatsApp message
    const message = `I would like to order ${quantity} ${productName} (${size}) for SAR ${totalPrice}`;
    const whatsappLink = `https://wa.me/966558871454?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, '_blank');
}
