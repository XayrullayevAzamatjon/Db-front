document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};

        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        try {
            const response = await fetch('http://localhost:8080/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify(jsonData)
            });

            if (!response.ok) {
                throw new Error('Error registering user');
            }

            alert('User registered successfully!');
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Error registering user');
        }
    });
});
