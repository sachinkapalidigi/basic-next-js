
export const getUsers = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=2`);
    return response.json();
}

export const getUser = async (userID) => {
    const response = await fetch(`https://reqres.in/api/users/${userID}`);
    return response.json();
}