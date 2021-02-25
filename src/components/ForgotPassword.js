import React, { useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function ForgotPassword() {
	const emailRef = useRef(); 
	const passwordRef = useRef();
	const passwordConfirmRef = useRef(); 
	const { resetPassword, currentUser } = useAuth();
	const [error, setError] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
 	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault()

		try{
			setError('');
			setMessage('');
			setLoading(true);
			await resetPassword(emailRef.current.value);
			setMessage('Check your inbox for reset instructions');
		}catch{
			setError("Failed to reset password!");
		}
		setLoading(false);	
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Password Reset</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					{message && <Alert variant="success">{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100" type="submit">Reset Password</Button>					
					</Form>
					<div className="w-100 text-center mt-2">
						<Link to="/login">Log In</Link>
					</div>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Don't have an account? <Link to="/signup">Sign Up</Link>
			</div>
		</> 
	);
}