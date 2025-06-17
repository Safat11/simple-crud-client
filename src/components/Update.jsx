import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email)

        const updatedUser = {name, email};

        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <h3>Update information of {loadedUsers.name}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={loadedUsers.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUsers.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;