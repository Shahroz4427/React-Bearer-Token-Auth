


import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Button, Container } from 'react-bootstrap';
import userRegistrationRules from '../rules/UserRegistrationRules';
import UserAuthService from "../services/UserRegService";


export default function Resgister() {

    const { register, clearErrors, reset, handleSubmit, formState: { errors }, setError } = useForm({
        mode: 'all',
        resolver: zodResolver(userRegistrationRules),
    });


    const onSubmit = (data) => {
        UserAuthService.registerUser(data)
            .then(response => {
                clearErrors();
                reset();
                window.location.href = '/login';
            })
            .catch(error => {
                setError("email", {
                    type: "manual",
                    message: error.message ||
                        "An error occurred"
                });
            });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="my-2" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        {...register("name")}
                    />
                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </Form.Group>
                <Form.Group className="my-2" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        {...register("email")}
                    />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                </Form.Group>
                <Form.Group className="my-2" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        {...register("password")}
                    />
                    {errors.password && <span className="text-danger">{errors.password.message}</span>}
                </Form.Group>
                <Button className="my-2" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
};