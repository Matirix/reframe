import Home from './Home'
import Reframe from './Reframe';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';


const AnimatedRoutes = () => {
    const location = useLocation()
    return (          
        <AnimatePresence exitBeforeEnter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reframe/:id" element={<Reframe />}></Route>
        </Routes> 
        </AnimatePresence> 
    );
}
 
export default AnimatedRoutes;