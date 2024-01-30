document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.u-btn-2'); // Submit
    const imgPathInput = document.querySelector('.u-form-control'); // input img_path
    const attrsInputs = document.querySelectorAll('.u-field-input'); // checkbox attrs

    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();

        const imgPath = imgPathInput.value;
        const attrs = Array.from(attrsInputs).map(input => input.checked ? 1 : 0);

        try {
            const response = await fetch('http://0.0.0.0:8000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ img_path: imgPath, attrs: attrs }),
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            const data = await response.json();
            console.log('API Response:', data);

            // Process the API response as needed
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
