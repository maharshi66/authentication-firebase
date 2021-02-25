import React from 'react';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import PrivateRoute from './components/PrivateRoute';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route	} from 'react-router-dom';

function App() {
  return (
	<AuthProvider> 
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
      	<Router>	
      		<Switch>
	    	 <PrivateRoute exact path="/" component={Dashboard} />
	    	 <PrivateRoute path="/update-profile" component={UpdateProfile} />
	    	 <Route path="/signup" component={SignUp} />
	    	 <Route path="/login" component={LogIn} />
	    	 <Route path="/forgot-password" component={ForgotPassword} />
      		</Switch>
      	</Router>
      </div>
    </Container>
    </AuthProvider>
  );
}

export default App;
