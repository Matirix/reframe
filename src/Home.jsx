import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Reframe from "./Reframe";

const Home = () => {
    const healthyComm = [{
        id: 1,
        toxic: "Your idea is utter garbage",
        reframe: "Your idea could use more work!",
        tip: "Motivate them to try something else than to shut them down!"
    }, {
        id: 2,
        reframe: "Have you considered a different track?",
        toxic: "How are you even working here?",
        tip: "Rather than demand, carefully suggest an alternative!"
    }, {
        id: 3,
        reframe: "Could you come back a little later?",
        toxic: "God, you're so annoying. Just shut up",
        alternative: "I'm going to need some space",
        tips: "Usually you're coming from a place of frustration! not productivity."
    }, {
        id: 4,
        reframe: "I feel _ when you do _ and that makes me want to _",
        toxic: "Why do you always..",
        extra_tip: "Remember to state your feelings! It's their behaviour that's the problem not them.",
        alternaive: ""

    }]
    return (
    <motion.div className="home"
    initial={{opacity: 0}} 
    animate={{opacity: 1}} 
    exit={{x: -300}}
    transition={{duration:0.5}}
    >

        
        <motion.div className="introduction"
            initial={{opacity: 0, y: -150}} 
            animate={{opacity: 1, y: -10}} 
            transition={{delay: 0.7, type:"spring", stiffness: 500 ,duration:0.5}}
        
        >
            <p className="text-4xl underline mb-10">
                What is it you're dying to say?
            </p>

        {healthyComm && healthyComm.map(({id, toxic, tips, reframe}) => (
        <div className="listOfItems text-lg my-5" key={id}>
            
        <Link className="toxicLine flex justify-center m-auto py-2 border-1 rounded-lg shadow-sm" to={`/reframe/${id}`}>{toxic}</Link> 

        </div>
        )

        )}
        </motion.div>


    </motion.div>  );
}
 
export default Home;