import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Reframe = () => {
    const navigate = useNavigate()
    const insultId = useParams()


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
    // console.log(parseInt(insultId["id"]))
    const comm = healthyComm.filter(good => good.id == parseInt(insultId.id))[0]

    console.log(comm);
    return ( 
        
        <motion.div className="tip"
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0}}
        transition={{duration:0.5}}
        >
        {/* Return button */}
        <div className="prj-header">
                <button onClick={() => navigate('/')} className="toxicLine m-auto p-3 rounded-lg">Return</button>
                <h4 className="flex justify-center text-lg underline">{comm.toxic}</h4>
        </div>

        <p className="reframe flex justify-center text-lg m-20 p-10 toxicLine rounded-lg">{comm.reframe}</p>
        <p className="tip flex justify-center text-lg absolute inset-x-0 bottom-0 h-60">Tip: {comm.tip}</p>

        </motion.div>
     );
}
 
export default Reframe;