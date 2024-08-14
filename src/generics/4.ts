type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
    // Логіка оновлення або створення користувача
}

createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123'
});